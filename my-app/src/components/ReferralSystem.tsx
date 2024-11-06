import React, { useState } from 'react';

const ReferralSystem: React.FC = () => {
  const generateCode = (length = 8) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const [referralCode] = useState(generateCode());
  const referralLink = `https://spacedogs.app/invite?referralCode=${referralCode}`;

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied to clipboard!');
  };

  return (
    <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
      <h1>Invite Friends 🐕‍🦺</h1>
      <p>Share your referral link to invite your friends!</p>
      <button
        onClick={copyLink}
        style={{
          padding: '10px 20px',
          backgroundColor: '#1e1e2f',
          color: 'white',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        Copy Referral Link
      </button>
      <p>Current Referral Code: {referralCode}</p>
    </div>
  );
};

export default ReferralSystem;
