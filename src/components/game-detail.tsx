import { X, Star, Calendar, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './ImageWithFallback';
import { useState } from 'react';

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

interface GameDetailProps {
  game: {
    id: number;
    title: string;
    image: string;
    rating: number;
    category: string;
    description: string;
    releaseDate: string;
    reviews: number;
    screenshots: string[];
    userReviews: Review[];
  } | null;
  onClose: () => void;
}

export function GameDetail({ game, onClose }: GameDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!game) return null;

  const handlePrevious = () => {
    setDirection(-1);
    setSelectedImage((prev) => (prev === 0 ? game.screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setSelectedImage((prev) => (prev === game.screenshots.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '50%' : '-50%',
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      scale: 0.85,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '50%' : '-50%',
      opacity: 0,
      rotateY: direction < 0 ? -45 : 45,
      scale: 0.85,
    }),
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="min-h-screen p-4 flex items-start justify-center pt-16 pb-16"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full max-w-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800/50 rounded-lg overflow-hidden">
            {/* Header Image */}
            <div className="relative aspect-video overflow-hidden group" style={{ perspective: '1200px' }}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={selectedImage}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "tween", ease: [0.87, 0, 0.13, 1], duration: 0.6 },
                    opacity: { duration: 0.4, ease: "easeInOut" },
                    scale: { type: "tween", ease: [0.87, 0, 0.13, 1], duration: 0.6 },
                    rotateY: { type: "tween", ease: [0.87, 0, 0.13, 1], duration: 0.6 }
                  }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback
                    src={game.screenshots[selectedImage]}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

              {/* Navigation Arrows */}
              {game.screenshots.length > 1 && (
                <>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevious();
                    }}
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-black/20 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] flex items-center justify-center"
                  >
                    <ChevronLeft className="w-4 h-4 text-cyan-400" strokeWidth={2.5} />
                  </motion.button>

                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-black/20 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] flex items-center justify-center"
                  >
                    <ChevronRight className="w-4 h-4 text-purple-400" strokeWidth={2.5} />
                  </motion.button>
                </>
              )}

              {/* Screenshot Counter */}
              {game.screenshots.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-zinc-700/50 text-xs text-zinc-300 shadow-lg">
                  {selectedImage + 1} / {game.screenshots.length}
                </div>
              )}

              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Screenshot Gallery */}
            {game.screenshots.length > 0 && (
              <div className="px-6 pt-4 pb-2">
                <div className="flex gap-2 overflow-x-auto pb-2 pt-2 justify-center [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
                  {game.screenshots.map((screenshot, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        relative shrink-0 w-12 h-8 sm:w-16 sm:h-10 rounded-md overflow-hidden
                        transition-all duration-300
                        ${selectedImage === index
                          ? 'ring-2 ring-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)] scale-105'
                          : 'ring-1 ring-zinc-700/50 hover:ring-purple-500/50 hover:shadow-[0_0_10px_rgba(168,85,247,0.4)]'
                        }
                      `}
                    >
                      <ImageWithFallback
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className={`
                        absolute inset-0 transition-opacity duration-300
                        ${selectedImage === index
                          ? 'bg-gradient-to-t from-cyan-500/20 to-transparent'
                          : 'bg-black/30 hover:bg-black/10'
                        }
                      `} />
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              <div className="text-sm text-cyan-400 mb-2 uppercase tracking-wider">{game.category}</div>
              <h2 className="text-white mb-4">{game.title}</h2>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-white">{game.rating.toFixed(1)}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Users className="w-4 h-4" />
                  <span>{game.reviews} reviews</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Calendar className="w-4 h-4" />
                  <span>{game.releaseDate}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-white mb-3">About</h3>
                <p className="text-zinc-400 leading-relaxed">{game.description}</p>
              </div>

              {/* Reviews Container */}
              <div className="relative mt-6 max-h-[320px] bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-md border border-cyan-500/30 shadow-lg shadow-cyan-500/10 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300">
                <div className="h-full max-h-[320px] overflow-y-auto overflow-x-hidden scroll-smooth px-3 sm:px-6 pb-5 pt-20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between bg-gradient-to-br from-zinc-900/98 to-black/98 backdrop-blur-md py-4 sm:py-5 px-3 sm:px-6 z-10 border-b border-zinc-800/70">
                    <h3 className="text-white text-base sm:text-lg">User Reviews</h3>
                    <div className="text-cyan-400/80 text-xs sm:text-sm whitespace-nowrap">{game.userReviews.length} {game.userReviews.length === 1 ? 'review' : 'reviews'}</div>
                  </div>
                  <div className="space-y-3 sm:space-y-4 pb-2">
                    {game.userReviews.map((review) => (
                      <div
                        key={review.id}
                        className="bg-black/40 border border-zinc-800/60 rounded-xl p-3 sm:p-5 hover:border-cyan-500/40 hover:bg-black/60 transition-all duration-200"
                      >
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-xs sm:text-sm shrink-0 shadow-lg shadow-cyan-500/20">
                              {review.author.charAt(0).toUpperCase()}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-white text-sm sm:text-base mb-0.5 truncate">{review.author}</div>
                              <div className="text-zinc-500 text-xs">{review.date}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-1.5 bg-zinc-900/50 px-2 sm:px-2.5 py-1 rounded-md border border-zinc-800/50 shrink-0">
                            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-yellow-400 text-yellow-400" />
                            <span className="text-white text-xs sm:text-sm">{review.rating.toFixed(1)}</span>
                          </div>
                        </div>
                        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed break-words">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}