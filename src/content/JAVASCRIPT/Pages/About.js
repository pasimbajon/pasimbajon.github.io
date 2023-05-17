import React from 'react'
import '../../CSS/Container.css'
import '../../CSS/About.css'

export default function About() {
  return (
    <>
      <div className='About-Content'>
        <div className='about'>
          <div className='about-gameon'>
            <div className='about-paragraph'>
              <h1>What is Game-On</h1>
              <p>Game-On sells games. Our mission is to support charity while providing 
              awesome content to customers at great prices. We launched in 2023 with a single two-week 
              Game-On Indie, but we have humbly grown into a store full of games and bundles, a gaming 
              membership service, and more.</p>
            </div>
            <div className='what-img'><img className='logo' src={ require('../../IMAGES/LOGO/arcade-machine.png') } alt='logo'></img></div>
          </div>
          <div className='partners'>
            <h1>We are Partners with</h1>
            <img className='logo' src={ require('../../IMAGES/Partners.png') } alt='logo'></img>
          </div>
        </div>
        
      </div>
    </>
  )
}
