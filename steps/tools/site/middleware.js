// TAP Academy Portfolio Playbook: password gate (Vercel Routing Middleware).
// Runs on Vercel's servers before any file is sent, so the playbook, prompts and previews
// are only delivered after the correct password. The password lives in the Vercel
// environment variable PLAYBOOK_PASSWORD (never in this file). Changing it signs everyone out.

export const config = { matcher: '/((?!brand/|favicon).*)' };

const COOKIE = 'tap_playbook';
const MAX_AGE = 60 * 60 * 24 * 30; // stay signed in for 30 days

async function tokenFor(password) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode('tap-academy-playbook:' + password),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode('student-access-v1'));
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, '0')).join('');
}

function same(a, b) {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

function readCookie(request, name) {
  const m = (request.headers.get('cookie') || '').match(new RegExp('(?:^|;\\s*)' + name + '=([^;]+)'));
  return m ? decodeURIComponent(m[1]) : '';
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function loginPage(message, status = 200) {
  const year = new Date().getFullYear();
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow">
<title>TAP Academy | Student sign in</title><link rel="icon" href="/brand/favicon.ico" sizes="48x48"><link rel="icon" type="image/png" sizes="32x32" href="/brand/favicon-32.png"><link rel="apple-touch-icon" href="/brand/apple-touch-icon.png">
<style>
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px;color:#0d3d54;
 font:16px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI Variable Text",system-ui,sans-serif;
 background:radial-gradient(900px 600px at 0% 0%,rgba(13,135,212,.25),transparent 60%),radial-gradient(800px 560px at 100% 100%,rgba(13,61,84,.16),transparent 60%),#eef5fb}
.card{width:min(420px,100%);padding:36px 32px 30px;border-radius:22px;text-align:center;
 background:rgba(255,255,255,.62);border:1px solid rgba(255,255,255,.8);
 -webkit-backdrop-filter:blur(20px) saturate(160%);backdrop-filter:blur(20px) saturate(160%);
 box-shadow:0 22px 60px rgba(13,61,84,.16),inset 0 1px 0 rgba(255,255,255,.9)}
img{width:200px;height:auto;display:block;margin:0 auto 18px}
h1{font-size:24px;margin:0 0 6px;letter-spacing:-.02em}
p{margin:0 0 22px;color:#5d7686;font-size:15px}
label{display:block;text-align:left;font-weight:600;font-size:14px;margin-bottom:6px}
input{width:100%;padding:13px 14px;border-radius:12px;border:1px solid rgba(13,61,84,.18);background:#fff;font:inherit;color:#0d3d54;outline:0}
input:focus{border-color:#0d87d4;box-shadow:0 0 0 4px rgba(13,135,212,.15)}
button{margin-top:14px;width:100%;padding:13px;border:0;border-radius:999px;background:#0d87d4;color:#fff;font:inherit;font-weight:600;cursor:pointer}
button:hover{filter:brightness(1.07)}
.err{margin:12px 0 0;color:#d70015;font-size:14px;font-weight:500}
small{display:block;margin-top:22px;color:#5d7686;font-size:12.5px}
</style></head><body>
<form class="card" method="post" action="/__login">
<img src="/brand/tap-academy-logo.png" alt="TAP Academy">
<h1>Portfolio Playbook</h1>
<p>For TAP Academy students. Enter the password your trainer gave you.</p>
<label for="pw">Password</label>
<input id="pw" name="password" type="password" autocomplete="current-password" required autofocus>
<button type="submit">Sign in</button>
${message ? `<p class="err" role="alert">${esc(message)}</p>` : ''}
<small>&copy; ${year} TAP Academy. All rights reserved.</small>
</form></body></html>`;
  return new Response(html, { status, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex' } });
}

export default async function middleware(request) {
  const password = (typeof process !== 'undefined' && process.env && process.env.PLAYBOOK_PASSWORD) || '';
  const url = new URL(request.url);
  if (!password) return loginPage('The playbook is locked. The trainer has not set a password yet.', 503);

  const expected = await tokenFor(password);

  if (url.pathname === '/__logout') {
    return new Response(null, { status: 303, headers: { location: '/', 'set-cookie': `${COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax` } });
  }

  if (url.pathname === '/__login') {
    if (request.method !== 'POST') return Response.redirect(new URL('/', url), 303);
    const form = await request.formData().catch(() => null);
    const given = form ? String(form.get('password') || '') : '';
    if (given && same(await tokenFor(given), expected)) {
      return new Response(null, { status: 303, headers: { location: '/', 'cache-control': 'no-store',
        'set-cookie': `${COOKIE}=${expected}; Path=/; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax` } });
    }
    await new Promise((r) => setTimeout(r, 800)); // slow down guessing
    return loginPage('That password is not correct. Check with your trainer.', 401);
  }

  if (same(readCookie(request, COOKIE), expected)) return; // signed in: serve the requested file
  return loginPage('', 401);
}
