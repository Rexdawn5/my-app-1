import React, { useEffect, useState } from 'react';
import AppRouter from './router';

const App: React.FC = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Adjust the viewport height for mobile devices
    const adjustViewportHeight = () => {
      // Manually adjust for mobile browsers' dynamic viewport height issues
      setViewportHeight(window.innerHeight);
    };

    adjustViewportHeight(); // Set initial height

    window.addEventListener('resize', adjustViewportHeight);

    return () => {
      window.removeEventListener('resize', adjustViewportHeight);
    };
  }, []);

  return (
    <div
      className="App"
      style={{
        height: `${viewportHeight}px`, // Set height dynamically based on the window size
        overflow: 'hidden', // Ensure no scrolling
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '60px', // Adjust for bottom elements like fixed navigation
      }}
    >
      <AppRouter />
    </div>
  );
};

export default App;
