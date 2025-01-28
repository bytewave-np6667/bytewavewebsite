import React from 'react';

export default function Corporate() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm text-gray-400 mb-4 block">CORPORATES</span>
            <h2 className="text-4xl font-bold mb-6">
              Corporate Business AI Integration And Personalized Solutions
            </h2>
            <p className="text-gray-400">
              Custom software solutions and designed for corporate business with their unique specification. We have added AI in many of our solution to focus business insights.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80"
              alt="Corporate Solutions"
              className="rounded-2xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}