import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';

export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/STAR WARS JEDI SURVIVOR/SWJS1.jpg"},
        { image: "http://localhost:3000/GAMES/STAR WARS JEDI SURVIVOR/SWJS2.jpg"},
        { image: "http://localhost:3000/GAMES/STAR WARS JEDI SURVIVOR/SWJS3.jpg"},
        { image: "http://localhost:3000/GAMES/STAR WARS JEDI SURVIVOR/SWJS4.jpg"},
        { image: "http://localhost:3000/GAMES/STAR WARS JEDI SURVIVOR/SWJS5.jpg"}
    ];

    return (
    <>
    <div className='Game-showcase'>
        <div className='Game-title'>STAR WARS Jedi: Survivor™</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/STAR WARS JEDI SURVIVOR/SWJS_Cover.jpg')} alt='img'></img></div>
                <div className='game_desc'>The story of Cal Kestis continues in STAR WARS Jedi: Survivor™, a galaxy-spanning, third-person, action-adventure game.</div>
                <div className='Game-Add'>
                    <button className='Game-button'>Add to your wishlist</button>
                    <button className='Game-button'>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
