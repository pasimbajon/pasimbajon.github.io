import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';
import NavBar from '../JAVASCRIPT/NavBar';
import Footer from '../JAVASCRIPT/Footer';

export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/HOGWARTS LEGACY/HL1.jpg"},
        { image: "http://localhost:3000/GAMES/HOGWARTS LEGACY/HL2.jpg"},
        { image: "http://localhost:3000/GAMES/HOGWARTS LEGACY/HL3.jpg"},
        { image: "http://localhost:3000/GAMES/HOGWARTS LEGACY/HL4.jpg"},
        { image: "http://localhost:3000/GAMES/HOGWARTS LEGACY/HL5.jpg"}
    ];

    return (
    <>
    <NavBar />
    <div className='Game-showcase'>
        <div className='Game-title'>Hogwarts Legacy</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/HOGWARTS LEGACY/HL_Cover.jpg')} alt='img'></img></div>
                <div className='game_desc'>Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own adventure in the wizarding world.</div>
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
