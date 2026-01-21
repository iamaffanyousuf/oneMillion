import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Mail, Lock, Sparkles } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - just close the modal
    console.log('Auth attempt:', { mode, email, password, username });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md"
            >
              {/* Holographic glow effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 animate-pulse" />
              
              {/* Main container */}
              <div className="relative bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/50 rounded-2xl shadow-2xl overflow-hidden">
                {/* Animated background gradients */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <motion.div
                    animate={{
                      x: [0, 100, 0],
                      y: [0, 50, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"
                  />
                  <motion.div
                    animate={{
                      x: [0, -100, 0],
                      y: [0, -50, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
                  />
                </div>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 text-zinc-400 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Content */}
                <div className="relative p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="inline-block mb-4"
                    >
                      <Sparkles className="w-10 h-10 text-cyan-400" />
                    </motion.div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      {mode === 'login' ? 'Welcome Back' : 'Join oneMillion'}
                    </h2>
                    <p className="text-zinc-400 text-sm">
                      {mode === 'login' 
                        ? 'Enter your credentials to continue' 
                        : 'Create your account to get started'}
                    </p>
                  </div>

                  {/* Tab switcher */}
                  <div className="flex gap-2 mb-6 p-1 bg-zinc-800/50 rounded-xl">
                    <button
                      onClick={() => setMode('login')}
                      className={`flex-1 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                        mode === 'login'
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/20'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Login
                    </button>
                    <button
                      onClick={() => setMode('signup')}
                      className={`flex-1 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                        mode === 'signup'
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/20'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Sign Up
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <AnimatePresence mode="wait">
                      {mode === 'signup' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                            <input
                              type="text"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              placeholder="Username"
                              className="w-full pl-11 pr-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                              required={mode === 'signup'}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full pl-11 pr-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                        required
                      />
                    </div>

                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full pl-11 pr-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                        required
                      />
                    </div>

                    {mode === 'login' && (
                      <div className="text-right">
                        <button
                          type="button"
                          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                        >
                          Forgot password?
                        </button>
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 relative overflow-hidden group"
                    >
                      <span className="relative z-10">
                        {mode === 'login' ? 'Sign In' : 'Create Account'}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </form>

                  {/* Footer */}
                  <div className="mt-6 pt-6 border-t border-zinc-800/50">
                    <p className="text-center text-sm text-zinc-500">
                      {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                      <button
                        onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                        className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
                      >
                        {mode === 'login' ? 'Sign up' : 'Sign in'}
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
