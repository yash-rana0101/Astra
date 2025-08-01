'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  Video,
  Download,
  Search,
  ChevronDown,
  ChevronRight,
  Clock,
  AlertCircle,
  Users,
  Zap,
  Shield
} from 'lucide-react'

export default function Support() {
  const [activeCategory, setActiveCategory] = useState('getting-started')
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const supportCategories = {
    'getting-started': {
      title: "Getting Started",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      articles: [
        { title: "Setting up your Astra device", time: "5 min read" },
        { title: "Creating your safety profile", time: "3 min read" },
        { title: "Adding emergency contacts", time: "2 min read" },
        { title: "Voice command training", time: "4 min read" }
      ]
    },
    'device-help': {
      title: "Device Help",
      icon: Shield,
      color: "from-purple-500 to-accent-500",
      articles: [
        { title: "Troubleshooting connection issues", time: "6 min read" },
        { title: "Battery and charging guide", time: "3 min read" },
        { title: "Device maintenance tips", time: "4 min read" },
        { title: "Waterproofing and care", time: "2 min read" }
      ]
    },
    'emergency': {
      title: "Emergency Features",
      icon: AlertCircle,
      color: "from-red-500 to-orange-500",
      articles: [
        { title: "How to trigger an emergency alert", time: "2 min read" },
        { title: "Understanding alert types", time: "4 min read" },
        { title: "Emergency response process", time: "5 min read" },
        { title: "Testing your emergency system", time: "3 min read" }
      ]
    },
    'account': {
      title: "Account & Settings",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      articles: [
        { title: "Managing your account", time: "3 min read" },
        { title: "Privacy and security settings", time: "5 min read" },
        { title: "Notification preferences", time: "2 min read" },
        { title: "Data export and deletion", time: "4 min read" }
      ]
    }
  }

  const faqs = [
    {
      question: "How accurate is the voice recognition?",
      answer: "Our AI-powered voice recognition system has a 99.8% accuracy rate, even in noisy environments. It's trained to recognize your voice specifically and can work even when you're whispering."
    },
    {
      question: "What happens when I trigger an emergency alert?",
      answer: "When you trigger an alert, your location is immediately shared with your emergency contacts and local emergency services. They receive a notification with your exact GPS coordinates and can track your location in real-time."
    },
    {
      question: "How long does the battery last?",
      answer: "The battery life varies by device: Smart Bangles last up to 7 days, Hair Clips up to 14 days, and Smart Pendants up to 30 days with normal usage. All devices can be quickly charged using magnetic chargers."
    },
    {
      question: "Is my data secure and private?",
      answer: "Yes, we use military-grade AES-256 encryption and follow a zero-knowledge architecture. Your personal data is encrypted both in transit and at rest, and we never sell or share your information with third parties."
    },
    {
      question: "Can I use Astra internationally?",
      answer: "Astra works in 50+ countries worldwide. The device automatically connects to local emergency services in each country and supports multiple languages for voice commands."
    },
    {
      question: "What if I accidentally trigger an alert?",
      answer: "You have a 30-second window to cancel any alert before it's sent to your contacts and emergency services. Simply say 'Cancel alert' or press the cancel button on your device or app."
    }
  ]

  const contactOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      color: "from-blue-500 to-cyan-500",
      availability: "24/7",
      action: "Start Chat"
    },
    {
      title: "Phone Support",
      description: "Speak directly with a safety expert",
      icon: Phone,
      color: "from-green-500 to-emerald-500",
      availability: "Mon-Fri, 9AM-6PM",
      action: "Call Now"
    },
    {
      title: "Email Support",
      description: "Send us your questions anytime",
      icon: Mail,
      color: "from-purple-500 to-accent-500",
      availability: "Response within 2 hours",
      action: "Send Email"
    },
    {
      title: "Emergency Line",
      description: "24/7 emergency technical support",
      icon: AlertCircle,
      color: "from-red-500 to-orange-500",
      availability: "Always available",
      action: "Call Emergency"
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-secondary-400" />
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              How Can We <span className="text-gradient">Help?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Find answers, get support, and learn how to make the most of your Astra safety system.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, features, or questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-secondary-400 backdrop-blur-sm"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Get Help Instantly</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to get the support you need, when you need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <motion.div
                  key={index}
                  className="card p-6 text-center group hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-500 mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-3">{option.description}</p>
                  <div className="text-sm text-gray-500 mb-4 flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {option.availability}
                  </div>
                  <button className="btn-primary w-full">
                    {option.action}
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Knowledge Base</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive guides and tutorials to get the most out of Astra.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Category Selector */}
            <div className="space-y-4">
              {Object.entries(supportCategories).map(([key, category]) => {
                const Icon = category.icon
                return (
                  <motion.button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${activeCategory === key
                        ? 'border-accent-500 bg-accent-50'
                        : 'border-gray-200 hover:border-accent-300'
                      }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-dark-500">{category.title}</span>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Articles List */}
            <div className="lg:col-span-2">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-dark-500 mb-6">
                  {supportCategories[activeCategory as keyof typeof supportCategories].title}
                </h3>
                <div className="space-y-4">
                  {supportCategories[activeCategory as keyof typeof supportCategories].articles.map((article, index) => (
                    <div key={index} className="card p-6 hover:shadow-lg transition-shadow duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-dark-500 mb-2">{article.title}</h4>
                          <div className="flex items-center text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="text-sm">{article.time}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to the most common questions about Astra.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-dark-500">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''
                    }`} />
                </button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Additional Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore more ways to learn about and get help with Astra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="card p-8 text-center group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Video className="w-12 h-12 text-accent-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold text-dark-500 mb-4">Video Tutorials</h3>
              <p className="text-gray-600 mb-6">Step-by-step video guides for all features</p>
              <button className="btn-secondary w-full">
                Watch Videos
              </button>
            </motion.div>

            <motion.div
              className="card p-8 text-center group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Download className="w-12 h-12 text-accent-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold text-dark-500 mb-4">User Manual</h3>
              <p className="text-gray-600 mb-6">Complete PDF guide for offline reference</p>
              <button className="btn-secondary w-full">
                Download PDF
              </button>
            </motion.div>

            <motion.div
              className="card p-8 text-center group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Users className="w-12 h-12 text-accent-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold text-dark-500 mb-4">Community Forum</h3>
              <p className="text-gray-600 mb-6">Connect with other users and share tips</p>
              <button className="btn-secondary w-full">
                Join Community
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
