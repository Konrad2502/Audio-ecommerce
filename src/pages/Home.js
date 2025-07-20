import React from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Advert from '../components/Advert'
import InfoBlock from '../components/InfoBlock'
import Footer from '../components/Footer'
import Headphones from './Headphones'

export default function Home() {
  return (
    <div>
        <Hero/>
        <Products/>
        <Advert/>
        <Headphones/>
        <InfoBlock/>
        <Footer/>
    </div>
  )
}
