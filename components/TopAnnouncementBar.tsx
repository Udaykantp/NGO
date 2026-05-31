'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
          className="relative w-full overflow-hidden flex items-center"
          style={{ height: '36px' }}
        >
          {/* African Tribal Geometric Pattern Background */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 0h60v60H0z\' fill=\'%23241601\'/%3E%3Cpath d=\'M30 0l30 30-30 30L0 30z\' fill=\'%238B4513\'/%3E%3Cpath d=\'M15 15l15-15 15 15-15 15z\' fill=\'%234D7A4C\'/%3E%3Cpath d=\'M45 45l15-15 15 15-15 15z\' fill=\'%236F8F63\'/%3E%3Cpath d=\'M15 45l15-15 15 15-15 15z\' fill=\'%234D7A4C\'/%3E%3Cpath d=\'M45 15l15-15 15 15-15 15z\' fill=\'%236F8F63\'/%3E%3C/g%3E%3C/svg%3E")',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center',
            }}
          />

          {/* Dark Overlay */}
          <div 
            className="absolute inset-0 z-10"
            style={{ backgroundColor: 'rgba(36, 22, 1, 0.85)' }}
          />

          {/* Content Container */}
          <div className="relative z-20 w-full max-w-7xl mx-auto px-4 flex flex-row items-center justify-between font-medium text-[12px] md:text-[13px] text-[#FCFCF9]">
            
            {/* Left Side */}
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="hidden sm:inline">Drop us a line</span>
              <span className="sm:hidden">Contact:</span>
              <a 
                href="mailto:support@yourngo.org"
                className="text-[#D9C48A] hover:text-[#8B4513] transition-colors duration-200"
              >
                support@yourngo.org
              </a>
            </div>

            {/* Center */}
            <div className="flex justify-center flex-1 mx-2 sm:mx-4 overflow-hidden">
              <a href="#" className="relative group whitespace-nowrap truncate">
                View More Templates
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#FCFCF9] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* Right Side - Dismiss Button */}
            <div className="flex items-center justify-end flex-shrink-0">
              <button
                onClick={() => setIsVisible(false)}
                className="w-[24px] h-[24px] rounded-full flex items-center justify-center text-[#FCFCF9] hover:bg-[#FCFCF9] hover:text-[#241601] transition-colors duration-200"
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