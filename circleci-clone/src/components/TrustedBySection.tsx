'use client'

import { motion } from 'framer-motion'

export function TrustedBySection() {
  const companies = [
    {
      name: 'Meta',
      logo: 'https://ext.same-assets.com/2176169267/3716944837.svg',
      width: 'w-20'
    },
    {
      name: 'Nextdoor',
      logo: 'https://ext.same-assets.com/2176169267/322207032.svg',
      width: 'w-24'
    },
    {
      name: 'Adobe',
      logo: 'https://ext.same-assets.com/2176169267/1967388618.svg',
      width: 'w-20'
    },
    {
      name: 'Okta',
      logo: 'https://ext.same-assets.com/2176169267/3760553615.svg',
      width: 'w-16'
    },
    {
      name: 'Hinge',
      logo: 'https://ext.same-assets.com/2176169267/1565864488.svg',
      width: 'w-20'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <h2 className="text-gray-600 text-lg font-medium">Trusted by</h2>

          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
            {companies.map((company) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: companies.indexOf(company) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className={`${company.width} h-auto opacity-70 hover:opacity-100 transition-opacity duration-300`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
