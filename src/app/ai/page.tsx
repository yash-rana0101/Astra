'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MessageCircle,
  Brain,
  Mic,
  Send,
  Bot,
  User,
  Zap,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react'

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm Astra AI, your personal safety assistant. I'm here 24/7 to help keep you safe. How can I assist you today?",
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isListening, setIsListening] = useState(false)

  const aiCapabilities = [
    {
      title: "Emergency Detection",
      description: "Automatically detects distress in your voice and takes immediate action",
      icon: AlertTriangle,
      color: "from-red-500 to-pink-500",
      features: [
        "Voice stress analysis",
        "Keyword recognition",
        "Context understanding",
        "False positive prevention"
      ]
    },
    {
      title: "Smart Conversations",
      description: "Natural language processing for seamless communication",
      icon: MessageCircle,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Multi-language support",
        "Contextual responses",
        "Emotional understanding",
        "Personalized interactions"
      ]
    },
    {
      title: "Predictive Safety",
      description: "Learns your patterns to provide proactive safety recommendations",
      icon: Brain,
      color: "from-purple-500 to-accent-500",
      features: [
        "Route optimization",
        "Risk assessment",
        "Behavioral analysis",
        "Preventive alerts"
      ]
    },
    {
      title: "Real-time Assistance",
      description: "Instant responses and guidance in any situation",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      features: [
        "24/7 availability",
        "Instant processing",
        "Multi-modal input",
        "Priority handling"
      ]
    }
  ]

  const quickActions = [
    { text: "I feel unsafe", type: "emergency" },
    { text: "Share my location", type: "location" },
    { text: "Call my guardian", type: "contact" },
    { text: "Safety tips for walking alone", type: "advice" }
  ]

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setInputMessage('')

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: getAIResponse(inputMessage),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  const getAIResponse = (message: string) => {
    const lowerMessage = message.toLowerCase()
    if (lowerMessage.includes('help') || lowerMessage.includes('emergency')) {
      return "I understand you need help. I'm activating emergency protocols and notifying your guardians. Stay calm, help is on the way."
    }
    if (lowerMessage.includes('location')) {
      return "I've shared your current location with your emergency contacts. Your location is being tracked for safety."
    }
    if (lowerMessage.includes('unsafe') || lowerMessage.includes('scared')) {
      return "I'm here with you. I've alerted your guardians and emergency services are standing by. Can you tell me more about your situation?"
    }
    return "I'm here to help keep you safe. What would you like assistance with today?"
  }

  const handleVoiceInput = () => {
    setIsListening(!isListening)
    // Voice input simulation
    setTimeout(() => {
      setIsListening(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Bot className="w-20 h-20 mx-auto mb-6 text-secondary-400" />
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Meet <span className="text-gradient">Astra AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Your intelligent safety companion, powered by advanced AI that understands, learns, and protects you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Try Live Demo
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Learn How It Works
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Chat Demo */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Try Astra AI</h2>
            <p className="text-xl text-gray-600">
              Experience how Astra AI responds to your needs in real-time
            </p>
          </div>

          <div className="card p-6">
            {/* Chat Interface */}
            <div className="h-96 overflow-y-auto mb-6 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.type === 'user'
                      ? 'bg-accent-500 text-white'
                      : 'bg-gray-100 text-dark-500'
                    }`}>
                    <div className="flex items-center space-x-2 mb-1">
                      {message.type === 'ai' ? (
                        <Bot className="w-4 h-4" />
                      ) : (
                        <User className="w-4 h-4" />
                      )}
                      <span className="text-xs opacity-75">
                        {message.type === 'ai' ? 'Astra AI' : 'You'}
                      </span>
                    </div>
                    <p>{message.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => setInputMessage(action.text)}
                    className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                  >
                    {action.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message or ask for help..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleVoiceInput}
                className={`p-3 rounded-lg transition-all duration-200 ${isListening
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                <Mic className="w-5 h-5" />
              </button>
              <button
                onClick={handleSendMessage}
                className="p-3 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors duration-200"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">AI Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Astra AI&apos;s advanced capabilities work together to keep you safe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => {
              const Icon = capability.icon
              return (
                <motion.div
                  key={index}
                  className="card p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${capability.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dark-500">{capability.title}</h3>
                      <p className="text-gray-600">{capability.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-500 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Brain className="w-16 h-16 mx-auto mb-6 text-secondary-400" />
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Your AI Guardian Awaits
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Experience the peace of mind that comes with having an intelligent AI companion watching over you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup" className="btn-primary text-lg px-8 py-4">
                Get Astra AI
              </a>
              <a href="/demo" className="btn-secondary text-lg px-8 py-4">
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
