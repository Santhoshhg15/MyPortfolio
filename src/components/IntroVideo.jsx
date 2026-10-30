import { useState } from 'react';
import { motion } from 'framer-motion';
import { introVideo, personalInfo } from '../data/portfolioData';
import { parseYouTube, thumbnailUrl } from '../utils/youtube';

// Self-introduction video. Shows a thumbnail first and loads the YouTube player only after a click.
const IntroVideo = () => {
  const [playing, setPlaying] = useState(false);
  const video = parseYouTube(introVideo.youtubeUrl);

  // No link in portfolioData.js, no section
  if (!video) return null;

  return (
    <section
      id="intro"
      className="bg-white pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-500 font-bold mb-6 bg-white shadow-sm">
            {introVideo.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-4">
            {introVideo.heading}
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto font-medium">
            {introVideo.description}
          </p>
        </div>

        {/* Video frame */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className={`relative mx-auto w-full ${video.isShort ? 'max-w-sm aspect-[9/16]' : 'max-w-4xl aspect-video'} rounded-3xl overflow-hidden border-4 border-[#ff2a2a] shadow-[0_30px_80px_rgba(255,42,42,0.25)] bg-black`}
        >
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
              title="Self-introduction video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Play introduction video"
              className="group absolute inset-0 w-full h-full cursor-pointer"
            >
              <img
                src={thumbnailUrl(video.id)}
                alt={`${personalInfo.name} self-introduction video`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <span className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-20 h-20 rounded-full bg-[#ff2a2a] flex items-center justify-center shadow-[0_0_40px_rgba(255,42,42,0.5)] group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-9 h-9 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </motion.div>

        <div className="text-center mt-6">
          <a
            href={introVideo.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-gray-500 hover:text-[#ff2a2a] transition-colors"
          >
            Watch on YouTube ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroVideo;
