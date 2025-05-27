'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')

  return (
    <div className="space-y-0">
      {/* CI/CD Experts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              We're the CI/CD experts<br />
              <span className="text-gray-600">(so you don't have to be)</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0bd775] text-[#223246] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0ac069] transition-colors duration-200"
              >
                Start for free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Learn about our plans
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Join 2mil+ devs
            </h2>
            <p className="text-xl text-gray-600">
              And get that green build feeling
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="inline-block bg-[#0bd775] text-[#223246] px-3 py-1 rounded-full text-sm font-semibold">
                  NEW
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Actionable insights from 15 million+ datapoints.
                </h3>
                <p className="text-gray-600">
                  Get the latest reports on CI/CD benefits, industry insights and product launches to your inbox with the CircleCI newsletter.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0bd775] text-[#223246] px-6 py-3 rounded-lg font-semibold hover:bg-[#0ac069] transition-colors duration-200"
              >
                Get the newsletter
              </motion.button>
            </motion.div>

            {/* Right Column - Testimonials */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <blockquote className="text-gray-700">
                  "The technology and people behind CircleCI have empowered our teams to focus on the actual application and product with a lot to add deployment."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full" />
                  <div>
                    <div className="font-semibold text-gray-900">Rob White</div>
                    <div className="text-sm text-gray-600">VP of Technical Operations at CircleCI</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <blockquote className="text-gray-700">
                  "With CircleCI, setup was much faster than I expected and their platform manages the entire CI/CD workflow."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full" />
                  <div>
                    <div className="font-semibold text-gray-900">Jess Anderson</div>
                    <div className="text-sm text-gray-600">Engineering manager at CircleCI</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <blockquote className="text-gray-700">
                  "All of the workflow, and I said 'I love CircleCI' and provides a lot the same exciting thing."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full" />
                  <div>
                    <div className="font-semibold text-gray-900">Ross Proudish</div>
                    <div className="text-sm text-gray-600">Co-founder and CTO at CircleCI</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-16 bg-[#223246]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold text-white">Learn more</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "2024 State of Software Delivery",
                  image: "https://ctf-cci-com.imgix.net/3Y0KE1XAbybtVkPtUnh4Kz/f9d85db1e1315d30ca959950a9f97e0e/home_product-highlight.png?ixlib=rb-3.2.1&w=300&auto=format&fit=max&q=60"
                },
                {
                  title: "CircleCI onboarding toolkit",
                  image: "https://ctf-cci-com.imgix.net/3Y0KE1XAbybtVkPtUnh4Kz/f9d85db1e1315d30ca959950a9f97e0e/home_product-highlight.png?ixlib=rb-3.2.1&w=300&auto=format&fit=max&q=60"
                },
                {
                  title: "CircleCI delivers 664% ROI",
                  image: "https://ctf-cci-com.imgix.net/3Y0KE1XAbybtVkPtUnh4Kz/f9d85db1e1315d30ca959950a9f97e0e/home_product-highlight.png?ixlib=rb-3.2.1&w=300&auto=format&fit=max&q=60"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#223246] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-white">
              &gt;build the future
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0bd775] text-[#223246] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0ac069] transition-colors duration-200"
              >
                Sign up for free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200"
              >
                Watch a demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
