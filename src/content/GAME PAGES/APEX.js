import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';
import NavBar from '../JAVASCRIPT/NavBar';
import Footer from '../JAVASCRIPT/Footer';

export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/APEX LEGENDS/APEX1.jpg"},
        { image: "http://localhost:3000/GAMES/APEX LEGENDS/APEX2.jpg"},
        { image: "http://localhost:3000/GAMES/APEX LEGENDS/APEX3.jpg"},
        { image: "http://localhost:3000/GAMES/APEX LEGENDS/APEX4.jpg"},
        { image: "http://localhost:3000/GAMES/APEX LEGENDS/APEX5.jpg"}
    ];

    return (
    <>
    <NavBar />
    <div className='Game-showcase'>
        <div className='Game-title'>Apex Legends™</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/APEX LEGENDS/APEX_COVER.jpg')} alt='img'></img></div>
                <div className='game_desc'>Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.</div>
                <div className='Game-Add'>
                    <button className='Game-button'>Add to your wishlist</button>
                    <button className='Game-button'>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}
