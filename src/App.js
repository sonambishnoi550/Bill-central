import React from 'react'
import Hero from './components/Hero'
import Companies from './components/CompaniesLogo'
import EnergyPlans from './components/EnergyPlans'
import SimpleSteps from './components/SimpleSteps'
import Comprehensive from './components/Comprehensive'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <EnergyPlans />
      <SimpleSteps />
      <Comprehensive />
      <WhyChoose />
      <Testimonials/>
    </div>
  )
}

export default App
