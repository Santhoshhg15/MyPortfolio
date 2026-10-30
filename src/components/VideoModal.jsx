import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { parseYouTube } from '../utils/youtube';

// Full-screen YouTube player. Close with the X button, the Escape key, or a click on the dark overlay.
const VideoModal = ({ url, title, onClose }) => {
  const closeRef = useRef(null);
  const video = parseYouTube(url);

  useEffect(() => {
    // Lock page scrolling while open and restore it on close
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  if (!video) return null;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} video`}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white text-xl flex items-center justify-center hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-colors cursor-pointer"
      >
        ✕
      </button>

      <motion.div
        className={`w-full ${video.isShort ? 'max-w-sm aspect-[9/16]' : 'max-w-5xl aspect-video'} rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black`}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default VideoModal;
