import React, { useState } from 'react';
import { Bot, X, Send, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  'ERP Software',
  'Education Software',
  'Custom Software Development',
  'Mobile App Development',
  'AI Integration',
  'AI Consulting'
];

const initialMessage = {
  type: 'bot',
  content: "Hello! I'm your AI assistant. How can I help you today?",
  options: ['Learn about services', 'Talk to human', 'Get pricing']
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([initialMessage]);
  const [inputValue, setInputValue] = useState('');

  const handleServiceSelect = () => {
    setMessages(prev => [...prev, 
      { type: 'bot', content: 'Here are our services:', options: services },
      { type: 'bot', content: 'Which service would you like to know more about?' }
    ]);
  };

  const handleServiceInfo = (service: string) => {
    const serviceInfo = {
      'ERP Software': 'Our ERP software streamlines business operations with AI-powered insights and automation.',
      'Education Software': 'Smart education management system with AI-driven personalized learning paths.',
      'Custom Software Development': 'Tailored software solutions built with cutting-edge technology for your specific needs.',
      'Mobile App Development': 'Cross-platform mobile applications with seamless user experience and robust functionality.',
      'AI Integration': 'Seamless integration of AI capabilities into your existing systems and workflows.',
      'AI Consulting': 'Expert guidance on implementing AI solutions to transform your business.'
    }[service];

    setMessages(prev => [...prev,
      { type: 'user', content: service },
      { type: 'bot', content: serviceInfo, options: ['Learn about another service', 'Talk to human', 'Get pricing'] }
    ]);
  };

  const handleTalkToHuman = () => {
    window.open('https://wa.me/9779705006667', '_blank');
    setMessages(prev => [...prev,
      { type: 'bot', content: "I've opened a chat with our human support team in a new tab. Is there anything else I can help you with?", options: ['Learn about services', 'Get pricing'] }
    ]);
  };

  const handlePricing = () => {
    setMessages(prev => [...prev,
      { type: 'bot', content: 'Our pricing varies based on project requirements. Would you like to discuss your specific needs with our team?', options: ['Talk to human', 'Learn about services'] }
    ]);
  };

  const handleOptionClick = (option: string) => {
    switch(option) {
      case 'Learn about services':
      case 'Learn about another service':
        handleServiceSelect();
        break;
      case 'Talk to human':
        handleTalkToHuman();
        break;
      case 'Get pricing':
        handlePricing();
        break;
      default:
        if (services.includes(option)) {
          handleServiceInfo(option);
        }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setMessages(prev => [...prev, 
      { type: 'user', content: inputValue },
      { type: 'bot', content: "I understand you have a question. Let me help you with that.", options: ['Learn about services', 'Talk to human', 'Get pricing'] }
    ]);
    setInputValue('');
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors z-50"
      >
        <Bot className="w-6 h-6 text-white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 w-[calc(100%-3rem)] sm:w-96 h-[32rem] bg-white rounded-2xl shadow-xl overflow-hidden z-50"
          >
            <div className="bg-blue-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6 text-white" />
                <span className="text-white font-medium">AI Support</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-600 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] ${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'} rounded-2xl px-4 py-2`}>
                    <p>{message.content}</p>
                    {message.options && (
                      <div className="mt-2 space-y-2">
                        {message.options.map((option, optionIndex) => (
                          <button
                            key={optionIndex}
                            onClick={() => handleOptionClick(option)}
                            className="block w-full text-left px-3 py-2.5 rounded-lg text-sm hover:bg-black/10 active:bg-black/20 transition-colors"
                          >
                            {option === 'Talk to human' ? (
                              <div className="flex items-center gap-2">
                                <span>{option}</span>
                                <ExternalLink className="w-3 h-3" />
                              </div>
                            ) : option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="p-2.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 active:bg-blue-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}