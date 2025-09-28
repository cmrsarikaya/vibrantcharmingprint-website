import React, { Suspense, lazy } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load components
const ProductsSection = lazy(() => import('./components/ProductsSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const SizeGuideSection = lazy(() => import('./components/SizeGuideSection'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-16">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <ProductsSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <SizeGuideSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
