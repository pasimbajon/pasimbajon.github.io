import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';
import NavBar from '../JAVASCRIPT/NavBar';
import Footer from '../JAVASCRIPT/Footer';

export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/COUNTER-STRIKE GLOBAL OFFENSIVE/CSGO1.jpg"},
        { image: "http://localhost:3000/GAMES/COUNTER-STRIKE GLOBAL OFFENSIVE/CSGO2.jpg"},
        { image: "http://localhost:3000/GAMES/COUNTER-STRIKE GLOBAL OFFENSIVE/CSGO3.jpg"},
        { image: "http://localhost:3000/GAMES/COUNTER-STRIKE GLOBAL OFFENSIVE/CSGO4.jpg"},
        { image: "http://localhost:3000/GAMES/COUNTER-STRIKE GLOBAL OFFENSIVE/CSGO5.jpg"}
    ];

    return (
    <>
    <NavBar />
    <div className='Game-showcase'>
        <div className='Game-title'>Counter-Strike: Global Offensive</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/COUNTER-STRIKE GLOBAL OFFENSIVE/CSGO_Cover.png')} alt='img'></img></div>
                <div className='game_desc'>Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).</div>
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
