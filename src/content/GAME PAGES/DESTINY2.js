import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';
import NavBar from '../JAVASCRIPT/NavBar';
import Footer from '../JAVASCRIPT/Footer';

export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/DESTINY 2/DESTINY2_1.jpg"},
        { image: "http://localhost:3000/GAMES/DESTINY 2/DESTINY2_2.jpg"},
        { image: "http://localhost:3000/GAMES/DESTINY 2/DESTINY2_3.jpg"},
        { image: "http://localhost:3000/GAMES/DESTINY 2/DESTINY2_4.jpg"},
        { image: "http://localhost:3000/GAMES/DESTINY 2/DESTINY2_5.jpg"}
    ];

    return (
    <>
    <NavBar />
    <div className='Game-showcase'>
        <div className='Game-title'>Destiny 2</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/DESTINY 2/DESTINY2_Cover.jpg')} alt='img'></img></div>
                <div className='game_desc'>Destiny 2 is an action MMO with a single evolving world that you and your friends can join anytime, anywhere, absolutely free.</div>
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
