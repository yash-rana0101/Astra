'use client'

import { useState } from 'react'
import { MessageCircle, X, Send, Mic, MicOff } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FloatingAI = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm Astra AI. I'm here to help you with safety tips, device setup, or any questions about our platform. How can I assist you today?",
      timestamp: new Date()
    }
  ])

  const handleSendMessage = () => {
    if (!message.trim()) return

    const newMessage = {
      type: 'user',
      content: message,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setMessage('')

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: getBotResponse(message),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes('emergency') || lowerMessage.includes('help')) {
      return "If you're in immediate danger, please call emergency services. For device-related emergencies, try saying your trigger phrase or press the panic button on your Astra device. Would you like me to guide you through the emergency features?"
    }
    
    if (lowerMessage.includes('setup') || lowerMessage.includes('device')) {
      return "I can help you set up your Astra device! First, make sure it's charged and within range. Would you like me to walk you through the initial setup or voice command configuration?"
    }
    
    if (lowerMessage.includes('voice') || lowerMessage.includes('command')) {
      return "Voice commands are the core of Astra's safety system. You can set a custom trigger phrase that works even in whispers. Try something like 'Astra help me' or 'Emergency alert'. Would you like to test your voice trigger?"
    }
    
    if (lowerMessage.includes('guardian') || lowerMessage.includes('contact')) {
      return "Guardians are your trusted emergency contacts who receive alerts when you trigger the system. You can add up to 5 guardians through your dashboard. They'll get your location and can respond immediately. Need help adding guardians?"
    }
    
    return "I understand you're asking about " + userMessage + ". I'm here to help with safety features, device setup, emergency procedures, and general questions about Astra. Is there something specific you'd like to know?"
  }

  const toggleVoiceInput = () => {
    setIsListening(!isListening)
    // Voice input functionality would be implemented here
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false)
        setMessage("Help me set up my device")
      }, 2000)
    }
  }

  const quickActions = [
    { text: "Emergency Help", action: () => setMessage("I need emergency help") },
    { text: "Setup Device", action: () => setMessage("How do I set up my device?") },
    { text: "Voice Commands", action: () => setMessage("Tell me about voice commands") },
    { text: "Guardian Setup", action: () => setMessage("How do I add guardians?") }
  ]

  return (
    <>
      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent-500 to-secondary-500 text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold">Astra AI Assistant</h3>
                  <p className="text-xs opacity-90">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 rounded transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs rounded-lg p-3 ${
                      msg.type === 'user'
                        ? 'bg-accent-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-2 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-2 mb-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded transition-colors duration-200"
                  >
                    {action.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-500 text-sm"
                  />
                </div>
                <button
                  onClick={toggleVoiceInput}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    isListening
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>
                <button
                  onClick={handleSendMessage}
                  className="bg-accent-500 text-white p-2 rounded-lg hover:bg-accent-600 transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="floating-ai-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  )
}

export default FloatingAI
