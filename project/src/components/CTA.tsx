import React from 'react';
import { Phone } from 'lucide-react';

export default function CTA() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready To Start Your Project?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Embark on a transformation journey into the future of innovation as you kickstart your exploration of AI Labs, where limitless possibilities await at every click and command.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-900 transition-colors">
            <Phone className="w-4 h-4" />
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}