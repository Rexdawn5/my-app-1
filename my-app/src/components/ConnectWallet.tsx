// src/components/ConnectWallet.tsx
import React from 'react';
import walletImage from '../assets/wallet.png.png';

const ConnectWallet: React.FC = () => {
  return (
    <div style={{
      color: 'white', 
      textAlign: 'center', 
      backgroundColor: 'black', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'column'
    }}>
      <img 
        src={walletImage} 
        alt="Wallet Coming Soon" 
        style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
      />
    </div>
  );
};

export default ConnectWallet;
