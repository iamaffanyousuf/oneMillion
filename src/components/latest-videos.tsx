import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Star, TrendingUp } from 'lucide-react';

interface Game {
  id: number;
  title: string;
  image: string;
  rating: number;
  category: string;
  trending?: boolean;
  reviews: number;
  description: string;
  releaseDate: string;
  videoUrl?: string;
}

interface LatestVideosProps {
  games: Game[];
}

export function LatestVideos({ games }: LatestVideosProps) {
  const gamesWithVideos = games.filter(game => game.videoUrl);
  const [selectedGame, setSelectedGame] = useState<Game>(gamesWithVideos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      setIsPlaying(false);
    }
  }, [selectedGame]);

  // Check scroll position
  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
        setCanScrollUp(scrollTop > 10);
        setCanScrollDown(scrollTop < scrollHeight - clientHeight - 10);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, [gamesWithVideos]);

  const handlePlayVideo = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          await videoRef.current.play();
        }
      } catch (error) {
        console.error('Error playing video:', error);
        setIsPlaying(false);
      }
    }
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      handlePlayVideo();
    }
  };

  const handleGameSelect = (game: Game) => {
    setSelectedGame(game);
    setIsPlaying(false);
  };

  if (gamesWithVideos.length === 0) return null;

  return (
    <section id='latest-trailers' className="mb-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Latest Trailers
        </h2>
        <p className="text-zinc-500 text-sm">Watch the newest game trailers</p>
      </motion.div>

      {/* Video Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - Video Player */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="relative group rounded-xl overflow-hidden bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
            {/* Video Player */}
            <div className="relative aspect-video" onClick={handleVideoClick}>
              <video
                ref={videoRef}
                className="w-full h-full object-cover cursor-pointer"
                poster={selectedGame.image}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayVideo();
                }}
                playsInline
                preload="metadata"
              >
                <source src={selectedGame.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay */}
              {!isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer pointer-events-none"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:shadow-[0_0_60px_rgba(6,182,212,0.8)] transition-shadow pointer-events-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayVideo();
                    }}
                  >
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="white" />
                  </motion.button>
                </motion.div>
              )}

              {/* Custom Pause Overlay for when playing */}
              <AnimatePresence>
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm cursor-pointer transition-opacity duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayVideo();
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/60 backdrop-blur-xl border-2 border-white/30 flex items-center justify-center"
                    >
                      <div className="flex gap-1.5">
                        <div className="w-1.5 h-6 md:w-2 md:h-8 bg-white rounded-sm"></div>
                        <div className="w-1.5 h-6 md:w-2 md:h-8 bg-white rounded-sm"></div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Gradient Overlay at Bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Video Info */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 pb-6 md:pb-7 z-10 pointer-events-none md:pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-1.5 py-0.5 md:px-2.5 md:py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-md text-cyan-400 text-[10px] md:text-xs font-medium backdrop-blur-xl">
                    {selectedGame.category}
                  </span>
                  {selectedGame.trending && (
                    <span className="px-1.5 py-0.5 md:px-2.5 md:py-1 bg-purple-500/20 border border-purple-500/30 rounded-md text-purple-400 text-[10px] md:text-xs font-medium backdrop-blur-xl flex items-center gap-1">
                      <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3" />
                      Trending
                    </span>
                  )}
                </div>
                <h3 className="text-sm md:text-lg lg:text-xl font-bold text-white mb-2">{selectedGame.title}</h3>
                <p className="text-[10px] md:text-sm line-clamp-2 mb-4 text-zinc-400">{selectedGame.description}</p>
                <div className="flex items-center gap-4 text-xs md:text-sm">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-medium">{selectedGame.rating}</span>
                  </div>
                  <div className="text-zinc-400">
                    {selectedGame.reviews.toLocaleString()} reviews
                  </div>
                  <div className="text-zinc-500">
                    {selectedGame.releaseDate}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Game List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Scroll Up Indicator */}
          <AnimatePresence>
            {canScrollUp && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="hidden lg:block absolute -top-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
              >
                <motion.div
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    y: [-3, 0, -3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  {/* Circuit-like arrow */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
                    {/* Top arrow point */}
                    <path d="M12 4L12 12" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 4L8 8" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 4L16 8" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" />
                    {/* Circuit nodes */}
                    <circle cx="12" cy="4" r="1.5" fill="#06b6d4" className="animate-pulse" />
                    <circle cx="8" cy="8" r="1" fill="#a855f7" opacity="0.6" />
                    <circle cx="16" cy="8" r="1" fill="#a855f7" opacity="0.6" />
                    <defs>
                      <linearGradient id="gradient1" x1="12" y1="4" x2="12" y2="12" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#06b6d4" />
                        <stop offset="1" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scroll Down Indicator */}
          <AnimatePresence>
            {canScrollDown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="hidden lg:block absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
              >
                <motion.div
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    y: [3, 0, 3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  {/* Circuit-like arrow */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
                    {/* Bottom arrow point */}
                    <path d="M12 20L12 12" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 20L8 16" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 20L16 16" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" />
                    {/* Circuit nodes */}
                    <circle cx="12" cy="20" r="1.5" fill="#06b6d4" className="animate-pulse" />
                    <circle cx="8" cy="16" r="1" fill="#a855f7" opacity="0.6" />
                    <circle cx="16" cy="16" r="1" fill="#a855f7" opacity="0.6" />
                    <defs>
                      <linearGradient id="gradient2" x1="12" y1="20" x2="12" y2="12" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#06b6d4" />
                        <stop offset="1" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-3 py-1 px-1 lg:block lg:max-h-[450px] lg:overflow-y-auto lg:pr-2 lg:space-x-0 lg:space-y-4 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {gamesWithVideos.map((game, index) => (
              <motion.button
                key={game.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleGameSelect(game)}
                className={`w-48 lg:w-full flex-shrink-0 text-left group relative rounded-xl overflow-hidden transition-all duration-300 ${selectedGame.id === game.id
                    ? 'ring-2 ring-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)]'
                    : 'hover:ring-2 hover:ring-purple-500/30'
                  }`}
              >
                <div className="relative aspect-video">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity ${selectedGame.id === game.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-12 h-12 rounded-full bg-cyan-500/20 backdrop-blur-xl border border-cyan-500/30 flex items-center justify-center transition-transform ${selectedGame.id === game.id ? 'scale-100' : 'scale-0 group-hover:scale-100'
                        }`}>
                        <Play className="w-5 h-5 text-cyan-400 ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Selected Indicator */}
                  {selectedGame.id === game.id && (
                    <motion.div
                      layoutId="selectedGame"
                      className="absolute inset-0 border-2 border-cyan-500/50 rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>

                {/* Game Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3.5 bg-gradient-to-t from-black via-black/90 to-transparent">
                  <h4 className="text-sm font-medium text-white mb-1.5 line-clamp-1">{game.title}</h4>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-white">{game.rating}</span>
                    </div>
                    <span className="text-zinc-500">•</span>
                    <span className="text-zinc-400">{game.category}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}