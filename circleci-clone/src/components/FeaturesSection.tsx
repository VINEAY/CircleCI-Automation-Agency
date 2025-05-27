'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function FeaturesSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100])

  const features = [
    {
      title: "Automated testing for every development challenge",
      description: "Validate each part of a git branch and move them with confidence and give git speed secondly 7 minutes.",
      image: "https://ctf-cci-com.imgix.net/3Y0KE1XAbybtVkPtUnh4Kz/f9d85db1e1315d30ca959950a9f97e0e/home_product-highlight.png?ixlib=rb-3.2.1&w=2000&auto=format&fit=max&q=60",
      reversed: false,
      bgColor: "bg-[#223246]",
      textColor: "text-white"
    },
    {
      title: "Fast and visibility from control to production",
      description: "Programmatically analyzing millions takes time and this and effort. Or perhaps your CI/CD dependencies, your fast for great gain secondly 7 minutes.",
      image: "https://ctf-cci-com.imgix.net/3Y0KE1XAbybtVkPtUnh4Kz/f9d85db1e1315d30ca959950a9f97e0e/home_product-highlight.png?ixlib=rb-3.2.1&w=2000&auto=format&fit=max&q=60",
      reversed: true,
      bgColor: "bg-white",
      textColor: "text-gray-900"
    },
    {
      title: "Intelligent triggers for your CI/CD change alert",
      description: "Respond automatically to changes in your application environment, 2x faster you can rely your team with high confidence and make sure building.",
      image: "https://ctf-cci-com.imgix.net/3Y0KE1XAbybtVkPtUnh4Kz/f9d85db1e1315d30ca959950a9f97e0e/home_product-highlight.png?ixlib=rb-3.2.1&w=2000&auto=format&fit=max&q=60",
      reversed: false,
      bgColor: "bg-blue-600",
      textColor: "text-white"
    }
  ]

  return (
    <div ref={ref} className="space-y-0">
      {features.map((feature, index) => (
        <section key={feature.title} className={`py-20 ${feature.bgColor} relative overflow-hidden`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${feature.reversed ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: feature.reversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`space-y-6 ${feature.reversed ? 'lg:col-start-2' : ''}`}
              >
                <h2 className={`text-4xl lg:text-5xl font-bold ${feature.textColor} leading-tight`}>
                  {feature.title}
                </h2>

                <p className={`text-xl leading-relaxed ${feature.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#0bd775] text-[#223246] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0ac069] transition-colors duration-200"
                >
                  Learn more
                </motion.button>
              </motion.div>

              {/* Image */}
              <motion.div
                style={{ y: index % 2 === 0 ? y1 : y2 }}
                initial={{ opacity: 0, x: feature.reversed ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={`relative ${feature.reversed ? 'lg:col-start-1' : ''}`}
              >
                <div className="relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />

                  {/* Floating elements */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-6 -right-6 w-12 h-12 bg-[#0bd775] rounded-full flex items-center justify-center shadow-lg"
                  >
                    <svg className="w-6 h-6 text-[#223246]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
