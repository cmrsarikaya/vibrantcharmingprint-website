import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductsSection />
      <div className="text-center py-16 bg-white">
        <p className="text-gray-600">More sections coming soon...</p>
      </div>
    </div>
  );
}

export default App;
