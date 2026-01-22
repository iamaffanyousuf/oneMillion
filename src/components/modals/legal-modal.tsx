import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, FileText, Info } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'about';
}

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const content = {
    privacy: {
      title: 'Privacy Policy',
      icon: Shield,
      sections: [
        {
          title: 'Information We Collect',
          content: 'We collect information that you provide directly to us, including when you create an account, browse games, write reviews, or contact our support team. This may include your name, email address, username, and gaming preferences.'
        },
        {
          title: 'How We Use Your Information',
          content: 'We use the information we collect to provide, maintain, and improve our services, to personalize your experience, to communicate with you about games and updates, and to protect against fraud and abuse.'
        },
        {
          title: 'Information Sharing',
          content: 'We do not sell your personal information. We may share your information with service providers who assist us in operating our platform, and when required by law or to protect our rights.'
        },
        {
          title: 'Data Security',
          content: 'We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.'
        },
        {
          title: 'Your Rights',
          content: 'You have the right to access, update, or delete your personal information. You can manage your account settings at any time or contact us for assistance with data requests.'
        },
        {
          title: 'Cookies',
          content: 'We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.'
        }
      ]
    },
    terms: {
      title: 'Terms of Service',
      icon: FileText,
      sections: [
        {
          title: 'Acceptance of Terms',
          content: 'By accessing and using oneMillion, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these terms, please do not use our service.'
        },
        {
          title: 'User Accounts',
          content: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use.'
        },
        {
          title: 'User Content',
          content: 'You retain ownership of content you submit, including reviews and comments. By posting content, you grant us a non-exclusive license to use, display, and distribute your content on our platform.'
        },
        {
          title: 'Prohibited Conduct',
          content: 'You agree not to use our service for any unlawful purpose, to harass or abuse other users, to post spam or malicious content, or to attempt to gain unauthorized access to our systems.'
        },
        {
          title: 'Intellectual Property',
          content: 'All content on oneMillion, including text, graphics, logos, and software, is the property of oneMillion or its content suppliers and is protected by intellectual property laws.'
        },
        {
          title: 'Limitation of Liability',
          content: 'oneMillion is provided "as is" without warranties of any kind. We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.'
        },
        {
          title: 'Modifications',
          content: 'We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the modified terms.'
        }
      ]
    },
    about: {
      title: 'About Us',
      icon: Info,
      sections: [
        {
          title: 'Our Mission',
          content: 'At oneMillion, our mission is to create the ultimate gaming community where players can discover, share, and celebrate incredible gaming experiences. We believe in connecting gamers worldwide through authentic reviews, engaging content, and a passion for interactive entertainment.'
        },
        {
          title: 'Who We Are',
          content: 'We are a team of passionate gamers, developers, designers, and content creators united by our love for gaming. From indie gems to AAA blockbusters, we curate and review games across all platforms to help you find your next favorite title.'
        },
        {
          title: 'Our Vision',
          content: 'We envision a world where every gamer has access to honest, comprehensive game reviews and a supportive community. Our platform combines cutting-edge technology with human insight to deliver the most accurate and helpful gaming recommendations.'
        },
        {
          title: 'What We Offer',
          content: 'Expert game reviews, user ratings and feedback, latest gaming news and trailers, community-driven discussions, personalized game recommendations, and a platform built by gamers, for gamers.'
        },
        {
          title: 'Our Values',
          content: 'Integrity in reviews, community first approach, innovation in gaming coverage, inclusivity and diversity, transparency in our processes, and dedication to enhancing your gaming journey.'
        },
        {
          title: 'Get In Touch',
          content: 'We love hearing from our community! Whether you have suggestions, feedback, or just want to chat about games, reach us at info@onemillion.com. Follow us on social media for daily gaming updates and join the conversation.'
        }
      ]
    }
  };

  const { title, icon: Icon, sections } = content[type];

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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl my-8"
            >
              {/* Holographic glow effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 animate-pulse" />

              {/* Main container */}
              <div className="relative bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/50 rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
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

                {/* Header */}
                <div className="relative border-b border-zinc-800/50 p-6">
                  <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 text-zinc-400 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-lg" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {title}
                      </h2>
                      <p className="text-zinc-500 text-sm mt-0.5">
                        Last updated: January 18, 2026
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content - Scrollable */}
                <div className="relative overflow-y-auto flex-1 p-6 space-y-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-zinc-900/50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-zinc-600">
                  {sections.map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-xs text-cyan-400">
                          {index + 1}
                        </span>
                        {section.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed pl-8">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}

                  {/* Contact Section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/30"
                  >
                    <p className="text-sm text-zinc-400">
                      <strong className="text-cyan-400">Questions?</strong> If you have any questions about our {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}, please contact us at{' '}
                      <a href="mailto:iamaffanyousuf01@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        iamaffanyousuf01@gmail.com
                      </a>
                    </p>
                  </motion.div>
                </div>

                {/* Footer */}
                <div className="relative border-t border-zinc-800/50 p-4 bg-zinc-900/50">
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Got it, thanks!</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
