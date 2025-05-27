'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        "Features",
        "Execution environments",
        "Build images",
        "Build optimization",
        "Auto-scaling",
        "Integrations",
        "Documentation",
        "Premium support"
      ]
    },
    {
      title: "Solutions",
      links: [
        "Developers",
        "Platform engineers",
        "Security engineers",
        "Engineering managers",
        "Business leaders",
        "Enterprise",
        "SMB",
        "Startups"
      ]
    },
    {
      title: "Resources",
      links: [
        "Support portal",
        "Customer stories",
        "Reports & guides",
        "Podcast",
        "Blog",
        "Topics",
        "Changelog",
        "Events"
      ]
    },
    {
      title: "Pricing",
      links: [
        "Free plan",
        "Performance plan",
        "Scale plan",
        "Self-hosted"
      ]
    },
    {
      title: "Company",
      links: [
        "About us",
        "Careers",
        "Partners",
        "Newsroom",
        "Contact us",
        "Legal",
        "Privacy",
        "Security"
      ]
    }
  ]

  const socialIcons = [
    { name: 'Twitter', icon: '𝕏' },
    { name: 'LinkedIn', icon: 'in' },
    { name: 'GitHub', icon: 'gh' },
    { name: 'YouTube', icon: 'yt' },
    { name: 'Discord', icon: 'dc' }
  ]

  return (
    <footer className="bg-[#223246] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Logo Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#223246] rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                </div>
                <span className="text-white text-xl font-semibold">CircleCI</span>
              </motion.div>

              <p className="text-gray-400 text-sm">
                The world's #1 CI/CD platform for building, testing, and deploying software.
              </p>

              <div className="flex space-x-4">
                {socialIcons.map((social) => (
                  <motion.a
                    key={social.name}
                    href={`#${social.name.toLowerCase()}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-xs font-bold hover:bg-[#0bd775] hover:text-[#223246] transition-colors duration-200"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="font-semibold text-white">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <motion.a
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-600 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2024 Circle Internet Services, Inc. All rights reserved.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </div>

        {/* Language Selector */}
        <div className="border-t border-gray-600 py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 text-sm text-gray-400"
          >
            <span className="text-white">English</span>
            <a href="/de" className="hover:text-white transition-colors duration-200">Deutsch</a>
            <a href="/es" className="hover:text-white transition-colors duration-200">Español</a>
            <a href="/ja" className="hover:text-white transition-colors duration-200">日本語</a>
            <a href="/ko" className="hover:text-white transition-colors duration-200">한국어</a>
            <a href="/ru" className="hover:text-white transition-colors duration-200">Русский</a>
            <a href="/zh" className="hover:text-white transition-colors duration-200">中文</a>
          </motion.div>
        </div>
      </div>

      {/* Floating Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </footer>
  )
}
