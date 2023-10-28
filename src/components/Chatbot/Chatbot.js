// Chatbot.js

import React, { useState } from 'react'
import StickyButton from './StickyButton/StickyButton'
import Chat from './Chat/Chart'

const Chatbot = () => {
  const [isChatVisible, setIsChatVisible] = useState(false)

  const handleButtonClick = () => {
    // Toggle the visibility of the Chat component
    setIsChatVisible(!isChatVisible)
  }

  const handleCloseChat = () => {
    // Close the Chat component
    setIsChatVisible(false)
  }

  return (
    <div>
      {/* Render the Chat component if it's visible */}
      {isChatVisible && <Chat onClose={handleCloseChat} />}

      {/* Render the StickyButton component */}
      <StickyButton isVisible={!isChatVisible} onClick={handleButtonClick} />
    </div>
  )
}

export default Chatbot
