import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] text-black p-16">
          <div className="max-w-3xl">
            <h3 className="text-lg font-medium mb-4">WHO WE ARE</h3>
            <h2 className="text-6xl font-bold mb-8">ByteWave Technologies</h2>
            <p className="text-gray-600 mb-6">
              What sets ByteWave Technologies apart is not just its technological prowess but its unwavering commitment to ethical AI development.
            </p>
            <p className="text-gray-600 mb-8">
              In an era where the implications of artificial intelligence on privacy, security, and society are under increasing scrutiny, ByteWave Technologies stands as a paragon of responsibility.
            </p>
            <button className="flex items-center gap-2 text-lg font-medium border-b-2 border-black pb-1 hover:gap-4 transition-all">
              About <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}