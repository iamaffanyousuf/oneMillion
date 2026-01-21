import { motion } from 'motion/react';

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function FilterBar({ categories, selectedCategory, onSelectCategory }: FilterBarProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 mb-6 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelectCategory(category)}
          className={`
            px-4 py-2 rounded-full whitespace-nowrap text-sm transition-all duration-300
            ${selectedCategory === category
              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
              : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
            }
          `}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}