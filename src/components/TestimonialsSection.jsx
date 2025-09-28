import React from 'react';
import { testimonials } from '../data/mock';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
        "{testimonial.text}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          {testimonial.verified && (
            <div className="flex items-center text-sm text-green-600">
              <span className="mr-1">✓</span>
              Verified Customer
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their spaces with our digital art
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">4.9★</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Art Designs</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Customer Support</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Happy Customers?
          </h3>
          <a
            href="#products"
            className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Shopping Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
