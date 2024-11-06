import React, { useState } from 'react';
import { FaRocket, FaCoins, FaBolt } from 'react-icons/fa';

const BoostPoints: React.FC = () => {
  const [totalPoints, setTotalPoints] = useState(0);

  const pointOptions = [
    { points: 2000, cost: 0.2, icon: <FaBolt size={24} style={{ color: '#FF4500' }} />, link: 'https://t.me/send?start=IVPqJbt43iaV' },
    { points: 5000, cost: 2, icon: <FaBolt size={24} style={{ color: '#FFD700' }} />, link: 'https://t.me/send?start=IVV6Y78fTWq3' },
    { points: 10000, cost: 2, icon: <FaRocket size={24} style={{ color: '#00BFFF' }} />, link: 'https://t.me/send?start=IV6B17EeVdK7' },
    { points: 20000, cost: 5, icon: <FaCoins size={24} style={{ color: '#FF6347' }} />, link: 'https://t.me/send?start=IV9jdjl7BVe7' }
  ];

  const handlePurchase = (points: number, link: string) => {
    // Simulate points purchase by updating state
    setTotalPoints(prevPoints => prevPoints + points);
    window.open(link, '_blank');
  };

  return (
    <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
      <h1>Boost Points</h1>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', marginTop: '20px' }}>
        {/* Buy Points Section */}
        {pointOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handlePurchase(option.points, option.link)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 25px',
              backgroundColor: '#4a4a6a',
              color: 'white',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
              transition: 'transform 0.2s ease',
            }}
          >
            {option.icon} Buy {option.points} Points for {option.cost} TON
          </button>
        ))}
      </div>
    </div>
  );
};

export default BoostPoints;
