import React, { useState } from 'react';

const SizeGuideSection = () => {
  const [activeTab, setActiveTab] = useState('sizes');

  const printSizes = [
    { size: '5x7"', description: 'Perfect for desks and small spaces', dpi: '300 DPI', paper: 'Photo Paper' },
    { size: '8x10"', description: 'Great for shelves and gallery walls', dpi: '300 DPI', paper: 'Matte or Glossy' },
    { size: '11x14"', description: 'Statement pieces for living rooms', dpi: '300 DPI', paper: 'Premium Paper' },
    { size: '16x20"', description: 'Large wall art for impact', dpi: '300 DPI', paper: 'Canvas or Premium' },
    { size: '18x24"', description: 'Bold statement pieces', dpi: '300 DPI', paper: 'Canvas Recommended' },
    { size: '24x36"', description: 'Maximum impact wall art', dpi: '300 DPI', paper: 'Canvas or Metal' }
  ];

  const printingTips = [
    {
      title: "Choose the Right Paper",
      content: "Matte paper reduces glare, glossy enhances colors, and canvas adds texture and durability."
    },
    {
      title: "Frame Selection",
      content: "Match frame style to your decor. Modern spaces work well with sleek frames, traditional with ornate ones."
    },
    {
      title: "Placement Tips",
      content: "Hang artwork at eye level (57-60 inches from floor). Group smaller pieces for gallery wall effect."
    },
    {
      title: "Lighting Matters",
      content: "Avoid direct sunlight to prevent fading. Use LED lights for even illumination without heat damage."
    }
  ];

  return (
    <section id="guide" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            Size & Print Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about printing and displaying your digital art
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('sizes')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'sizes'
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-amber-600'
              }`}
            >
              Print Sizes
            </button>
            <button
              onClick={() => setActiveTab('tips')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'tips'
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-amber-600'
              }`}
            >
              Printing Tips
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'sizes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {printSizes.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-20 bg-gradient-to-b from-amber-100 to-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-amber-600 font-bold text-lg">{item.size}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.size}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Resolution:</span>
                      <span className="font-medium">{item.dpi}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Best Paper:</span>
                      <span className="font-medium">{item.paper}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'tips' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {printingTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{tip.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="mb-6 text-amber-100">
            We're here to help! Contact us for personalized printing advice and recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Browse Collection
            </a>
            <a
              href="https://www.etsy.com/shop/VibrantCharmingPrint"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-200"
            >
              Contact Us on Etsy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeGuideSection;
