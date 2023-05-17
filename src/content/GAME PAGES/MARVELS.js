import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';
import NavBar from '../JAVASCRIPT/NavBar';
import Footer from '../JAVASCRIPT/Footer';

export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/MARVELS GUARDIANS OF THE GALAXY/GOTG1.jpg"},
        { image: "http://localhost:3000/GAMES/MARVELS GUARDIANS OF THE GALAXY/GOTG2.jpg"},
        { image: "http://localhost:3000/GAMES/MARVELS GUARDIANS OF THE GALAXY/GOTG3.jpg"},
        { image: "http://localhost:3000/GAMES/MARVELS GUARDIANS OF THE GALAXY/GOTG4.jpg"},
        { image: "http://localhost:3000/GAMES/MARVELS GUARDIANS OF THE GALAXY/GOTG5.jpg"}
    ];

    return (
    <>
    <NavBar />
    <div className='Game-showcase'>
        <div className='Game-title'>Marvel's Guardians of the Galaxy</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/MARVELS GUARDIANS OF THE GALAXY/GOTG_Cover.jpg')} alt='img'></img></div>
                <div className='game_desc'>Fire up a wild ride across the cosmos with a fresh take on Marvel’s Guardians of the Galaxy. In this action-adventure game, you are Star-Lord leading the unpredictable Guardians from one explosion of chaos to the next. You got this. Probably.</div>
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
