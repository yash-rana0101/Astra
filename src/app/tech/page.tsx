'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Brain,
  Wifi,
  Cloud,
  Lock,
  Smartphone,
  Radio,
  Activity,
  Server,
  ChevronRight
} from 'lucide-react'

export default function Technology() {
  const [activeFeature, setActiveFeature] = useState<keyof typeof techFeatures>('ai')

  const techFeatures = {
    ai: {
      title: "AI Voice Recognition",
      description: "Advanced machine learning algorithms that understand your voice even in whispers",
      icon: Brain,
      color: "from-purple-500 to-accent-500",
      details: [
        "99.8% accuracy in noisy environments",
        "Multi-language support (12+ languages)",
        "Edge computing for instant processing",
        "Continuous learning and adaptation"
      ],
      stats: {
        accuracy: "99.8%",
        languages: "12+",
        processing: "<100ms"
      }
    },
    iot: {
      title: "IoT Connectivity",
      description: "Seamless integration across multiple devices and platforms",
      icon: Wifi,
      color: "from-blue-500 to-cyan-500",
      details: [
        "5G/4G LTE connectivity",
        "Bluetooth 5.0 mesh networking",
        "Wi-Fi 6 support",
        "Satellite backup connectivity"
      ],
      stats: {
        devices: "1000+",
        range: "500m",
        battery: "30 days"
      }
    },
    security: {
      title: "End-to-End Security",
      description: "Military-grade encryption protecting your data and communications",
      icon: Lock,
      color: "from-green-500 to-emerald-500",
      details: [
        "AES-256 encryption",
        "Zero-knowledge architecture",
        "Biometric authentication",
        "Secure element hardware"
      ],
      stats: {
        encryption: "AES-256",
        authentication: "Multi-factor",
        compliance: "GDPR"
      }
    },
    cloud: {
      title: "Cloud Infrastructure",
      description: "Global, scalable infrastructure ensuring 99.99% uptime",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      details: [
        "AWS global infrastructure",
        "Real-time data synchronization",
        "Auto-scaling capabilities",
        "Disaster recovery systems"
      ],
      stats: {
        uptime: "99.99%",
        regions: "25+",
        latency: "<50ms"
      }
    }
  }

  const devices = [
    {
      name: "Smart Bangle",
      description: "Elegant wearable with built-in emergency features",
      features: ["Voice activation", "GPS tracking", "24h battery"],
      image: "/api/placeholder/300/200"
    },
    {
      name: "Hair Clip Sensor",
      description: "Discreet safety device disguised as jewelry",
      features: ["Ultra-lightweight", "Magnetic charging", "Waterproof"],
      image: "/api/placeholder/300/200"
    },
    {
      name: "Smart Pendant",
      description: "Fashionable necklace with emergency capabilities",
      features: ["Heart rate monitoring", "Fall detection", "SOS button"],
      image: "/api/placeholder/300/200"
    }
  ]

  const techStack = [
    { name: "TensorFlow", category: "AI/ML", icon: Brain },
    { name: "React Native", category: "Mobile", icon: Smartphone },
    { name: "Node.js", category: "Backend", icon: Server },
    { name: "AWS IoT", category: "Cloud", icon: Cloud },
    { name: "PostgreSQL", category: "Database", icon: Activity },
    { name: "WebRTC", category: "Communication", icon: Radio }
  ]

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
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              The <span className="text-gradient">Technology</span> Behind Safety
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Cutting-edge AI, IoT, and cloud technologies working together to create the most advanced personal safety system ever built.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Try Interactive Demo
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Technical Whitepaper
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Tech Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Core Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the advanced technologies that power Astra&apos;s emergency response system.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Feature Selector */}
            <div className="space-y-4">
              {Object.entries(techFeatures).map(([key, feature]) => {
                const Icon = feature.icon
                return (
                  <motion.button
                    key={key}
                    onClick={() => setActiveFeature(key as keyof typeof techFeatures)}
                    className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${activeFeature === key
                        ? 'border-accent-500 bg-accent-50'
                        : 'border-gray-200 hover:border-accent-300'
                      }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-dark-500 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${activeFeature === key ? 'rotate-90 text-accent-500' : 'text-gray-400'
                        }`} />
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Feature Details */}
            <motion.div
              key={activeFeature}
              className="card p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${techFeatures[activeFeature].color} rounded-lg flex items-center justify-center`}>
                  {(() => {
                    const Icon = techFeatures[activeFeature].icon;
                    return <Icon className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <h3 className="text-2xl font-bold text-dark-500">{techFeatures[activeFeature].title}</h3>
              </div>

              <p className="text-gray-600 mb-6">{techFeatures[activeFeature].description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(techFeatures[activeFeature].stats).map(([key, value]) => (
                  <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-accent-500 mb-1">{value}</div>
                    <div className="text-sm text-gray-600 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {techFeatures[activeFeature].details.map((detail, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Devices Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Smart Devices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beautiful, discreet devices that blend seamlessly into your daily life while keeping you protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {devices.map((device, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden group hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gradient-to-br from-accent-100 to-secondary-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-secondary-500/20"></div>
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark-500 mb-3">{device.name}</h3>
                  <p className="text-gray-600 mb-4">{device.description}</p>
                  <div className="space-y-2">
                    {device.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with industry-leading technologies and frameworks for maximum reliability and performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={index}
                  className="card p-6 text-center group hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon className="w-8 h-8 text-accent-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                  <h4 className="font-semibold text-dark-500 mb-1">{tech.name}</h4>
                  <p className="text-xs text-gray-500">{tech.category}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Experience the Future of Safety
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Ready to see how cutting-edge technology can revolutionize personal safety?
              Try our interactive demo or get started with your own device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/demo" className="btn-primary text-lg px-8 py-4">
                Try Live Demo
              </a>
              <a href="/signup" className="btn-secondary text-lg px-8 py-4">
                Get Your Device
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
