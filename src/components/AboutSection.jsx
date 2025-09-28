import React from 'react';
import { storeInfo } from '../data/mock';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              About {storeInfo.name}
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Welcome to {storeInfo.name}, where art meets accessibility. We specialize in creating 
                premium digital wall art that transforms any space into a personal gallery.
              </p>
              
              <p>
                Our carefully curated collection features everything from modern abstracts to timeless 
                botanicals, each designed with attention to detail and artistic excellence. Every piece 
                is available as an instant digital download, giving you the freedom to print and display 
                your art exactly when and how you want.
              </p>
              
              <p>
                We believe that beautiful art shouldn't be a luxury reserved for the few. That's why 
                we've made high-quality, professionally designed artwork accessible to everyone through 
                our digital platform.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {storeInfo.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600"
                alt="Art studio workspace"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-200 rounded-full opacity-70 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-200 rounded-full opacity-60 blur-2xl"></div>

            {/* Stats Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">★ 4.9</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-amber-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Art Journey?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Browse our collection and discover the perfect pieces to transform your space today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
              >
                Browse Collection
              </a>
              <a
                href={storeInfo.socialLinks.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-amber-400 hover:text-amber-600 transition-all duration-200 bg-white"
              >
                Visit Etsy Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
