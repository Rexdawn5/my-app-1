// src/App.tsx
import React, { useEffect } from 'react';
import AppRouter from './router';

const App: React.FC = () => {
  useEffect(() => {
    if (typeof window.Telegram !== "undefined" && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      
      // Ensures the WebApp is fully loaded and triggers any necessary Telegram-specific actions
      tg.ready();

      // Conditionally show and hide the main button based on your needs
      tg.MainButton.text = "Confirm";
      tg.MainButton.color = "#4285F4"; // Example color
      tg.MainButton.show(); // Show the button (you can remove this if you don’t need it)

      // Hide the main button if you don’t want it displayed right away
      // Remove or comment this out if the button needs to be visible initially
      setTimeout(() => {
        tg.MainButton.hide();
      }, 2000); // Hides the button after 2 seconds

      // Avoid calling tg.resize() explicitly – let the app adjust based on the container
    } else {
      console.warn("Telegram WebApp object is unavailable");
    }
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
