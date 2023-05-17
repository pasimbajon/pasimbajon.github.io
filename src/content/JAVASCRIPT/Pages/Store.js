import React from 'react'
import Hero from '../Hero';
import Carousel from '../Carousel';
import Grid from '../Grid';
import '../../CSS/Container.css'

export default function Store() {
  return (
    <>
      <div className='Container'>
        <Hero />
        <Carousel />
        <Grid />
      </div>
    </>
  )
}
