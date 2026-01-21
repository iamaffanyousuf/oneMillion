import { motion } from 'motion/react';
import { Gamepad2, Github, Twitter, Youtube, Mail, Zap } from 'lucide-react';
import { useState } from 'react';
import { LegalModal } from '../modals/legal-modal';

export function Footer() {
  const [legalModalOpen, setLegalModalOpen] = useState<'privacy' | 'terms' | 'about' | null>(null);

  const footerLinks = {
    Product: ['Games', 'Reviews', 'Trailers', 'Releases'],
    Company: ['About', 'Blog'],
    Resources: ['Community', 'Support', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'Licenses']
  };

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Mail, label: 'Email', href: '#' }
  ];

  return (
    <footer className="relative mt-32 border-t border-zinc-800/50 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/5" />

      {/* Glowing top border effect */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <Gamepad2 className="w-6 h-6 text-cyan-400" />
                <motion.div
                  className="absolute inset-0 bg-cyan-400 blur-lg opacity-50"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                oneMillion
              </span>
            </motion.div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Game reviews and insights
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-zinc-400 mb-4 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => {
                  const isLegalLink = category === 'Legal' && (link === 'Privacy' || link === 'Terms');
                  const isAboutLink = category === 'Company' && link === 'About';

                  return (
                    <li key={link}>
                      {isLegalLink ? (
                        <motion.button
                          onClick={() => setLegalModalOpen(link.toLowerCase() as 'privacy' | 'terms')}
                          className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors duration-300 inline-block"
                          whileHover={{ x: 2 }}
                        >
                          {link}
                        </motion.button>
                      ) : isAboutLink ? (
                        <motion.button
                          onClick={() => setLegalModalOpen('about')}
                          className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors duration-300 inline-block"
                          whileHover={{ x: 2 }}
                        >
                          {link}
                        </motion.button>
                      ) : (
                        <motion.a
                          href="#"
                          className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors duration-300 inline-block"
                          whileHover={{ x: 2 }}
                        >
                          {link}
                        </motion.a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider with glow effect */}
        <div className="relative h-px bg-zinc-800/50 mb-8">
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-32 h-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
            animate={{
              x: ['-200%', '200%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-zinc-600">
            <Zap className="w-4 h-4 text-cyan-500" />
            <span>© {new Date().getFullYear()} oneMillion All rights reserved</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="relative group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all duration-300 group-hover:border-cyan-500/50 group-hover:bg-zinc-800">
                    <Icon className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-lg bg-cyan-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </motion.a>
              );
            })}
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-xs text-zinc-600 uppercase tracking-wider">
              All systems operational
            </span>
          </div>
        </div>
      </div>

      {/* Circuit-like corner decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <motion.path
            d="M0,100 L50,100 L50,50 L150,50 L150,150 L100,150 L100,200"
            fill="none"
            stroke="url(#footer-gradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Legal Modal */}
      <LegalModal
        isOpen={legalModalOpen !== null}
        onClose={() => setLegalModalOpen(null)}
        type={legalModalOpen || 'privacy'}
      />
    </footer>
  );
}