'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function TopAnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-full overflow-hidden flex items-center bg-[#693754] border-t border-[rgba(252,252,249,0.1)]"
          style={{ height: '48px' }}
        >
          {/* Subtle Professional Background Pattern */}
          <div 
            className="absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23FCFCF9\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
              backgroundRepeat: 'repeat',
            }}
          />

          {/* Content Container */}
          <div className="relative z-20 w-full max-w-7xl mx-auto px-4 flex flex-row items-center justify-end font-medium text-[12px] md:text-[13px] text-[#FCFCF9]">

            {/* Spacer to balance the right side */}
            <div className="w-[24px]"></div>

            {/* Center - Social Icons (Images) */}
            <div className="flex items-center justify-center gap-6 flex-1 text-[#FCFCF9]/60">
              <a href="#" className="hover:text-[#E5008D] hover:scale-110 transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" />
              </a>
              <a href="#" className="hover:text-[#E5008D] hover:scale-110 transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" />
              </a>
              <a href="#" className="hover:text-[#E5008D] hover:scale-110 transition-all duration-300" aria-label="Twitter">
                <Twitter className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" />
              </a>
              <a href="#" className="hover:text-[#E5008D] hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" />
              </a>
              <a href="#" className="hover:text-[#E5008D] hover:scale-110 transition-all duration-300" aria-label="YouTube">
                <Youtube className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" />
              </a>
            </div>

            {/* Right Side - Dismiss Button */}
            <div className="flex items-center justify-end flex-shrink-0">
              <button
                onClick={() => setIsVisible(false)}
                className="w-[24px] h-[24px] rounded-full flex items-center justify-center text-[#FCFCF9]/50 hover:bg-[#FCFCF9]/10 hover:text-[#FCFCF9] transition-colors duration-200"
                aria-label="Close announcement"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}