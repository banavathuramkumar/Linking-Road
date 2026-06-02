import React from 'react'
import WorkflowHeroSection from '../components/WorkflowHeroSection'
import SolutionsSection from '../components/SolutionsSection'
import SolutionDeepDive from '../components/SolutionDeepDive'
import CTASection from '../components/CTASection'
import FooterSection from '../components/FooterSection'
import Navbar from '../components/Navbar'

const Solutions = () => {
  return (
    <div>
      <Navbar />
      <WorkflowHeroSection />
      <SolutionsSection />
      <SolutionDeepDive />  
      <CTASection />
      <FooterSection />
    </div>
  )
}

export default Solutions
