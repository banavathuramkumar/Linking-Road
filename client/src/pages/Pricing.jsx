import React from 'react'
import Navbar from '../components/Navbar'
import PricingSection from '../components/PricingSection'
import FAQSection from '../components/FAQSection'
import CTASection from '../components/CTASection'
import FooterSection from '../components/FooterSection'
import ComparePlansTable from '../components/ComparePlansTable'

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <PricingSection />
      <FAQSection />
      <ComparePlansTable />
      <CTASection />
      <FooterSection />
    </div>
  )
}

export default Pricing
