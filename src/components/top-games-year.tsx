import { Star, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface Game {
  id: number;
  title: string;
  image: string;
  rating: number;
  category: string;
  reviews: number;
  releaseDate: string;
}

interface TopGamesYearProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

export function TopGamesYear({ games, onGameClick }: TopGamesYearProps) {
  // Get top 6 games by reviews count
  const topGames = [...games]
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 6);

  return (
    <section className="mb-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2">
            <motion.div 
              className="relative w-8 h-8"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(6, 182, 212, 0.4)',
                  '0 0 30px rgba(168, 85, 247, 0.6)',
                  '0 0 20px rgba(6, 182, 212, 0.4)',
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Rotating outer ring */}
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-cyan-400/50"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              {/* Counter-rotating inner ring */}
              <motion.div
                className="absolute inset-0.5 rounded-lg border border-purple-400/30"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              {/* Core holographic background */}
              <div className="absolute inset-1 rounded-md bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm" />
              {/* Icon container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              </div>
            </motion.div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Top Games of the Year
            </h2>
          </div>
        </div>
        <p className="text-zinc-400 text-sm">Most reviewed and highly rated games</p>
      </motion.div>

      {/* Horizontal Scroll Container */}
      <div className="relative -mx-4 px-4">
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {topGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onGameClick(game)}
              className="group relative flex-shrink-0 w-[320px] sm:w-[380px] overflow-hidden rounded-xl bg-zinc-900/50 border border-zinc-800 cursor-pointer hover:border-yellow-500/50 transition-all duration-300 snap-start"
            >
              {/* Rank Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.5)] group-hover:shadow-[0_0_40px_rgba(251,191,36,0.7)] transition-all duration-300">
                  <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center">
                    <span className="text-transparent bg-gradient-to-br from-yellow-400 to-orange-400 bg-clip-text font-bold text-xl">
                      #{index + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-80"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-white font-bold text-lg leading-tight group-hover:text-yellow-400 transition-colors duration-300">
                    {game.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 mb-3">
                  {/* Rating */}
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-bold text-sm">{game.rating}</span>
                  </div>

                  {/* Reviews Count */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-zinc-600"></div>
                    <span className="text-zinc-400 text-sm">
                      {game.reviews.toLocaleString()} reviews
                    </span>
                  </div>
                </div>

                {/* Category & Release */}
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium">
                    {game.category}
                  </span>
                  <span className="text-zinc-500 text-xs">{game.releaseDate}</span>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}