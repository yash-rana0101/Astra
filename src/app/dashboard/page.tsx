'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Shield, 
  Users, 
  MapPin, 
  Settings, 
  Bell, 
  Mic, 
  Battery, 
  Signal,
  AlertTriangle,
  Clock,
  Phone,
  Edit,
  Plus,
  Trash2,
  CheckCircle,
  Activity
} from 'lucide-react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isVoiceTraining, setIsVoiceTraining] = useState(false)

  const recentAlerts = [
    {
      id: 1,
      type: 'test',
      location: 'Home - Living Room',
      time: '2 hours ago',
      status: 'resolved',
      guardians: ['Mom', 'Dad']
    },
    {
      id: 2,
      type: 'voice_trigger',
      location: 'University Campus',
      time: '1 day ago',
      status: 'resolved',
      guardians: ['Emergency Services', 'Mom']
    },
    {
      id: 3,
      type: 'panic_button',
      location: 'Bus Stop - Main St',
      time: '3 days ago',
      status: 'resolved',
      guardians: ['Sarah', 'Mom', 'Campus Security']
    }
  ]

  const guardians = [
    {
      id: 1,
      name: 'Mom',
      phone: '+1 (555) 123-4567',
      relation: 'Mother',
      priority: 1,
      status: 'active'
    },
    {
      id: 2,
      name: 'Dad',
      phone: '+1 (555) 987-6543',
      relation: 'Father',
      priority: 2,
      status: 'active'
    },
    {
      id: 3,
      name: 'Sarah',
      phone: '+1 (555) 456-7890',
      relation: 'Best Friend',
      priority: 3,
      status: 'active'
    }
  ]

  const deviceStatus = {
    battery: 85,
    signal: 'excellent',
    location: 'enabled',
    voiceModel: 'trained',
    lastSync: '2 minutes ago'
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Activity },
    { id: 'guardians', name: 'Guardians', icon: Users },
    { id: 'voice', name: 'Voice Setup', icon: Mic },
    { id: 'alerts', name: 'Alert History', icon: Bell },
    { id: 'settings', name: 'Settings', icon: Settings }
  ]

  const voiceCommands = [
    { phrase: "Astra help me", confidence: 98, trained: true },
    { phrase: "Emergency alert", confidence: 95, trained: true },
    { phrase: "I need help", confidence: 92, trained: true },
    { phrase: "Call for help", confidence: 88, trained: false }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark-500 mb-2">Welcome back, Priya!</h1>
          <p className="text-gray-600">Your safety dashboard - manage your device, guardians, and emergency settings.</p>
        </div>

        {/* Device Status Card */}
        <motion.div
          className="card p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-dark-500">Device Status</h2>
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">All Systems Active</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Battery className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Battery</div>
                <div className="font-semibold">{deviceStatus.battery}%</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Signal className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Signal</div>
                <div className="font-semibold capitalize">{deviceStatus.signal}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Location</div>
                <div className="font-semibold capitalize">{deviceStatus.location}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                <Mic className="w-5 h-5 text-accent-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Voice Model</div>
                <div className="font-semibold capitalize">{deviceStatus.voiceModel}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Last Sync</div>
                <div className="font-semibold">{deviceStatus.lastSync}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-dark-500 mb-4">Dashboard</h3>
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'bg-accent-500 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.name}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="card p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-dark-500 mb-2">Active</div>
                    <div className="text-gray-600">Device Status</div>
                  </div>
                  
                  <div className="card p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-dark-500 mb-2">{guardians.length}</div>
                    <div className="text-gray-600">Guardians</div>
                  </div>
                  
                  <div className="card p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Bell className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-dark-500 mb-2">{recentAlerts.length}</div>
                    <div className="text-gray-600">Recent Alerts</div>
                  </div>
                </div>

                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-dark-500 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentAlerts.slice(0, 3).map((alert) => (
                      <div key={alert.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            alert.type === 'test' ? 'bg-blue-100' : 'bg-red-100'
                          }`}>
                            <AlertTriangle className={`w-4 h-4 ${
                              alert.type === 'test' ? 'text-blue-600' : 'text-red-600'
                            }`} />
                          </div>
                          <div>
                            <div className="font-medium text-dark-500">
                              {alert.type === 'test' ? 'Test Alert' : 'Emergency Alert'}
                            </div>
                            <div className="text-sm text-gray-600">{alert.location} • {alert.time}</div>
                          </div>
                        </div>
                        <div className="text-sm text-green-600 font-medium">Resolved</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'guardians' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-dark-500">Emergency Guardians</h2>
                  <button className="btn-primary flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Guardian</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {guardians.map((guardian) => (
                    <div key={guardian.id} className="card p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-dark-500">{guardian.name}</div>
                            <div className="text-gray-600">{guardian.relation}</div>
                            <div className="text-sm text-gray-500">{guardian.phone}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-sm text-gray-600">Priority {guardian.priority}</div>
                          <button className="p-2 text-gray-400 hover:text-accent-500 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'voice' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-dark-500">Voice Commands</h2>
                  <button 
                    onClick={() => setIsVoiceTraining(!isVoiceTraining)}
                    className={`btn-primary ${isVoiceTraining ? 'bg-red-500 hover:bg-red-600' : ''}`}
                  >
                    {isVoiceTraining ? 'Stop Training' : 'Train New Command'}
                  </button>
                </div>

                {isVoiceTraining && (
                  <div className="card p-6 bg-accent-50 border-accent-200">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <Mic className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-dark-500 mb-2">Recording...</h3>
                      <p className="text-gray-600">Say your emergency phrase clearly 3 times</p>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  {voiceCommands.map((command, index) => (
                    <div key={index} className="card p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-dark-500 mb-1">&quot;{command.phrase}&quot;</div>
                          <div className="flex items-center space-x-4">
                            <div className="text-sm text-gray-600">
                              Confidence: {command.confidence}%
                            </div>
                            <div className={`text-sm px-2 py-1 rounded-full ${
                              command.trained 
                                ? 'bg-green-100 text-green-600' 
                                : 'bg-yellow-100 text-yellow-600'
                            }`}>
                              {command.trained ? 'Trained' : 'Needs Training'}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${
                            command.confidence > 95 ? 'bg-green-500' : 
                            command.confidence > 90 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'alerts' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-dark-500">Alert History</h2>
                
                <div className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="card p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center mt-1 ${
                            alert.type === 'test' ? 'bg-blue-100' : 'bg-red-100'
                          }`}>
                            <AlertTriangle className={`w-5 h-5 ${
                              alert.type === 'test' ? 'text-blue-600' : 'text-red-600'
                            }`} />
                          </div>
                          <div>
                            <div className="font-semibold text-dark-500 mb-1">
                              {alert.type === 'test' ? 'Test Alert' : 
                               alert.type === 'voice_trigger' ? 'Voice Trigger Alert' : 
                               'Panic Button Alert'}
                            </div>
                            <div className="text-gray-600 mb-2">
                              <MapPin className="w-4 h-4 inline mr-1" />
                              {alert.location}
                            </div>
                            <div className="text-sm text-gray-500 mb-2">
                              <Clock className="w-4 h-4 inline mr-1" />
                              {alert.time}
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-600">Notified:</span>
                              {alert.guardians.map((guardian, index) => (
                                <span key={index} className="text-sm bg-gray-100 px-2 py-1 rounded">
                                  {guardian}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-green-600 font-medium">
                          {alert.status === 'resolved' ? 'Resolved' : 'Active'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-dark-500">Settings</h2>
                
                <div className="space-y-6">
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-dark-500 mb-4">Alert Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-dark-500">Sound Alerts</div>
                          <div className="text-sm text-gray-600">Play sound when alert is triggered</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-dark-500">Vibration</div>
                          <div className="text-sm text-gray-600">Vibrate device when alert is triggered</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-dark-500">Location Sharing</div>
                          <div className="text-sm text-gray-600">Share location with guardians</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-dark-500 mb-4">Privacy & Security</h3>
                    <div className="space-y-4">
                      <button className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="font-medium text-dark-500">Change Password</div>
                        <div className="text-sm text-gray-600">Update your account password</div>
                      </button>
                      
                      <button className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="font-medium text-dark-500">Export Data</div>
                        <div className="text-sm text-gray-600">Download your alert history and settings</div>
                      </button>
                      
                      <button className="w-full text-left p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                        <div className="font-medium text-red-600">Delete Account</div>
                        <div className="text-sm text-red-500">Permanently delete your account and all data</div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
