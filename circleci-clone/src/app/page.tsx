'use client'

import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { TrustedBySection } from '@/components/TrustedBySection'
import { ProductHighlight } from '@/components/ProductHighlight'
import { FeaturesSection } from '@/components/FeaturesSection'
import { TechStackSection } from '@/components/TechStackSection'
import { NewsletterSection } from '@/components/NewsletterSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <TrustedBySection />
      <ProductHighlight />
      <FeaturesSection />
      <TechStackSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
