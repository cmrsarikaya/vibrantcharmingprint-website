import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '20px'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '2rem'
        }}>
          VibrantCharmingPrint
        </h1>
        <p style={{
          fontSize: '1.5rem',
          color: '#374151',
          marginBottom: '2rem'
        }}>
          Premium Digital Wall Art & Printable Designs
        </p>
        <div style={{
          fontSize: '1.2rem',
          color: '#6b7280'
        }}>
          Website is working! Ready for components.
        </div>
      </div>
    </div>
  );
}

export default App;
