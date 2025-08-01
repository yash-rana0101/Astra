'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Shield, Check, AlertCircle } from 'lucide-react'

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    emergencyContact: '',
    emergencyPhone: '',
    age: '',
    location: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
      if (!formData.email.trim()) newErrors.email = 'Email is required'
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format'
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
      if (!formData.age.trim()) newErrors.age = 'Age is required'
      else if (parseInt(formData.age) < 13) newErrors.age = 'Must be at least 13 years old'
    }

    if (step === 2) {
      if (!formData.password.trim()) newErrors.password = 'Password is required'
      else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
    }

    if (step === 3) {
      if (!formData.emergencyContact.trim()) newErrors.emergencyContact = 'Emergency contact name is required'
      if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = 'Emergency contact phone is required'
      if (!formData.location.trim()) newErrors.location = 'Location is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      // Handle form submission
      console.log('Form submitted:', formData)
      // Redirect to dashboard or success page
    }
  }

  const steps = [
    { number: 1, title: 'Personal Info', description: 'Basic information about you' },
    { number: 2, title: 'Security', description: 'Set up your secure password' },
    { number: 3, title: 'Emergency Contacts', description: 'Add your trusted guardians' },
    { number: 4, title: 'Complete', description: 'Finish your setup' }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-dark-500 via-primary-600 to-accent-500">
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step) => (
                <div key={step.number} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step.number 
                      ? 'bg-secondary-500 text-white' 
                      : 'bg-white/20 text-white/60'
                  }`}>
                    {currentStep > step.number ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  {step.number < steps.length && (
                    <div className={`w-16 h-1 mx-2 ${
                      currentStep > step.number ? 'bg-secondary-500' : 'bg-white/20'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-white text-xl font-semibold">
                {steps[currentStep - 1]?.title}
              </h2>
              <p className="text-white/80 text-sm">
                {steps[currentStep - 1]?.description}
              </p>
            </div>
          </div>

          {/* Form Card */}
          <motion.div
            className="glass-effect p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Join Astra</h1>
              <p className="text-white/80">Create your safety account in just a few steps</p>
            </div>

            <form className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-secondary-400"
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p className="text-red-400 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-secondary-400"
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p className="text-red-400 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-secondary-400"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-secondary-400"
                        placeholder="+1 (555) 123-4567"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Age *
                      </label>
                      <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-secondary-400"
                        placeholder="18"
                        min="13"
                      />
                      {errors.age && (
                        <p className="text-red-400 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.age}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Security */}
              {currentStep === 2 && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-secondary-400"
                        placeholder="Create a strong password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-secondary-400"
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>

                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="text-white font-medium mb-2">Password Requirements:</h4>
                    <ul className="text-white/80 text-sm space-y-1">
                      <li className="flex items-center">
                        <Check className={`w-4 h-4 mr-2 ${formData.password.length >= 8 ? 'text-green-400' : 'text-white/40'}`} />
                        At least 8 characters
                      </li>
                      <li className="flex items-center">
                        <Check className={`w-4 h-4 mr-2 ${/[A-Z]/.test(formData.password) ? 'text-green-400' : 'text-white/40'}`} />
                        One uppercase letter
                      </li>
                      <li className="flex items-center">
                        <Check className={`w-4 h-4 mr-2 ${/[0-9]/.test(formData.password) ? 'text-green-400' : 'text-white/40'}`} />
                        One number
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Emergency Contacts */}
              {currentStep === 3 && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Emergency Contact Name *
                    </label>
                    <input
                      type="text"
                      value={formData.emergencyContact}
                      onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-secondary-400"
                      placeholder="e.g., Mom, Dad, Best Friend"
                    />
                    {errors.emergencyContact && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.emergencyContact}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Emergency Contact Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) => setFormData({...formData, emergencyPhone: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-secondary-400"
                      placeholder="+1 (555) 987-6543"
                    />
                    {errors.emergencyPhone && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.emergencyPhone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Your Location/City *
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-secondary-400"
                      placeholder="e.g., San Francisco, CA"
                    />
                    {errors.location && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.location}
                      </p>
                    )}
                  </div>

                  <div className="bg-blue-500/20 p-4 rounded-lg">
                    <p className="text-white/90 text-sm">
                      <strong>Note:</strong> You can add more emergency contacts later in your dashboard. 
                      This person will be notified immediately when you trigger an alert.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Complete */}
              {currentStep === 4 && (
                <motion.div
                  className="text-center space-y-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Welcome to Astra, {formData.firstName}!
                    </h3>
                    <p className="text-white/80">
                      Your account has been created successfully. You&apos;re now protected by our AI-powered safety system.
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-left">
                    <h4 className="text-white font-medium mb-3">Next Steps:</h4>
                    <ul className="text-white/80 space-y-2">
                      <li className="flex items-start">
                        <span className="text-secondary-400 mr-2">1.</span>
                        Set up your voice commands in the dashboard
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary-400 mr-2">2.</span>
                        Add more emergency contacts
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary-400 mr-2">3.</span>
                        Test your alert system with a practice run
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Form Actions */}
              <div className="flex justify-between pt-6">
                {currentStep > 1 && currentStep < 4 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="px-6 py-3 text-white border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Back
                  </button>
                )}
                
                {currentStep < 3 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="ml-auto bg-secondary-500 text-white px-8 py-3 rounded-lg hover:bg-secondary-600 transition-colors font-medium"
                  >
                    Next
                  </button>
                )}
                
                {currentStep === 3 && (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="ml-auto bg-secondary-500 text-white px-8 py-3 rounded-lg hover:bg-secondary-600 transition-colors font-medium"
                  >
                    Create Account
                  </button>
                )}
                
                {currentStep === 4 && (
                  <Link
                    href="/dashboard"
                    className="mx-auto bg-secondary-500 text-white px-8 py-3 rounded-lg hover:bg-secondary-600 transition-colors font-medium inline-block"
                  >
                    Go to Dashboard
                  </Link>
                )}
              </div>
            </form>

            {currentStep < 4 && (
              <div className="text-center mt-6">
                <p className="text-white/80">
                  Already have an account?{' '}
                  <Link href="/dashboard" className="text-secondary-400 hover:text-secondary-300 font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
