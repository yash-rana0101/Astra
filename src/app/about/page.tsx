'use client'

import { motion } from 'framer-motion'
import { Shield, Target, Users, Lightbulb, Award, Globe, Heart, Zap } from 'lucide-react'

export default function About() {
  const milestones = [
    {
      year: "2023",
      title: "Concept & Research",
      description: "Identified the critical need for discreet safety solutions for women and girls."
    },
    {
      year: "2024",
      title: "MVP Development",
      description: "Built first prototype with AI voice recognition and IoT connectivity."
    },
    {
      year: "2024",
      title: "Pilot Testing",
      description: "Deployed devices in 50+ schools and universities for real-world testing."
    },
    {
      year: "2024",
      title: "Partnership Launch",
      description: "Partnered with NGOs and educational institutions for wider deployment."
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Scaling internationally with enhanced features and multi-language support."
    }
  ]

  const teamMembers = [
    {
      name: "Yash Rana",
      role: "Founder & CEO",
      description: "Passionate about using technology to create safer communities for women.",
      icon: Target,
      color: "from-accent-500 to-purple-600"
    },
    {
      name: "AI Development Team",
      role: "Machine Learning Engineers",
      description: "Experts in voice recognition, natural language processing, and IoT systems.",
      icon: Lightbulb,
      color: "from-blue-500 to-accent-500"
    },
    {
      name: "Safety Experts",
      role: "Security Consultants",
      description: "Former law enforcement and emergency response professionals.",
      icon: Shield,
      color: "from-green-500 to-accent-500"
    },
    {
      name: "Community Partners",
      role: "NGO & Educational Partners",
      description: "Organizations dedicated to women's safety and empowerment.",
      icon: Users,
      color: "from-secondary-500 to-orange-500"
    }
  ]

  const impact = [
    { number: "10,000+", label: "Lives Protected", icon: Heart },
    { number: "500+", label: "Institutions", icon: Globe },
    { number: "50+", label: "Cities Covered", icon: Target },
    { number: "99.8%", label: "Success Rate", icon: Award }
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
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              About <span className="text-gradient">Astra</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Born from the vision to create a world where every woman and girl feels safe, 
              empowered, and heard - even in their most vulnerable moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-dark-500 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To revolutionize personal safety through innovative AI and IoT technology, 
                  ensuring that no woman or girl ever feels helpless in a dangerous situation. 
                  We believe that safety should be accessible, discreet, and empowering.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-accent-500 rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-dark-500 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A world where technology serves as a guardian angel, where every voice - 
                  no matter how quiet - can summon help instantly. We envision communities 
                  where women feel confident, protected, and free to pursue their dreams 
                  without fear.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Astra */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why &quot;Astra&quot;?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From the Latin word meaning &quot;stars&quot; - just as stars guide travelers through darkness, 
              Astra guides women to safety through their most challenging moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Protection",
                description: "Like a constellation watching over you, Astra provides constant, invisible protection.",
                color: "from-accent-500 to-purple-600"
              },
              {
                icon: Zap,
                title: "Speed",
                description: "As swift as starlight, our alerts reach guardians and emergency services instantly.",
                color: "from-blue-500 to-accent-500"
              },
              {
                icon: Heart,
                title: "Care",
                description: "With the warmth of a guiding star, we care for every user like family.",
                color: "from-green-500 to-accent-500"
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  className="card p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-dark-500">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From idea to impact - the story of how Astra came to life.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-accent-500 to-secondary-500"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } mb-12`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="card p-6">
                    <div className="text-accent-500 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-dark-500 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of technologists, safety experts, and advocates united by one mission - 
              making the world safer for women and girls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const Icon = member.icon
              return (
                <motion.div
                  key={index}
                  className="card p-6 text-center group hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-500 mb-2">{member.name}</h3>
                  <div className="text-accent-500 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-gradient-to-r from-dark-500 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Impact</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Numbers tell a story, but behind each statistic is a life protected, a family reassured, 
              and a community made safer.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impact.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-secondary-400" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {item.number}
                  </div>
                  <div className="text-gray-300 text-lg">{item.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="card p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-dark-500 mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Be part of the movement that&apos;s making the world safer for women and girls. 
              Whether you&apos;re a user, partner, or advocate - there&apos;s a place for you in the Astra family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/partners" className="btn-primary text-lg px-8 py-4">
                Partner With Us
              </a>
              <a href="/support" className="btn-secondary text-lg px-8 py-4">
                Get Involved
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
