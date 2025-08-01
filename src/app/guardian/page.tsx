'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  AlertTriangle,
  Users,
  Activity,
  Settings,
  Bell,
  Battery,
  Wifi,
  User,
  Filter,
  Download
} from 'lucide-react'

export default function GuardianPortal() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const protectedUsers = [
    {
      id: 1,
      name: "Sarah Johnson",
      relationship: "Daughter",
      status: "safe",
      lastSeen: "2 minutes ago",
      location: "University Campus",
      battery: 85,
      connectionStatus: "connected",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 2,
      name: "Michael Chen",
      relationship: "Son",
      status: "traveling",
      lastSeen: "15 minutes ago",
      location: "Downtown Metro",
      battery: 60,
      connectionStatus: "connected",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 3,
      name: "Emma Wilson",
      relationship: "Friend",
      status: "safe",
      lastSeen: "1 hour ago",
      location: "Home",
      battery: 92,
      connectionStatus: "connected",
      avatar: "/api/placeholder/40/40"
    }
  ]

  const recentAlerts = [
    {
      id: 1,
      type: "emergency",
      user: "Sarah Johnson",
      message: "Emergency alert triggered",
      timestamp: "10 minutes ago",
      status: "resolved",
      location: "Main Street & 5th Ave"
    },
    {
      id: 2,
      type: "location",
      user: "Michael Chen",
      message: "Entered safe zone - University",
      timestamp: "1 hour ago",
      status: "info",
      location: "University Campus"
    },
    {
      id: 3,
      type: "battery",
      user: "Emma Wilson",
      message: "Low battery warning (15%)",
      timestamp: "2 hours ago",
      status: "warning",
      location: "Home"
    }
  ]

  const quickStats = [
    {
      title: "Protected Users",
      value: "3",
      change: "+0",
      icon: Users,
      color: "text-blue-500"
    },
    {
      title: "Active Alerts",
      value: "0",
      change: "-2",
      icon: AlertTriangle,
      color: "text-green-500"
    },
    {
      title: "Avg Response Time",
      value: "45s",
      change: "-10s",
      icon: Clock,
      color: "text-purple-500"
    },
    {
      title: "Safety Score",
      value: "98%",
      change: "+2%",
      icon: Shield,
      color: "text-emerald-500"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'text-green-500 bg-green-50'
      case 'traveling': return 'text-blue-500 bg-blue-50'
      case 'emergency': return 'text-red-500 bg-red-50'
      default: return 'text-gray-500 bg-gray-50'
    }
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'emergency': return AlertTriangle
      case 'location': return MapPin
      case 'battery': return Battery
      default: return Bell
    }
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'users', label: 'Protected Users', icon: Users },
    { id: 'alerts', label: 'Alerts', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-dark-500">Guardian Portal</h1>
              <p className="text-gray-600 mt-1">Monitor and protect your loved ones</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-dark-500 relative">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="btn-primary">
                <Phone className="w-4 h-4 mr-2" />
                Emergency Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${activeTab === tab.id
                        ? 'bg-accent-500 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {quickStats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={index}
                        className="card p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">{stat.title}</p>
                            <p className="text-2xl font-bold text-dark-500 mt-1">{stat.value}</p>
                            <p className={`text-sm mt-1 ${stat.color}`}>{stat.change}</p>
                          </div>
                          <Icon className={`w-8 h-8 ${stat.color}`} />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Protected Users Overview */}
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-dark-500 mb-4">Protected Users Status</h3>
                  <div className="space-y-4">
                    {protectedUsers.map((user) => (
                      <div key={user.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium text-dark-500">{user.name}</h4>
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(user.status)}`}>
                              {user.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{user.location} • {user.lastSeen}</p>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Battery className="w-4 h-4" />
                            <span>{user.battery}%</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Wifi className="w-4 h-4 text-green-500" />
                            <span>Connected</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Alerts */}
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-dark-500">Recent Alerts</h3>
                    <button className="text-accent-500 hover:text-accent-600 text-sm">View All</button>
                  </div>
                  <div className="space-y-3">
                    {recentAlerts.map((alert) => {
                      const Icon = getAlertIcon(alert.type)
                      return (
                        <div key={alert.id} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                          <Icon className={`w-5 h-5 ${alert.type === 'emergency' ? 'text-red-500' : 'text-blue-500'}`} />
                          <div className="flex-1">
                            <p className="font-medium text-dark-500">{alert.message}</p>
                            <p className="text-sm text-gray-600">{alert.user} • {alert.location}</p>
                          </div>
                          <div className="text-sm text-gray-500">{alert.timestamp}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-dark-500">Protected Users</h3>
                  <button className="btn-primary">
                    <User className="w-4 h-4 mr-2" />
                    Add User
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {protectedUsers.map((user) => (
                    <div key={user.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                        <div>
                          <h4 className="font-semibold text-dark-500">{user.name}</h4>
                          <p className="text-sm text-gray-600">{user.relationship}</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Status:</span>
                          <span className={`px-2 py-1 rounded-full ${getStatusColor(user.status)}`}>
                            {user.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Location:</span>
                          <span className="text-dark-500">{user.location}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Battery:</span>
                          <span className="text-dark-500">{user.battery}%</span>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <button className="flex-1 btn-primary text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          Track
                        </button>
                        <button className="flex-1 btn-secondary text-sm">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Message
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'alerts' && (
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-dark-500">Alert History</h3>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Filter className="w-4 h-4" />
                    </button>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  {recentAlerts.map((alert) => {
                    const Icon = getAlertIcon(alert.type)
                    return (
                      <div key={alert.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start space-x-4">
                          <Icon className={`w-6 h-6 mt-1 ${alert.type === 'emergency' ? 'text-red-500' : 'text-blue-500'}`} />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-dark-500">{alert.message}</h4>
                              <span className="text-sm text-gray-500">{alert.timestamp}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">User: {alert.user}</p>
                            <p className="text-sm text-gray-600">Location: {alert.location}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-dark-500 mb-4">Notification Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-dark-500">Emergency Alerts</h4>
                        <p className="text-sm text-gray-600">Immediate notifications for emergency situations</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-500"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-dark-500">Location Updates</h4>
                        <p className="text-sm text-gray-600">Regular location check-ins</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-500"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-dark-500 mb-4">Emergency Contacts</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-dark-500">Local Emergency Services</p>
                        <p className="text-sm text-gray-600">911</p>
                      </div>
                      <button className="text-accent-500 hover:text-accent-600">Edit</button>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-dark-500">Secondary Contact</p>
                        <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                      </div>
                      <button className="text-accent-500 hover:text-accent-600">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
