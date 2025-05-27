'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function ProductHighlight() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            style={{ y, opacity }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://ctf-cci-com.imgix.net/3Y0KE1XAbybtVkPtUnh4Kz/f9d85db1e1315d30ca959950a9f97e0e/home_product-highlight.png?ixlib=rb-3.2.1&w=2000&auto=format&fit=max&q=60"
                alt="CircleCI Product Dashboard"
                className="w-full h-auto rounded-lg shadow-2xl"
              />

              {/* Floating ecosystem icon */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
              >
                <img
                  src="https://ext.same-assets.com/2176169267/3927218253.svg"
                  alt="Ecosystem"
                  className="w-8 h-8"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              With CircleCI, you can capture every change.
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Focus on your code, and beyond. Trigger automatic tests whenever anything in your ecosystem changes: libraries, images, even LLMs.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0bd775] text-[#223246] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0ac069] transition-colors duration-200"
            >
              Explore the product
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
