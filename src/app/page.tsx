import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import Compare from '@/components/sections/Compare'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import Results from '@/components/sections/Results'
import WhoWeHelp from '@/components/sections/WhoWeHelp'
import Approach from '@/components/sections/Approach'
import FAQ from '@/components/sections/FAQ'
import CTABanner from '@/components/sections/CTABanner'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Compare />
        <Services />
        <HowItWorks />
        <Results />
        <WhoWeHelp />
        <Approach />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
