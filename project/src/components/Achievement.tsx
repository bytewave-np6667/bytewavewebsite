import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    number: '50+',
    label: 'Projects'
  },
  {
    number: '200+',
    label: 'Global Users'
  },
  {
    number: '100%',
    label: 'Positive feedback'
  }
];

export default function Achievement() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl font-bold"
          >
            See Our <br />
            Achievement
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.1 + index * 0.1
                  }}
                  className="text-5xl font-bold mb-2"
                >
                  {achievement.number}
                </motion.div>
                <div className="text-gray-400">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}