import React, { useEffect } from 'react';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000); // Show splash screen for 3 seconds
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={{
      backgroundColor: '#000',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999,
      flexDirection: 'column'
    }}>
      <img 
        src="/public/spacedogsbackground1.png" 
        alt="Space Dog Logo" 
        style={{ width: '300px', height: '300px', position: 'absolute', top: '30%' }} // Increased size
      />
      <h1 style={{ position: 'absolute', top: '50%' }}></h1>
    </div>
  );
};

export default SplashScreen;
