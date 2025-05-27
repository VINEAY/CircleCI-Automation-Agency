'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

interface Section {
  id: string
  label: string
}

const sections: Section[] = [
  { id: 'hero', label: 'Home' },
  { id: 'trusted-by', label: 'Trusted By' },
  { id: 'product', label: 'Product' },
  { id: 'features', label: 'Features' },
  { id: 'tech-stack', label: 'Technology' },
  { id: 'newsletter', label: 'Community' }
]

export function SmoothScrollNav() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling past hero
      setIsVisible(window.scrollY > 500)

      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
        offset: document.getElementById(section.id)?.offsetTop || 0
      }))

      const currentSection = sectionElements.find((section, index) => {
        const nextSection = sectionElements[index + 1]
        const scrollY = window.scrollY + 100 // Offset for header

        return scrollY >= section.offset &&
               (!nextSection || scrollY < nextSection.offset)
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* Section Navigation Dots */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3"
          >
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group relative block"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-[#0bd775] border-[#0bd775] scale-125'
                      : 'bg-transparent border-gray-400 hover:border-[#0bd775]'
                  }`}
                />

                {/* Tooltip */}
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-[#223246] text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                    {section.label}
                  </div>
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-[#223246] border-y-4 border-y-transparent" />
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 bg-[#0bd775] text-[#223246] p-3 rounded-full shadow-lg hover:bg-[#0ac069] transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

// Hook for smooth scrolling
export function useSmoothScroll() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return { scrollToSection }
}
