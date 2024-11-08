// src/App.tsx
import React, { useEffect } from 'react';
import AppRouter from './router';

const App: React.FC = () => {
  useEffect(() => {
    // Set viewport height for dynamic resizing on mobile devices
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);

    return () => window.removeEventListener('resize', setViewportHeight);
  }, []);

  return (
    <div
      className="App"
      style={{
        height: 'calc(var(--vh, 1vh) * 100)',
        overflow: 'hidden', // Ensures no overflow content
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '60px', // Adjust for bottom navigation or other fixed elements
      }}
    >
      <AppRouter />
    </div>
  );
};

export default App;
