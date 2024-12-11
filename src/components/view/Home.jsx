import React from 'react'
import Hero from '../home/Hero'
import CompaniesLogo from '../home/CompaniesLogo'
import EnergyPlans from '../home/EnergyPlans'
import SimpleSteps from '../home/SimpleSteps'
import Comprehensive from '../home/Comprehensive'
import WhyChoose from '../home/WhyChoose'
import Testimonials from '../home/Testimonials'

const Home = () => {
  return (
    <div>
          <Hero />
          <CompaniesLogo />
          <EnergyPlans />
          <SimpleSteps />
          <Comprehensive />
          <WhyChoose />
          <Testimonials/>
          
    </div>
  )
}

export default Home
