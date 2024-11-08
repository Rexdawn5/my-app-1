import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AutoPoints from './components/AutoPoints';
import ReferralSystem from './components/ReferralSystem';
import BoostPoints from './components/BoostPoints';
import ConnectWallet from './components/ConnectWallet';
import { FaDog, FaCoins, FaTasks, FaWallet } from 'react-icons/fa';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div
        style={{
          backgroundColor: '#000',
          backgroundImage: `url('/spacedogsbackground1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          color: 'white',
          paddingBottom: '60px',
        }}
      >
        <Routes>
          <Route path="/" element={<AutoPoints />} />
          <Route path="/referral" element={<ReferralSystem />} />
          <Route path="/boost" element={<BoostPoints />} />
          <Route path="/wallet" element={<ConnectWallet />} />
        </Routes>

        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            position: 'fixed',
            bottom: '0',
            width: '100%',
            backgroundColor: '#111',
            padding: '10px 0',
          }}
        >
          <Link
            to="/"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <FaDog size={24} />
            <span>Home</span>
          </Link>
          <Link
            to="/referral"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <FaTasks size={24} />
            <span>Friends</span>
          </Link>
          <Link
            to="/boost"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <FaCoins size={24} />
            <span>Shop</span>
          </Link>
          <Link
            to="/wallet"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <FaWallet size={24} />
            <span>Wallet</span>
          </Link>
        </nav>
      </div>
    </Router>
  );
};

export default AppRouter;
