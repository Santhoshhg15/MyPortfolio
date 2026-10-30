function details(){
  if(!P.name&&!P.role&&!P.email) return '';
  return 'MY DETAILS (collected from my form — use these as my answers and do not ask me again for anything listed here; ask me only about items marked "(not provided)"):\n'
  +'- Full name / brand name: '+v(P.name)+'\n- Role / title: '+v(P.role)+'\n- Email: '+v(P.email)+'\n- City, country: '+v(P.city)+'\n- Phone: '+v(P.phone)+'\n'
  +'- GitHub: '+v(P.github)+'\n- LinkedIn: '+v(P.linkedin)+'\n- Instagram: '+v(P.instagram)+'\n- Resume file name: '+v(P.resume)+'\n'
  +'- One-sentence summary: '+v(P.summary)+'\n- About me: '+v(P.about)+'\n'
  +'- Technical skills:'+ind(P.skills)+'\n- Soft skills: '+((P.soft&&P.soft.length)?P.soft.join(', '):'(not provided)')+'\n'
  +'- Projects:'+ind(P.projects)+'\n- Internships / experience:'+ind(P.experience)+'\n- Activities / leadership:'+ind(P.activities)+'\n'
  +'- Education: '+v(P.degree)+' — '+v(P.college)+'\n'
  +'- Self-introduction video (YouTube link): '+v(P.introurl)+'\n'
  +'- Project 1 (flagship) video link: '+v(P.project1video)+'\n'
  +'- Project 2 video link: '+v(P.project2video)+'\n'
  +'- Project 3 video link: '+v(P.project3video);
}
