import React from 'react'
import GrowthSection from '../components/GrowthSection'
import Navbar from '../components/Navbar'
import AutomationSection from '../components/AutomationSection'
import WorkflowBuilderSection from '../components/WorkflowBuilderSection'
import TeamInboxSection from '../components/TeamInboxSection'
import CTASection from '../components/CTASection'
import FooterSection from '../components/FooterSection'


const Features = () => {
  return (
    <div>
      <Navbar />
      <GrowthSection />
      <WorkflowBuilderSection />
      <AutomationSection />
      <TeamInboxSection />
      <CTASection />
      <FooterSection />
    </div>
  )
}

export default Features
