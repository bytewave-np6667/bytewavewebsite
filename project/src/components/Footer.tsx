import React from 'react';
import { Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0B1E] pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Brain className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold">ByteWave Technologies</span>
            </div>
            <p className="text-gray-400">
              Founded in 2020 by a group of visionary engineers and entrepreneurs, ByteWave Technologies has quickly ascended to the forefront of technological advancement, driven by a mission to harness the power of AI for the betterment of society.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Education management software</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Data scraper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Consultancy management software</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Live Chat</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ's</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">© Copyright 2024 ByteWave Technologies Pvt. Ltd.</div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}