import React from 'react'
import FAQSection from '../components/FAQSection'
import Navbar from '../components/Navbar'
import CTASection from '../components/CTASection'
import FooterSection from '../components/FooterSection'
import HelpCenterHero from '../components/HelpCenterHero'
import SupportResourcesSection from '../components/SupportResourcesSection'
import ContactSupportSection from '../components/ContactSupportSection'

const FAQs = () => {
  return (
    <div>
      <Navbar />
      <HelpCenterHero />
      <SupportResourcesSection />
      <FAQSection />
      <ContactSupportSection />
      <CTASection />
      <FooterSection />
    </div>
  )
}

export default FAQs
