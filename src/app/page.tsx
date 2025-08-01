'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {  
  Mic,
  MapPin,
  Users,
  Smartphone,
  Brain,
  Zap,
  Heart,
  Play,
  Star,
  ChevronRight,
  CheckCircle
} from 'lucide-react'

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mounted, setMounted] = useState(false)

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "College Student",
      content: "Astra gave me confidence to walk alone at night. The voice trigger works perfectly even when I whisper.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Dr. Sarah Chen",
      role: "Safety Expert",
      content: "Revolutionary technology that bridges the gap between personal safety and emergency response.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Maya Patel",
      role: "Working Professional",
      content: "My parents feel much safer knowing I have Astra. The guardian alerts work flawlessly.",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ]

  const features = [
    {
      icon: Mic,
      title: "Voice Activation",
      description: "Trigger alerts with a whisper. Our AI recognizes your voice even in distress.",
      color: "from-accent-500 to-purple-600"
    },
    {
      icon: MapPin,
      title: "Real-time Location",
      description: "Instant GPS tracking sends your exact location to guardians and emergency services.",
      color: "from-blue-500 to-accent-500"
    },
    {
      icon: Users,
      title: "Guardian Network",
      description: "Connect with trusted contacts who receive immediate alerts and can respond quickly.",
      color: "from-green-500 to-accent-500"
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Advanced machine learning ensures accurate threat detection and false alarm prevention.",
      color: "from-secondary-500 to-orange-500"
    }
  ]

  const stats = [
    { number: "10,000+", label: "Lives Protected" },
    { number: "500+", label: "Schools Connected" },
    { number: "99.8%", label: "Alert Accuracy" },
    { number: "24/7", label: "Monitoring" }
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length, mounted])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                className="hero-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                One Voice Can
                <span className="block text-gradient">Save You</span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Be Heard, Even in Silence. Revolutionary AI + IoT technology that keeps girls safe with discreet wearable devices and instant emergency response.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/signup" className="btn-primary text-lg px-8 py-4">
                Get Started Free
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/demo" className="btn-secondary text-lg px-8 py-4 group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Try Demo
              </Link>
              <Link href="/partners" className="text-white hover:text-accent-400 transition-colors text-lg font-medium">
                Partner with Us →
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Device Mockup */}
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 opacity-30"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-accent-400 to-secondary-400 rounded-full blur-3xl"></div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Powerful Safety Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology designed specifically for women&apos;s safety, combining AI, IoT, and emergency response systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  className="card p-8 text-center group hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-dark-500">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">How Astra Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, discreet, and effective. Our three-step process ensures your safety is always just a whisper away.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Wear & Setup",
                description: "Choose from our stylish wearables - bangles, hair clips, or pendants. Set your voice trigger and add guardians.",
                icon: Smartphone
              },
              {
                step: "02",
                title: "Voice Activation",
                description: "In an emergency, whisper your trigger phrase. Our AI instantly recognizes your voice and activates the alert system.",
                icon: Mic
              },
              {
                step: "03",
                title: "Instant Response",
                description: "Your location is immediately shared with guardians and emergency services. Help arrives faster than ever before.",
                icon: Zap
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-dark-500">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-dark-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title text-white mb-16">Trusted by Thousands</h2>

          {mounted && (
            <motion.div
              key={currentTestimonial}
              className="glass-effect p-8 text-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-white mb-6 italic">
                &quot;{testimonials[currentTestimonial].content}&quot;
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-accent-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-300 text-sm">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </motion.div>
          )}

          {mounted && (
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentTestimonial ? 'bg-secondary-400' : 'bg-white/30'
                    }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card p-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-dark-500 mb-6">
              Ready to Feel Safe?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of women who trust Astra for their safety. Get started with our free trial and experience the peace of mind you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </Link>
              <Link href="/demo" className="btn-secondary text-lg px-8 py-4">
                See How It Works
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Free 30-day trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                24/7 support
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
