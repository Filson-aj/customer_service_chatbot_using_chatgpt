// StickyButton.js

import React, { useState } from 'react';
import { images } from '../../../assets/constants/data';

const StickyButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    // Hide the button when clicked
    setIsVisible(false);
  };

  return (
    <button
      className={`fixed bottom-8 right-3 text-white px-4 py-2 rounded-full ${isVisible ? 'visible' : 'invisible'}`}
      onClick={handleButtonClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <img
        src={images.avatar2}
        alt="Chatbot Avatar"
        className="h-12 w-12 rounded-full mr-2"
      />
    </button>
  );
};

export default StickyButton;
