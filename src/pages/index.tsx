import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { FeaturesSection } from '../components/FeaturesSection'
import { ExplainerSection } from '../components/ExplainerSection'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { PricingSection } from '../components/PricingSection'
import { FooterSection } from '../components/FooterSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ExplainerSection />
      <TestimonialsSection />
      <PricingSection />
      <FooterSection />
    </div>
  )
}

