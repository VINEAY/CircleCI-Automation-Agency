'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    {
      title: 'Product',
      hasDropdown: true
    },
    {
      title: 'Solutions',
      hasDropdown: true
    },
    {
      title: 'Resources',
      hasDropdown: true
    },
    {
      title: 'Why CircleCI',
      hasDropdown: true
    },
    {
      title: 'Pricing',
      hasDropdown: false
    }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#223246]/95 backdrop-blur-sm shadow-lg' : 'bg-[#223246]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-[#223246] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-white text-xl font-semibold">CircleCI</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors duration-200">
                    <span>{item.title}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-white hover:text-gray-300 transition-colors duration-200">
              Log in
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0bd775] text-[#223246] px-6 py-2 rounded-md font-semibold hover:bg-[#0ac069] transition-colors duration-200"
            >
              Sign up
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        className="lg:hidden overflow-hidden bg-[#223246]"
      >
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="block w-full text-left text-white hover:text-gray-300 transition-colors duration-200 py-2"
            >
              {item.title}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-600 space-y-4">
            <button className="block w-full text-left text-white hover:text-gray-300 transition-colors duration-200">
              Log in
            </button>
            <button className="w-full bg-[#0bd775] text-[#223246] px-6 py-2 rounded-md font-semibold hover:bg-[#0ac069] transition-colors duration-200">
              Sign up
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
