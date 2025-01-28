import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Truck, Hotel, ShoppingBag, Building2, User, Wallet } from 'lucide-react';

const industries = [
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
    category: 'EDUCATION',
    title: 'Schools, Colleges, LMS',
    description: 'Empowering educational institutions with smart management systems and AI-driven learning solutions for enhanced student engagement.'
  },
  {
    icon: <Truck className="w-8 h-8 text-green-500" />,
    category: 'LOGISTICS',
    title: 'Logistics',
    description: 'Optimizing supply chain operations with intelligent tracking, route optimization, and automated inventory management systems.'
  },
  {
    icon: <Hotel className="w-8 h-8 text-yellow-500" />,
    category: 'HOSPITALITY',
    title: 'Hotels and Restaurants',
    description: 'Enhancing guest experiences through smart booking systems, automated service management, and personalized recommendations.'
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-purple-500" />,
    category: 'E-COMMERCE',
    title: 'e-Commerce',
    description: 'Building robust online platforms with AI-powered product recommendations and smart inventory management.'
  },
  {
    icon: <Building2 className="w-8 h-8 text-indigo-500" />,
    category: 'BUSINESS',
    title: 'Businesses',
    description: 'Transforming business operations with custom ERP solutions and AI-driven decision-making tools.'
  },
  {
    icon: <User className="w-8 h-8 text-orange-500" />,
    category: 'PERSONAL BRANDING',
    title: 'Individual Brand Growth',
    description: 'Helping individuals establish and grow their online presence with personalized digital solutions.'
  },
  {
    icon: <Wallet className="w-8 h-8 text-cyan-500" />,
    category: 'FINANCE',
    title: 'Fintech and Banking',
    description: 'Revolutionizing financial services with secure payment systems and automated banking solutions.'
  }
];

export default function Industries() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">Industries We Serve</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            We empower diverse sectors with intelligent solutions that seamlessly integrate into a spectrum of industries, driving innovation across the board.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-r from-[#12132D] to-[#1E1F3D] rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gray-800/50 flex items-center justify-center">
                    {industry.icon}
                  </div>
                </div>
                <div>
                  <span className="text-sm text-gray-400 mb-2 block">{industry.category}</span>
                  <h3 className="text-2xl font-bold mb-3">{industry.title}</h3>
                  <p className="text-gray-400">{industry.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}