import React from 'react';
import { storeInfo } from '../data/mock';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-amber-400 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-orange-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-yellow-400 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 font-display">
            Transform Your Space with
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block mt-2">
              Premium Digital Art
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {storeInfo.description}
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {storeInfo.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm"
              >
                ✨ {feature}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#products"
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Browse Collection
              <span className="ml-2">→</span>
            </a>
            
            <a
              href="#guide"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-amber-400 hover:text-amber-600 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              Size & Print Guide
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Trusted by 1000+ happy customers</p>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm font-medium text-gray-600">4.9/5 Rating</span>
              </div>
              <div className="text-sm font-medium">
                🎨 Instant Download
              </div>
              <div className="text-sm font-medium">
                📧 24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-xl">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Limited Time</p>
              <p className="text-xs text-amber-600 font-bold">30% OFF All Prints</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
