import { motion } from 'motion/react';
import { GameCard } from './game-card';
import { FilterBar } from './filter-bar';
import { Gamepad2, Sparkles } from 'lucide-react';

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

interface AllGamesGridProps {
  games: Game[];
  onGameClick: (game: Game) => void;
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function AllGamesGrid({ games, onGameClick, categories, selectedCategory, onSelectCategory }: AllGamesGridProps) {
  // if (games.length === 0) {
  //   return (
  //     <section className="mb-12">
  //       <div className="text-center py-20">
  //         <motion.div
  //           initial={{ opacity: 0, scale: 0.9 }}
  //           animate={{ opacity: 1, scale: 1 }}
  //           className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-4"
  //         >
  //           <Gamepad2 className="w-8 h-8 text-zinc-600" />
  //         </motion.div>
  //         <div className="text-zinc-500 mb-2">No games found</div>
  //         <p className="text-zinc-600 text-sm">Try adjusting your filters or search query</p>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section id='all-games' className="mb-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            All Games
          </h2>
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Sparkles className="w-6 h-6 text-purple-400" />
          </motion.div>
        </div>

        <p className="text-zinc-500 text-sm">
          {games.length > 0 ? `Discover ${games.length} amazing ${games.length === 1 ? 'game' : 'games'}` : 'No games match this category'}
        </p>
      </motion.div>

      {/* Filter Bar */}
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />

      {/* Games Grid - Fixed Height with Vertical Scroll (Hidden Scrollbar) */}
      {games.length === 0 ? (
        <div className="text-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-4"
          >
            <Gamepad2 className="w-8 h-8 text-zinc-600" />
          </motion.div>

          <div className="text-zinc-500 mb-2">No games found</div>
          <p className="text-zinc-600 text-sm">
            Try adjusting your filters or search query
          </p>
        </div>
      ) : (
        <div className="relative max-h-[1000px] overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <GameCard
                  {...game}
                  onClick={() => onGameClick(game)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}