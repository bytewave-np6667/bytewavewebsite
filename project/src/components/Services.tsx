import React from 'react';
import { Database, Smartphone, Code, Brain, Bot, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Database className="w-8 h-8 text-orange-500" />,
    title: 'ERP Softwares',
    description: 'Unlocking insights and patterns from vast datasets, data analytics empowers informed decision-making and drives innovation.'
  },
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    title: 'Education Software',
    description: 'We specialize in custom AI development to precisely meet and exceed the unique needs of your organization, ushering in a future.'
  },
  {
    icon: <Brain className="w-8 h-8 text-purple-500" />,
    title: 'Custom Software Development',
    description: 'Tailoring artificial intelligence to specific needs, custom AI design merges creativity with cutting-edge technology to address unique challenges.'
  },
  {
    icon: <Smartphone className="w-8 h-8 text-indigo-500" />,
    title: 'Mobile App Development',
    description: 'We specialize in custom mobile app development to precisely meet and exceed the unique needs of you or your organization.'
  },
  {
    icon: <Bot className="w-8 h-8 text-cyan-500" />,
    title: 'AI Integration',
    description: 'Seamlessly blending artificial intelligence into existing systems, AI integration optimizes, and opens new frontiers for advanced solving.'
  },
  {
    icon: <LineChart className="w-8 h-8 text-green-500" />,
    title: 'AI Consulting',
    description: 'We specialize in custom AI development to precisely meet and exceed the unique needs of your organization, ushering in a future.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5
    }
  }
};

export default function Services() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Embark on a personalized journey of innovation with our transformation AI solutions, tailored to meet your unique needs and drive unparalleled success.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="card group"
            >
              <div className="mb-6 transform transition-transform group-hover:scale-105 duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}