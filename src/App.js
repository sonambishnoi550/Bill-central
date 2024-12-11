import React from 'react'
import Hero from './components/Hero'
import Companies from './components/CompaniesLogo'
import EnergyPlans from './components/EnergyPlans'
import SimpleSteps from './components/SimpleSteps'
import Comprehensive from './components/Comprehensive'
import WhyChoose from './components/WhyChoose'

const App = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <EnergyPlans />
      <SimpleSteps />
      <Comprehensive />
      <WhyChoose/>
    </div>
  )
}

export default App
