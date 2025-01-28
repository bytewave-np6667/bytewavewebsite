import React, { useEffect, useState } from 'react';
import { Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingProps {
  onComplete: () => void;
}

export default function Loading({ onComplete }: LoadingProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 1, 100));
      } else {
        setTimeout(onComplete, 500);
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0B1E]"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              transition: { 
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            <Brain className="w-24 h-24 text-blue-500" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-3xl font-bold text-white"
          >
            Entering the A.I. World
          </motion.h1>

          <div className="mt-8 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
              className="h-full bg-blue-500"
            />
          </div>
          
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-gray-400"
          >
            {progress}%
          </motion.span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}