// Reads a YouTube link in any common format and returns { id, isShort }.
// Supports youtu.be/ID, youtube.com/watch?v=ID, /shorts/ID and /embed/ID (extra parameters are ignored).
export const parseYouTube = (url) => {
  if (!url) return null;
  const match = String(url).match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|v\/))([\w-]{11})/
  );
  if (!match) return null;
  return { id: match[1], isShort: /youtube\.com\/shorts\//.test(url) };
};

export const thumbnailUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
