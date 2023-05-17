import React from 'react'
import NavBar from '../NavBar';
import Hero from '../Hero';
import Footer from '../Footer';
import Carousel from '../Carousel';
import Grid from '../Grid';
import '../../CSS/Container.css'

export default function Store() {
  return (
    <>
      <NavBar />
      <div className='Container'>
        <Hero />
        <Carousel />
        <Grid />
      </div>
      <Footer />
    </>
  )
}
