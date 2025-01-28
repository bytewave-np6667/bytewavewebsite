import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0B1E]/80 backdrop-blur-lg border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold truncate">ByteWave Technologies</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Products</a>
            <a href="#" className="nav-link">Services</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Company</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-colors">
              Contact
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0B1E] border-b border-gray-800/50"
          >
            <div className="px-4 py-4 space-y-4">
              <a href="#" className="block py-2 text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white transition-colors">Products</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white transition-colors">Company</a>
              <button className="w-full px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-colors">
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}