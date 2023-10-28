import { useState, useEffect, useRef } from 'react'
import { FaTimes, FaPaperPlane } from 'react-icons/fa'
import OpenAI from 'openai'

import './Chat.css'

const Chat = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { content: 'Welcome to Yankari customer care front desk! How can I help you today?', role: 'assistant' },
  ])
  const [newMessage, setNewMessage] = useState('')
  const [isWaiting, setIsWaiting] = useState(false)

  const configuration = {
    organization: 'org-JTAbZPrQNd3vEuCuDEB3R9mB',
    apiKey: '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',
    dangerouslyAllowBrowser: true,
  }
  const openai = new OpenAI(configuration)
  const chatContainerRef = useRef(null)

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
  }, [messages])

  const renderMessages = () => {
    return messages.map((message, index) => (
      <div key={index} className={`mb-3 p-2 rounded border-b border-gray-200`}>
        <div className={`text-gray-500 text-sm`}>{message.role === 'user' ? 'User' : 'Assistant'}</div>
        <div className={`${
          message.role === 'assistant' ? 'bg-teal-100' : 'bg-blue-100'
        } p-2 rounded text-justify`}>
          {message.content}
        </div>
      </div>
    ))
  }

  const handleSendMessage = async () => {
    if (newMessage.trim() === '' || isWaiting) return

    // Add the user message to the chat
    const updatedMessages = [...messages, { content: newMessage, role: 'user' }]
    setMessages(updatedMessages)

    // Include an instruction to guide the model to answer questions as if they are about Yankari
    const userMessageWithInstruction = `Assume all questions are about Yankari Game Reserve. ${newMessage}`

    // Set the waiting state to true while waiting for a response
    setIsWaiting(true)

    // Send the modified user message to ChatGPT and get a response
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'user', content: userMessageWithInstruction },
        ],
      })

      // Add the ChatGPT response to the chat
      const assistantMessage = { content: response.choices[0].message.content, role: 'assistant' }
      setMessages([...updatedMessages, assistantMessage])

      // Scroll to the bottom of the chat after adding the message
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    } catch (error) {
      console.error('Error communicating with ChatGPT:', error)
    } finally {
      // Set the waiting state to false when the response is received
      setIsWaiting(false)
    }

    // Clear the input field
    setNewMessage('')
  }

  const handleKeyPress = (e) => {
    // Check if the Enter key is pressed
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div className='fixed bottom-8 right-3 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg overflow-y-auto w-[450px]' ref={chatContainerRef}>
      {/* Header of the chat */}
      <div className='flex justify-between items-center mb-2'>
        <span className='text-lg font-semibold'>Chat With Customer Care</span>
        <button className='text-gray-500 hover:text-gray-800' onClick={onClose}>
          <FaTimes /> {/* Close icon (X) */}
        </button>
      </div>

      {/* Chat messages go here */}
      <div className='mb-2 chat-messages relative'>
        {renderMessages()}
      </div>

      {/* Chat input area */}
      <div className='flex'>
        <input
          type='text'
          placeholder='Type your message...'
          className='flex-grow border rounded-l p-2 focus:outline-none'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className={`bg-green-500 text-white px-4 py-2 rounded-r ${
            isWaiting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleSendMessage}
          disabled={isWaiting}
        >
          {!isWaiting ? (
            <FaPaperPlane />
          ) : (
            <div className='dots'>
              <div className='dot1'></div>
              <div className='dot2'></div>
              <div className='dot3'></div>
            </div>
          )}
        </button>
      </div>
    </div>
  )
}

export default Chat