import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Calendar, TrendingUp } from 'lucide-react';

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
}

interface TopNewReleasesProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

export function TopNewReleases({ games, onGameClick }: TopNewReleasesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check scroll position
  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [games]);

  // Get newest games (filter by recent release dates)
  const newReleases = games
    .filter(game => {
      // Check if game has 2025 or 2026 in the release date
      return game.releaseDate.includes('2025') || game.releaseDate.includes('2026');
    })
    .slice(0, 12);

  if (newReleases.length === 0) return null;

  return (
    <section className="mb-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Top New Releases
          </h2>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <TrendingUp className="w-6 h-6 text-cyan-400" />
          </motion.div>
        </div>
        <p className="text-zinc-500 text-sm">Fresh releases you can't miss</p>
      </motion.div>

      {/* Scrollable Game Cards */}
      <div className="relative">
        {/* Left Scroll Indicator */}
        <AnimatePresence>
          {canScrollLeft && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
            >
              <motion.div
                animate={{
                  opacity: [0.3, 1, 0.3],
                  x: [-3, 0, -3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Circuit-like arrow pointing left */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
                  {/* Left arrow point */}
                  <path d="M4 12L12 12" stroke="url(#gradientLeft)" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4 12L8 8" stroke="url(#gradientLeft)" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4 12L8 16" stroke="url(#gradientLeft)" strokeWidth="2" strokeLinecap="round"/>
                  {/* Circuit nodes */}
                  <circle cx="4" cy="12" r="1.5" fill="#06b6d4" className="animate-pulse"/>
                  <circle cx="8" cy="8" r="1" fill="#a855f7" opacity="0.6"/>
                  <circle cx="8" cy="16" r="1" fill="#a855f7" opacity="0.6"/>
                  <defs>
                    <linearGradient id="gradientLeft" x1="4" y1="12" x2="12" y2="12" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#06b6d4"/>
                      <stop offset="1" stopColor="#a855f7"/>
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right Scroll Indicator */}
        <AnimatePresence>
          {canScrollRight && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
            >
              <motion.div
                animate={{
                  opacity: [0.3, 1, 0.3],
                  x: [3, 0, 3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Circuit-like arrow pointing right */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
                  {/* Right arrow point */}
                  <path d="M20 12L12 12" stroke="url(#gradientRight)" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M20 12L16 8" stroke="url(#gradientRight)" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M20 12L16 16" stroke="url(#gradientRight)" strokeWidth="2" strokeLinecap="round"/>
                  {/* Circuit nodes */}
                  <circle cx="20" cy="12" r="1.5" fill="#06b6d4" className="animate-pulse"/>
                  <circle cx="16" cy="8" r="1" fill="#a855f7" opacity="0.6"/>
                  <circle cx="16" cy="16" r="1" fill="#a855f7" opacity="0.6"/>
                  <defs>
                    <linearGradient id="gradientRight" x1="20" y1="12" x2="12" y2="12" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#06b6d4"/>
                      <stop offset="1" stopColor="#a855f7"/>
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {newReleases.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -8 }}
              onClick={() => onGameClick(game)}
              className="flex-shrink-0 w-64 cursor-pointer group"
            >
              <div className="relative rounded-xl overflow-hidden bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                {/* Game Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <motion.img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    {game.trending && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        className="px-2 py-1 bg-purple-500/30 backdrop-blur-xl border border-purple-500/50 rounded-md flex items-center gap-1"
                      >
                        <TrendingUp className="w-3 h-3 text-purple-300" />
                        <span className="text-[10px] font-medium text-purple-200">Hot</span>
                      </motion.div>
                    )}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="px-2 py-1 bg-cyan-500/30 backdrop-blur-xl border border-cyan-500/50 rounded-md flex items-center gap-1"
                    >
                      <Calendar className="w-3 h-3 text-cyan-300" />
                      <span className="text-[10px] font-medium text-cyan-200">New</span>
                    </motion.div>
                  </div>

                  {/* Hover Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Game Info */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-zinc-800/80 border border-zinc-700/50 rounded text-[10px] text-zinc-400 font-medium uppercase tracking-wide">
                      {game.category}
                    </span>
                    <span className="text-[10px] text-zinc-500">{game.releaseDate}</span>
                  </div>
                  
                  <h3 className="text-base font-bold text-white mb-2 line-clamp-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {game.title}
                  </h3>
                  
                  <p className="text-xs text-zinc-400 mb-3 line-clamp-2 leading-relaxed">
                    {game.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-bold text-white">{game.rating}</span>
                      <span className="text-xs text-zinc-500">({game.reviews.toLocaleString()})</span>
                    </div>
                    
                    {/* Animated View Button */}
                    <motion.div
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-md text-[10px] font-medium text-cyan-300 uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View
                    </motion.div>
                  </div>
                </div>

                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, rgba(6,182,212,0.2), rgba(168,85,247,0.2), rgba(6,182,212,0.2))',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}