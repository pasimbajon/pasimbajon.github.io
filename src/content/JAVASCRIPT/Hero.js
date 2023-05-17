import React from 'react'
import '../CSS/Hero.css'

export default function Hero() {
  return (
    <div className='Hero-Section'>
        <div className='Hero-Image'>
            <img src={ require('../IMAGES/HERO/hero-image.jpg') } alt='hero-Images' className='heroimage'></img>
            <div className='Hero-Text'>
              <p className='herotext'>LET'S <br></br><span id='game'>GAME</span>-<span id='on'>ON</span></p>
            </div>
        </div>
        
        
    </div>
  )
}
