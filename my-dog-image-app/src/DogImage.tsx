import React from 'react';

const DogImage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
      <img
        src="https://i.postimg.cc/pdX8RPtZ/DALLE2024-10-0813-35-23-Ablackdogwearingadarkfuturisticspacesuitina3-Dcartoonstyle-Thedogssuithasasle.png"
        alt="A cute dog in a spacesuit"
        style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '10px' }}
      />
      <h1></h1>
    </div>
  );
};

export default DogImage;

