import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import SizeGuideSection from './components/SizeGuideSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductsSection />
      <AboutSection />
      <TestimonialsSection />
      <SizeGuideSection />
      <Footer />
    </div>
  );
}

export default App;
