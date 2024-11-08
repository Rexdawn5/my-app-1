import React from 'react';
import AppRouter from './router';

const App: React.FC = () => {
  // Define your tg://resolve link
  const tgLink = "tg://resolve?domain=@SpDogsBot&start=start_parameter"; // Replace with your bot username and start parameter

  return (
    <div>
      {/* Optionally, display the AppRouter */}
      <AppRouter />

      {/* Add the link/button to open the Telegram bot */}
      <div>
        <h1>Welcome to My Mini App!</h1>
        <p>Click the link below to interact with our Telegram Bot:</p>
        <a href={tgLink} target="_blank" rel="https://t.me/SpDogsBot/spacedogs">
          Open Telegram Bot
        </a>
      </div>
    </div>
  );
};

export default App;
