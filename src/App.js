import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              VibrantCharmingPrint
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Premium Digital Wall Art & Printable Designs
            </p>
            <div className="text-lg text-gray-500">
              Website is loading... More components coming soon!
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
