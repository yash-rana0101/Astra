'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Building,
  GraduationCap,
  Shield,
  CheckCircle,
  Mail,
  Calendar,
  Handshake
} from 'lucide-react'

type PartnerTypeKey = 'educational' | 'corporate' | 'government';

type PartnerType = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  benefits: string[];
  stats: Record<string, string>;
};

const partnerTypes: Record<PartnerTypeKey, PartnerType> = {
  educational: {
    title: "Educational Institutions",
    description: "Protecting students across campuses worldwide",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    benefits: [
      "Campus-wide safety coverage",
      "Integration with existing security systems",
      "Student safety analytics and reporting",
      "24/7 emergency response coordination"
    ],
    stats: { institutions: "500+", students: "250K+", coverage: "99%" }
  },
  corporate: {
    title: "Corporate Partners",
    description: "Employee safety and workplace security solutions",
    icon: Building,
    color: "from-purple-500 to-accent-500",
    benefits: [
      "Employee safety monitoring",
      "Workplace incident reporting",
      "Integration with HR systems",
      "Compliance and safety analytics"
    ],
    stats: { companies: "150+", employees: "75K+", incidents: "98%" }
  },
  government: {
    title: "Government & NGOs",
    description: "Public safety initiatives and community protection",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
    benefits: [
      "City-wide safety networks",
      "Emergency services integration",
      "Public safety analytics",
      "Community outreach programs"
    ],
    stats: { cities: "25+", citizens: "500K+", response: "<3min" }
  }
};

export default function Partners() {
  const [activePartnerType, setActivePartnerType] = useState<PartnerTypeKey>('educational')

  const partners = [
    {
      name: "University of California",
      type: "Educational",
      logo: "/api/placeholder/120/60",
      description: "Campus safety initiative covering 50,000+ students",
      impact: "Reduced response time by 70%"
    },
    {
      name: "Microsoft",
      type: "Corporate",
      logo: "/api/placeholder/120/60",
      description: "Employee safety program for remote and office workers",
      impact: "100% employee adoption rate"
    },
    {
      name: "UN Women",
      type: "NGO",
      logo: "/api/placeholder/120/60",
      description: "Global women's safety advocacy and technology deployment",
      impact: "Deployed in 15+ countries"
    },
    {
      name: "Singapore Police Force",
      type: "Government",
      logo: "/api/placeholder/120/60",
      description: "National safety network integration",
      impact: "40% improvement in emergency response"
    },
    {
      name: "Harvard University",
      type: "Educational",
      logo: "/api/placeholder/120/60",
      description: "Research collaboration on AI safety technologies",
      impact: "Published 12+ research papers"
    },
    {
      name: "Google",
      type: "Corporate",
      logo: "/api/placeholder/120/60",
      description: "Technology partnership and cloud infrastructure",
      impact: "99.99% uptime guarantee"
    }
  ]

  const partnershipTiers = [
    {
      name: "Community Partner",
      price: "Free",
      description: "For small organizations and pilot programs",
      features: [
        "Up to 100 users",
        "Basic analytics",
        "Email support",
        "Mobile app access"
      ],
      color: "border-gray-300"
    },
    {
      name: "Institutional Partner",
      price: "Custom",
      description: "For schools, universities, and medium organizations",
      features: [
        "Up to 10,000 users",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Training programs"
      ],
      color: "border-accent-500",
      popular: true
    },
    {
      name: "Enterprise Partner",
      price: "Custom",
      description: "For large corporations and government agencies",
      features: [
        "Unlimited users",
        "White-label solutions",
        "Dedicated support team",
        "Custom development",
        "SLA guarantees"
      ],
      color: "border-secondary-500"
    }
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
              Partner with <span className="text-gradient">Astra</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Join leading institutions worldwide in creating safer communities.
              Together, we&apos;re building a world where everyone feels protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Become a Partner
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Download Partnership Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Partnership Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored safety solutions for different types of organizations and institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Partner Type Selector */}
            <div className="space-y-4">
              {Object.entries(partnerTypes).map(([key, type]) => {
                  const Icon = type.icon
                  return (
                    <motion.button
                      key={key}
                      onClick={() => setActivePartnerType(key as PartnerTypeKey)}
                    className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${activePartnerType === key
                      ? 'border-accent-500 bg-accent-50'
                      : 'border-gray-200 hover:border-accent-300'
                      }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-dark-500 mb-2">{type.title}</h3>
                        <p className="text-gray-600">{type.description}</p>
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Partner Type Details */}
            <motion.div
              key={activePartnerType}
              className="card p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${partnerTypes[activePartnerType].color} rounded-lg flex items-center justify-center`}>
                  {(() => {
                    const Icon = partnerTypes[activePartnerType].icon;
                    return <Icon className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <h3 className="text-2xl font-bold text-dark-500">{partnerTypes[activePartnerType].title}</h3>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(partnerTypes[activePartnerType].stats).map(([key, value]) => (
                  <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-accent-500 mb-1">{value}</div>
                    <div className="text-sm text-gray-600 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-semibold text-dark-500 mb-4">Key Benefits</h4>
              <ul className="space-y-3">
                {partnerTypes[activePartnerType].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Trusted by Leading Organizations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the growing network of institutions committed to safety and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center group hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 font-medium">{partner.name}</span>
                  </div>
                </div>
                <div className="text-sm text-accent-500 font-medium mb-2">{partner.type}</div>
                <h3 className="text-lg font-semibold text-dark-500 mb-3">{partner.name}</h3>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-700 font-medium">{partner.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Partnership Tiers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership level that best fits your organization&apos;s needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`card p-8 relative ${tier.popular ? 'ring-2 ring-accent-500' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-dark-500 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-accent-500 mb-2">{tier.price}</div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${tier.popular
                  ? 'bg-accent-500 text-white hover:bg-accent-600'
                  : 'border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white'
                  }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
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
            <Handshake className="w-16 h-16 mx-auto mb-6 text-secondary-400" />
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to create safer communities. Contact our partnership team
              to discuss custom solutions for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:partners@astra-safety.com" className="btn-primary text-lg px-8 py-4 flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Contact Partnership Team
              </a>
              <a href="/demo" className="btn-secondary text-lg px-8 py-4 flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
