import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="min-h-[90vh] pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block px-4 py-2 rounded-full bg-gray-800/50 text-sm mb-8"
        >
          STREAMLINE TO TRANSCEND!
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Software & <br className="hidden sm:block" />
              Mobile <br className="hidden sm:block" />
              Development
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400 text-lg sm:text-xl max-w-2xl mb-8"
            >
              Software powered by AI to streamline your business needs. Leverage the power of AI in your business and grow exponentially.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-colors"
            >
              Contact us <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden sm:block"
          >
            <svg className="w-full h-auto" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="200" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" />
              <circle cx="250" cy="250" r="150" fill="#1E40AF" fillOpacity="0.05" />
              <path d="M250 100 L250 400" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M100 250 L400 250" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="250" cy="250" r="50" fill="#3B82F6" fillOpacity="0.2" className="animate-pulse-slow" />
              <g className="animate-float">
                <circle cx="250" cy="150" r="6" fill="#60A5FA" />
                <circle cx="350" cy="250" r="6" fill="#60A5FA" />
                <circle cx="250" cy="350" r="6" fill="#60A5FA" />
                <circle cx="150" cy="250" r="6" fill="#60A5FA" />
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}