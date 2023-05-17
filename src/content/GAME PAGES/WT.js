import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';
import NavBar from '../JAVASCRIPT/NavBar';
import Footer from '../JAVASCRIPT/Footer';

export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/WAR THUNDER/WT1.jpg"},
        { image: "http://localhost:3000/GAMES/WAR THUNDER/WT2.jpg"},
        { image: "http://localhost:3000/GAMES/WAR THUNDER/WT3.jpg"},
        { image: "http://localhost:3000/GAMES/WAR THUNDER/WT4.jpg"},
        { image: "http://localhost:3000/GAMES/WAR THUNDER/WT5.jpg"}
    ];

    return (
    <>
    <NavBar />
    <div className='Game-showcase'>
        <div className='Game-title'>War Thunder</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/WAR THUNDER/WT_Cover.jpg')} alt='img'></img></div>
                <div className='game_desc'>War Thunder is the most comprehensive free-to-play, cross-platform, MMO military game dedicated to aviation, armoured vehicles, and naval craft, from the early 20th century to the most advanced modern combat units. Join now and take part in major battles on land, in the air, and at sea.</div>
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
