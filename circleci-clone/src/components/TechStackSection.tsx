'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function TechStackSection() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    function updateSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const technologies = [
    { name: 'Android', icon: 'https://ext.same-assets.com/2176169267/840275654.svg' },
    { name: 'Chatbots', icon: 'https://ext.same-assets.com/2176169267/4092180743.svg' },
    { name: 'Robotics', icon: 'https://ext.same-assets.com/2176169267/3561037935.svg' },
    { name: 'AI', icon: 'https://ext.same-assets.com/2176169267/801332402.svg' },
    { name: 'Mobile', icon: 'https://ext.same-assets.com/2176169267/140579907.svg' },
    { name: 'Autonomous Vehicles', icon: 'https://ext.same-assets.com/2176169267/1132317054.svg' },
    { name: 'Docker', icon: 'https://ext.same-assets.com/2176169267/1937519199.svg' },
    { name: 'Ruby', icon: 'https://ext.same-assets.com/2176169267/2742327822.svg' },
    { name: 'Heroku', icon: 'https://ext.same-assets.com/2176169267/2555040435.svg' },
    { name: 'Image Recognition', icon: 'https://ext.same-assets.com/2176169267/98825745.svg' },
    { name: 'Dynamic Web Apps', icon: 'https://ext.same-assets.com/2176169267/1206392982.svg' },
    { name: 'C++', icon: 'https://ext.same-assets.com/2176169267/1581566948.svg' },
    { name: 'MacOS', icon: 'https://ext.same-assets.com/2176169267/731937817.svg' },
    { name: 'Terraform', icon: 'https://ext.same-assets.com/2176169267/2702779283.svg' },
    { name: 'Wearables', icon: 'https://ext.same-assets.com/2176169267/2744450724.svg' },
    { name: 'Business Intelligence', icon: 'https://ext.same-assets.com/2176169267/3170004912.svg' },
    { name: 'Ansible', icon: 'https://ext.same-assets.com/2176169267/3939565216.svg' },
    { name: 'Python', icon: 'https://ext.same-assets.com/2176169267/2059979464.svg' },
    { name: 'S3', icon: 'https://ext.same-assets.com/2176169267/403100032.svg' },
    { name: 'Cross-platform', icon: 'https://ext.same-assets.com/2176169267/1573002659.svg' },
    { name: 'AR', icon: 'https://ext.same-assets.com/2176169267/4162928580.svg' },
    { name: 'Health Tech', icon: 'https://ext.same-assets.com/2176169267/2328028258.svg' },
    { name: 'PHP', icon: 'https://ext.same-assets.com/2176169267/2306923860.svg' },
    { name: 'HTML', icon: 'https://ext.same-assets.com/2176169267/1729729583.svg' },
    { name: 'Shell', icon: 'https://ext.same-assets.com/2176169267/3141040381.svg' },
    { name: 'AWS', icon: 'https://ext.same-assets.com/2176169267/416511638.svg' },
    { name: 'SageMaker', icon: 'https://ext.same-assets.com/2176169267/3443688056.svg' },
    { name: 'Linux', icon: 'https://ext.same-assets.com/2176169267/3438492834.svg' },
    { name: 'Jupyter Notebook', icon: 'https://ext.same-assets.com/2176169267/2941824238.svg' },
    { name: 'Pulumi', icon: 'https://ext.same-assets.com/2176169267/2326516883.svg' },
    { name: 'Windows', icon: 'https://ext.same-assets.com/2176169267/2262370143.svg' },
    { name: 'Elixer', icon: 'https://ext.same-assets.com/2176169267/3494011385.svg' },
  ]

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Any app, deployed anywhere, at any scale
          </h2>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-8 items-center justify-items-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.3,
                rotate: [0, -5, 5, 0],
                y: -10,
                transition: { duration: 0.4, type: "spring", stiffness: 300 }
              }}
              className="group cursor-pointer relative"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3 + (index % 3),
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 transition-all duration-300 border-2 border-transparent group-hover:border-[#0bd775]/20"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-6 h-6 group-hover:scale-125 transition-all duration-300 group-hover:drop-shadow-sm"
                  />
                </motion.div>

                {/* Enhanced Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  whileHover={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-[#223246] text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none border border-[#0bd775]/20"
                >
                  <div className="font-medium">{tech.name}</div>
                  {/* Tooltip arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#223246]" />
                </motion.div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-[#0bd775] to-blue-500 blur-sm -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`floating-${i}`}
              className="absolute w-2 h-2 bg-[#0bd775] rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, 50, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
