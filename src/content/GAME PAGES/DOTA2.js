import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';
import NavBar from '../JAVASCRIPT/NavBar';
import Footer from '../JAVASCRIPT/Footer';

export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/DOTA2/DOTA2_1.jpg"},
        { image: "http://localhost:3000/GAMES/DOTA2/DOTA2_2.jpg"},
        { image: "http://localhost:3000/GAMES/DOTA2/DOTA2_3.jpg"},
        { image: "http://localhost:3000/GAMES/DOTA2/DOTA2_4.jpg"},
        { image: "http://localhost:3000/GAMES/DOTA2/DOTA2_5.jpg"}
    ];

    return (
    <>
    <NavBar />
    <div className='Game-showcase'>
        <div className='Game-title'>DOTA 2</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/DOTA 2/DOTA2_Cover.jpg')} alt='img'></img></div>
                <div className='game_desc'>Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.</div>
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
