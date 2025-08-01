'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mic,
  MapPin,
  Phone,
  Users,
  Clock,
  CheckCircle,
  Volume2,
  Shield,
  Play,
  RotateCcw
} from 'lucide-react'

export default function Demo() {
  const [isRecording, setIsRecording] = useState(false)
  const [demoStep, setDemoStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const [selectedPhrase, setSelectedPhrase] = useState('')
  const [mounted, setMounted] = useState(false)

  const emergencyPhrases = [
    "Astra help me",
    "Emergency alert",
    "I need help now",
    "Call for help",
    "Safety alert"
  ]

  const demoSteps = [
    {
      id: 0,
      title: "Choose Your Voice Trigger",
      description: "Select a phrase you'd use in an emergency",
      icon: Mic,
      status: "waiting"
    },
    {
      id: 1,
      title: "Voice Detection",
      description: "AI processes your voice command",
      icon: Volume2,
      status: "waiting"
    },
    {
      id: 2,
      title: "Location Capture",
      description: "GPS coordinates are instantly captured",
      icon: MapPin,
      status: "waiting"
    },
    {
      id: 3,
      title: "Guardian Alert",
      description: "Emergency contacts receive immediate notification",
      icon: Users,
      status: "waiting"
    },
    {
      id: 4,
      title: "Emergency Response",
      description: "Help is on the way",
      icon: Phone,
      status: "waiting"
    }
  ]

  const [steps, setSteps] = useState(demoSteps)

  const guardians = [
    { name: "Mom", phone: "+1 (555) 123-4567", response: "On my way! 🚗" },
    { name: "Dad", phone: "+1 (555) 987-6543", response: "Called 911, location shared 🚨" },
    { name: "Sarah", phone: "+1 (555) 456-7890", response: "Heading to you now! ❤️" }
  ]

  const startDemo = () => {
    if (!selectedPhrase) return

    setIsPlaying(true)
    setDemoStep(1)
    setIsRecording(true)

    // Simulate recording for 3 seconds
    setTimeout(() => {
      setIsRecording(false)
      processSteps()
    }, 3000)
  }

  const processSteps = () => {
    let currentStep = 1

    const updateStep = (stepIndex: number, status: 'processing' | 'completed') => {
      setSteps(prev => prev.map(step =>
        step.id === stepIndex ? { ...step, status } : step
      ))
    }

    const processNextStep = () => {
      if (currentStep <= 4) {
        updateStep(currentStep, 'processing')

        setTimeout(() => {
          updateStep(currentStep, 'completed')
          currentStep++
          if (currentStep <= 4) {
            setDemoStep(currentStep)
            processNextStep()
          } else {
            setTimeout(() => {
              setIsPlaying(false)
            }, 1000)
          }
        }, 2000)
      }
    }

    processNextStep()
  }

  const resetDemo = () => {
    setIsPlaying(false)
    setIsRecording(false)
    setDemoStep(0)
    setSelectedPhrase('')
    setSteps(demoSteps.map(step => ({ ...step, status: 'waiting' })))
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isRecording && countdown === 0 && mounted) {
      setCountdown(3)
    }

    if (countdown > 0 && mounted) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [isRecording, countdown, mounted])

  if (!mounted) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-500 mb-4">
              Experience <span className="text-gradient">Astra Live</span>
            </h1>
            <p className="text-xl text-gray-600">Loading demo...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dark-500 mb-4">
              Experience <span className="text-gradient">Astra Live</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI-powered emergency system works in real-time.
              This demo simulates the complete alert process from voice trigger to emergency response.
            </p>
          </motion.div>
        </div>

        {/* Demo Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Voice Interface */}
          <motion.div
            className="card p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-dark-500 mb-6">Voice Trigger Demo</h2>

              {!isPlaying && (
                <>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-3">
                      Choose your emergency phrase:
                    </label>
                    <div className="space-y-2">
                      {emergencyPhrases.map((phrase) => (
                        <button
                          key={phrase}
                          onClick={() => setSelectedPhrase(phrase)}
                          className={`w-full p-3 rounded-lg border-2 transition-all duration-200 ${selectedPhrase === phrase
                            ? 'border-accent-500 bg-accent-50 text-accent-700'
                            : 'border-gray-200 hover:border-accent-300'
                            }`}
                        >
                          &quot;{phrase}&quot;
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={startDemo}
                    disabled={!selectedPhrase}
                    className={`btn-primary text-lg px-8 py-4 ${!selectedPhrase ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start Emergency Demo
                  </button>
                </>
              )}

              {isPlaying && (
                <div className="space-y-6">
                  {isRecording && (
                    <div className="text-center">
                      <motion.div
                        className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Mic className="w-16 h-16 text-white" />
                      </motion.div>
                      <div className="text-6xl font-bold text-red-500 mb-2">{countdown}</div>
                      <p className="text-lg text-gray-600">
                        Say: &quot;<span className="font-semibold text-accent-600">{selectedPhrase}</span>&quot;
                      </p>
                      <div className="mt-4">
                        <div className="flex justify-center items-center space-x-2">
                          <div className="w-2 h-8 bg-accent-500 rounded animate-pulse"></div>
                          <div className="w-2 h-12 bg-accent-500 rounded animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-6 bg-accent-500 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-10 bg-accent-500 rounded animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                          <div className="w-2 h-4 bg-accent-500 rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {!isRecording && (
                    <div className="text-center">
                      <motion.div
                        className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      >
                        <CheckCircle className="w-12 h-12 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-green-600 mb-2">
                        Voice Detected!
                      </h3>
                      <p className="text-gray-600">
                        Processing emergency alert...
                      </p>
                    </div>
                  )}

                  <button
                    onClick={resetDemo}
                    className="btn-secondary"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset Demo
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Process Visualization */}
          <motion.div
            className="card p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-dark-500 mb-6">Alert Process</h2>

            <div className="space-y-4">
              {steps.map((step) => {
                const Icon = step.icon
                const isActive = demoStep >= step.id
                const isCompleted = step.status === 'completed'
                const isProcessing = step.status === 'processing'

                return (
                  <motion.div
                    key={step.id}
                    className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-500 ${isActive ? 'bg-accent-50 border border-accent-200' : 'bg-gray-50'
                      }`}
                    initial={{ opacity: 0.5 }}
                    animate={{
                      opacity: isActive ? 1 : 0.5,
                      scale: isActive ? 1.02 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isCompleted ? 'bg-green-500' :
                      isProcessing ? 'bg-accent-500 animate-pulse' :
                        isActive ? 'bg-accent-200' : 'bg-gray-200'
                      }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : isProcessing ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </motion.div>
                      ) : (
                        <Icon className={`w-5 h-5 ${isActive ? 'text-accent-600' : 'text-gray-400'}`} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${isActive ? 'text-accent-700' : 'text-gray-600'}`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm ${isActive ? 'text-accent-600' : 'text-gray-500'}`}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Live Simulation Results */}
        <AnimatePresence>
          {isPlaying && demoStep >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
            >
              {/* Guardian Responses */}
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-dark-500 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Guardian Responses
                </h3>
                <div className="space-y-3">
                  {guardians.map((guardian, index) => (
                    <motion.div
                      key={guardian.name}
                      className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.5 }}
                    >
                      <div>
                        <div className="font-medium text-dark-500">{guardian.name}</div>
                        <div className="text-sm text-gray-600">{guardian.phone}</div>
                      </div>
                      <div className="text-green-600 font-medium">{guardian.response}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Location & Services */}
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-dark-500 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Emergency Services
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-blue-700">Location Shared</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="text-sm text-blue-600">
                      📍 University Campus, Building A<br />
                      Coordinates: 37.7749° N, 122.4194° W
                    </div>
                  </div>

                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-red-700">911 Notified</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="text-sm text-red-600">
                      🚨 Emergency services dispatched<br />
                      ETA: 4-6 minutes
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-purple-700">Campus Security</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="text-sm text-purple-600">
                      🛡️ Security team en route<br />
                      Officer Johnson responding
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Features Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.div
            className="card p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Volume2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-dark-500 mb-2">Voice Recognition</h3>
            <p className="text-gray-600">
              99.8% accurate voice detection works even in whispers and noisy environments.
            </p>
          </motion.div>

          <motion.div
            className="card p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-dark-500 mb-2">Instant Response</h3>
            <p className="text-gray-600">
              Alerts reach guardians and emergency services in under 10 seconds.
            </p>
          </motion.div>

          <motion.div
            className="card p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-dark-500 mb-2">False Alert Protection</h3>
            <p className="text-gray-600">
              AI prevents accidental triggers while ensuring real emergencies are never missed.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="card p-8 text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-dark-500 mb-4">
            Ready to Get Protected?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            This demo shows just a fraction of Astra&apos;s capabilities.
            Experience the full safety ecosystem with your own personalized device.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="btn-primary text-lg px-8 py-4">
              Get Your Astra Device
            </a>
            <a href="/tech" className="btn-secondary text-lg px-8 py-4">
              Learn About the Technology
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
