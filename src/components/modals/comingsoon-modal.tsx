import { motion, AnimatePresence } from "motion/react";
import { X, Rocket, Loader } from "lucide-react";

interface ComingSoonModalProps {
  isOpen: boolean;
  featureName?: string;
  onClose: () => void;
}

export function ComingSoonModal({
  isOpen,
  featureName = "This feature",
  onClose,
}: ComingSoonModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className="relative w-full max-w-md rounded-2xl
              border border-zinc-800 bg-zinc-950
              shadow-[0_0_60px_rgba(6,182,212,0.15)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-xl opacity-50 -z-10" />

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-zinc-500 hover:text-cyan-400 transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <Rocket className="w-10 h-10 text-cyan-400" />
                    <motion.div
                      className="absolute inset-0 bg-cyan-400 blur-lg opacity-40"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-2">
                  Coming Soon <span><Loader className="w-5 h-5 inline-block ml-1" /></span>
                </h2>

                <p className="text-sm text-zinc-400 mb-6">
                  <span className="text-cyan-400 font-medium">
                    {featureName}
                  </span>{" "}
                  is currently under development and will be available soon.
                </p>

                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center
                  rounded-full px-6 py-2.5
                  bg-gradient-to-r from-cyan-500 to-purple-500
                  text-white font-semibold
                  shadow-lg shadow-cyan-500/25
                  hover:shadow-cyan-500/40
                  transition-all duration-200
                  hover:scale-105 active:scale-95"
                >
                  Got it
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
