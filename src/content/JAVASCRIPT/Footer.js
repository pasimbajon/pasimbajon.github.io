import React from 'react';
import { Link } from "react-router-dom";
import '../CSS/Footer.css';

export default function Footer() {
  return (
    <>
    <div className='Footer'>
      <div className='Footer-Content'>
        <div className='Logo-Brand'>
            <Link className='footer-logo'>
              <img className='logo' to="/" src={ require('../IMAGES/LOGO/arcade-machine.png') } alt='logo'></img>
            </Link>
            <Link className='gameon-brand' to="/">GAME-ON</Link>
            
        </div>
        <div className='Trending'>
          <h3>Trending</h3>
          <div className='game-links'>
            <Link to="/discover/counter-strike_global_offensive" className='link'>Counter-Strike: Global Offensive</Link>
            <Link to="/discover/dota_2" className='link'>DOTA 2</Link>
            <Link to="/discover/apex_legends" className='link'>Apex Legends</Link>
            <Link to="/discover/pubg_battlegrounds" className='link'>PUBG: BATTLEGROUNDS</Link>
            <Link to="/discover/grand_theft_auto_V" className='link'>Grand Theft Auto V</Link>
            <Link to="/discover/rust" className='link'>Rust</Link>
            <Link to="/discover/war_thunder" className='link'>War Thunder</Link>
            <Link to="/discover/team_fortress_2" className='link'>Team Fortress 2</Link>
          </div>
        </div>
        <div className='Contacts'>
          <div className='contact-icons'>
            <img className='logo' src={ require('../IMAGES/ICONS/facebook.png') } alt='logo'></img>
            <img className='logo' src={ require('../IMAGES/ICONS/instagram.png') } alt='logo'></img>
            <img className='logo' src={ require('../IMAGES/ICONS/twitter.png') } alt='logo'></img>
          </div>
        </div>
        <div>
          <p>© Game-On All rights reserved. All trademarks and registered trademarks are the property of their respective owners.</p>
          <p>Use of this Web site constitutes acceptance of the Terms and Conditions and Privacy policy. All copyrights, trade marks, service marks belong to the corresponding owners.</p>
        </div>
      </div>
    </div>
    </>
  )
}
