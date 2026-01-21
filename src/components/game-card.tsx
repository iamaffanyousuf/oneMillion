import { Star, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './ImageWithFallback';

interface GameCardProps {
  id: number;
  title: string;
  image: string;
  rating: number;
  category: string;
  trending?: boolean;
  reviews: number;
  onClick: () => void;
}

export function GameCard({ title, image, rating, category, trending, reviews, onClick }: GameCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative group cursor-pointer overflow-hidden rounded-lg bg-gradient-to-br from-zinc-900 to-black border border-zinc-800/50 hover:border-cyan-500/50 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

        {/* Trending Badge */}
        {trending && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1 rounded-md flex items-center gap-1 text-xs backdrop-blur-sm">
            <TrendingUp className="w-3 h-3" />
            Trending
          </div>
        )}

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <div className="text-xs text-cyan-400 mb-1 uppercase tracking-wider">{category}</div>
          <h3 className="text-white mb-2 line-clamp-2">{title}</h3>

          {/* Rating */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-white">{rating.toFixed(1)}</span>
            </div>
            <div className="text-zinc-400 text-xs">{reviews} reviews</div>
          </div>
        </div>
      </div>

      {/* Neon glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl" />
      </div>
    </motion.div>
  );
}
