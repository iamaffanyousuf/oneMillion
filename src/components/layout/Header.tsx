import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onLoginClick: () => void;
}

export function Header({
  searchQuery,
  onSearchQueryChange,
  onLoginClick,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  // Scroll detection
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchExpanded(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);


  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-xl bg-black/95 border-b border-zinc-800/50 transition-all`}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4"
        animate={{
          paddingTop:
            isScrolled && !isSearchExpanded
              ? "0.5rem"
              : isScrolled
                ? "0.5rem"
                : "1rem",
          paddingBottom:
            isScrolled && !isSearchExpanded
              ? "0.5rem"
              : isScrolled
                ? "0.5rem"
                : "1rem",
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <AnimatePresence mode="wait">
          {/* Collapsed Circle State - Only when scrolled and not expanded */}
          {isScrolled && !isSearchExpanded ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="flex items-center justify-between"
            >
              {/* Logo on Left */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 ease-out">
                    <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center transition-all duration-300 ease-out">
                      <span className="text-transparent bg-gradient-to-br from-cyan-400 to-purple-400 bg-clip-text font-bold text-base transition-all duration-300 ease-out">
                        1M
                      </span>
                    </div>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-md opacity-20 animate-pulse"></div>
                </div>
                <h1 className="font-brandtext-white font-bold tracking-tighter text-xl transition-all duration-300 ease-out">
                  <span className="font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    oneMillion
                  </span>
                </h1>
              </div>

              {/* Right side buttons */}
              <div className="flex items-center gap-2">
                {/* Search Button */}
                <button
                  onClick={() => setIsSearchExpanded(true)}
                  className="relative group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 ease-out hover:scale-105 active:scale-95">
                    <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center transition-all duration-300 ease-out">
                      <Search className="w-4 h-4 text-cyan-400 transition-all duration-300 ease-out" />
                    </div>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </button>

                {/* Login Button */}
                <motion.button
                  onClick={onLoginClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200"
                >
                  Login
                </motion.button>
              </div>
            </motion.div>
          ) : (
            /* Normal/Expanded State */
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <div
                className={`flex items-center justify-between transition-all duration-300 ease-out ${isScrolled ? "mb-2" : "mb-4"}`}
              >
                <div
                  className={`flex items-center transition-all duration-300 ease-out ${isScrolled ? "gap-2" : "gap-3"}`}
                >
                  <div className="relative">
                    <div
                      className={`rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 ease-out ${isScrolled ? "w-8 h-8" : "w-10 h-10"}`}
                    >
                      <div
                        className={`rounded-full bg-black flex items-center justify-center transition-all duration-300 ease-out ${isScrolled ? "w-7 h-7" : "w-9 h-9"}`}
                      >
                        <span
                          className={`text-transparent bg-gradient-to-br from-cyan-400 to-purple-400 bg-clip-text font-bold transition-all duration-300 ease-out ${isScrolled ? "text-base" : "text-lg"}`}
                        >
                          1M
                        </span>
                      </div>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-md opacity-20 animate-pulse"></div>
                  </div>
                  <div>
                    <h1
                      className={`text-white font-bold tracking-tighter flex items-baseline gap-1.5 transition-all duration-300 ease-out ${isScrolled ? "text-xl" : "text-2xl"}`}
                      style={{
                        fontFamily:
                          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        letterSpacing: "-0.05em",
                      }}
                    >
                      <span className="font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        oneMillion
                      </span>
                    </h1>
                    <div
                      className={`text-zinc-500 tracking-[0.05em] uppercase font-medium max-w-[120px] overflow-hidden transition-all duration-300 ease-out ${isScrolled ? "text-[7px] mt-0 opacity-0 h-0" : "text-[8px] mt-0.5 opacity-100 h-auto"}`}
                      style={{
                        fontFamily:
                          'ui-monospace, "SF Mono", Monaco, "Cascadia Code", monospace',
                      }}
                    >
                      Gaming Intelligence
                    </div>
                  </div>
                </div>

                {/* Close button when expanded in scrolled state */}
                {isScrolled && isSearchExpanded && (
                  <motion.button
                    initial={{
                      scale: 0,
                      opacity: 0,
                      rotate: -90,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                      rotate: 90,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    onClick={() => setIsSearchExpanded(false)}
                    className="text-zinc-500 hover:text-cyan-400 transition-colors duration-200 hover:scale-110 active:scale-90"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                )}

                {/* Login Button - Only when not search expanded */}
                {!isSearchExpanded && (
                  <motion.button
                    onClick={onLoginClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 ${isScrolled ? "text-xs" : "text-sm"}`}
                  >
                    Login
                  </motion.button>
                )}
              </div>

              {/* Search */}
              <div className="relative">
                <div
                  className={`absolute top-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${isScrolled ? "left-2.5" : "left-3"}`}
                >
                  <Search
                    className={`text-zinc-500 transition-all duration-300 ease-out ${isScrolled ? "w-3 h-3" : "w-4 h-4"}`}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => onSearchQueryChange(e.target.value)}
                  onBlur={() => {
                    // Collapse after a short delay if scrolled and no search text
                    if (isScrolled && !searchQuery) {
                      setTimeout(
                        () => setIsSearchExpanded(false),
                        200,
                      );
                    }
                  }}
                  autoFocus={isSearchExpanded}
                  className={`w-full bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-all duration-300 ease-out ${isScrolled ? "rounded-md pl-8 pr-3 py-1.5 text-xs" : "rounded-lg pl-10 pr-4 py-2.5 text-sm"}`}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}