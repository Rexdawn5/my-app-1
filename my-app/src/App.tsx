import React, { useEffect, useState } from 'react';
import AppRouter from './router';

const App: React.FC = () => {
  const [viewportHeight, setViewportHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    // This function adjusts the viewport height dynamically
    const adjustViewportHeight = () => {
      const newHeight = window.innerHeight; // Get the height of the visible window
      setViewportHeight(newHeight); // Set the state with the new height
    };

    adjustViewportHeight(); // Initial adjustment

    window.addEventListener('resize', adjustViewportHeight); // Adjust on window resize
    return () => {
      window.removeEventListener('resize', adjustViewportHeight); // Clean up the event listener
    };
  }, []);

  return (
    <div
      className="App"
      style={{
        height: `${viewportHeight}px`, // Set height dynamically to viewport height
        overflow: 'hidden', // Hide any overflow content
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '60px', // Adjust padding for fixed bottom elements (like Telegram's toolbar)
        margin: 0, // Prevent default margin issues
      }}
    >
      <AppRouter />
    </div>
  );
};

export default App;
