import React, { useState, useEffect } from 'react';
import spaceDogImage from '../assets/spacedogs.png.png';

const AutoPoints: React.FC = () => {
  const [points, setPoints] = useState(1500); // Initialize with 1500 points
  const [taskCompleted, setTaskCompleted] = useState(false); // Track if the Telegram task is completed
  const [twitterTaskCompleted, setTwitterTaskCompleted] = useState(false); // Track if the Twitter task is completed
  const [boostChannelCompleted, setBoostChannelCompleted] = useState(false); // Track if the Boost Channel task is completed

  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission !== 'granted') {
          console.warn("Notification permission denied.");
        }
      });
    }
  }, []);

  // Daily points accrual with notifications
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(prevPoints => {
        const newPoints = prevPoints + 1000;
        if (Notification.permission === 'granted') {
          new Notification('Daily Points Added', {
            body: `You've earned 1000 points today! Your total is now ${newPoints.toLocaleString()}.`,
            icon: spaceDogImage,
          });
        }
        return newPoints;
      });
    }, 24 * 60 * 60 * 1000); // Every 24 hours

    return () => clearInterval(interval);
  }, []);

  // Function to handle Telegram task
  const completeTelegramTask = async () => {
    window.open('https://t.me/spacedogscommunity', '_blank'); // Opens the Telegram channel
    try {
      const response = await fetch('/api/check-telegram-join', { // Replace with your actual API endpoint
        method: 'POST',
        body: JSON.stringify({ task: 'joinTelegram' }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();

      if (data.completed) {
        setPoints(prevPoints => prevPoints + 500);
        setTaskCompleted(true);
        alert("You've gained 500 points for joining the Telegram channel!");
      } else {
        console.log('Task not completed yet.');
      }
    } catch (error) {
      console.error('Error verifying task completion:', error);
    }
  };

  // Function to handle Twitter task
  const completeTwitterTask = () => {
    window.open('https://x.com/spacedogsbot', '_blank'); // Opens the Twitter page
    setPoints(prevPoints => prevPoints + 500);
    setTwitterTaskCompleted(true);
    alert("You've gained 500 SPDogs for joining Twitter!");
  };

  // Function to handle Boost Channel task
  const completeBoostChannelTask = () => {
    window.open('https://t.me/boost/spacedogscommunity', '_blank'); // Opens the Boost Channel page
    setPoints(prevPoints => prevPoints + 700); // Adds 700 points for Boost Channel task
    setBoostChannelCompleted(true);
    alert("You've gained 700 SPDogs for joining the Boost Channel!");
  };

  return (
    <div style={{
      backgroundColor: 'black', 
      color: 'white', 
      textAlign: 'center', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <h1></h1>
      <div style={{
        backgroundColor: '#4a4a6a',
        border: '2px solid white',
        padding: '20px',
        borderRadius: '8px',
        display: 'inline-block',
        marginTop: '20px'
      }}>
        <p style={{ 
          fontFamily: 'serif', 
          fontSize: '24px', 
          fontWeight: 'bold',
          color: 'white',
          margin: 0 
        }}>
          {points.toLocaleString()} SPDogs
        </p>
      </div>
      <img 
        src={spaceDogImage} 
        alt="Space Dog" 
        style={{ width: '300px', height: 'auto', marginTop: '20px' }} 
      />
      
      {/* Telegram Task Button */}
      <button 
        onClick={completeTelegramTask}
        disabled={taskCompleted}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: taskCompleted ? 'white' : '#3b3b5e',
          color: 'white',
          borderRadius: '8px',
          border: 'none',
          cursor: taskCompleted ? 'not-allowed' : 'pointer',
          fontSize: '18px',
          transition: 'transform 0.2s ease',
        }}
      >
        {taskCompleted ? 'Task Completed' : 'Join Telegram Channel - 500 SPDogs'}
      </button>

      {/* Twitter Task Button */}
      <button 
        onClick={completeTwitterTask}
        disabled={twitterTaskCompleted}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: twitterTaskCompleted ? '#3b3b5e' : '#4a4a6a',
          color: 'white',
          borderRadius: '8px',
          border: 'none',
          cursor: twitterTaskCompleted ? 'not-allowed' : 'pointer',
          fontSize: '18px',
          transition: 'transform 0.2s ease',
        }}
      >
        {twitterTaskCompleted ? 'Task Completed' : 'Join Twitter - 500 SPDogs'}
      </button>

      {/* Boost Channel Task Button */}
      <button 
        onClick={completeBoostChannelTask}
        disabled={boostChannelCompleted}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: boostChannelCompleted ? '#3b3b5e' : '#3b3b5e',
          color: 'white',
          borderRadius: '8px',
          border: 'none',
          cursor: boostChannelCompleted ? 'not-allowed' : 'pointer',
          fontSize: '18px',
          transition: 'transform 0.2s ease',
        }}
      >
        {boostChannelCompleted ? 'Task Completed' : 'Join Boost Channel - 700 SPDogs'}
      </button>
    </div>
  );
};

export default AutoPoints;
