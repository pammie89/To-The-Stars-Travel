import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import PricingCards from '../components/Pricing'
import NavBar from '../components/NavBar'

const Pricing = () => {
  return (
    <div>
        <NavBar />
        <HeroImage heading='PRICING' text='Choose your trip' />
        <PricingCards />
        <Footer />
    </div>
  )
}

export default Pricing