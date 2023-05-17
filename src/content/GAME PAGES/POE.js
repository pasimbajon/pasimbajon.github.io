import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';

export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/PATH OF EXILE/POE1.jpg"},
        { image: "http://localhost:3000/GAMES/PATH OF EXILE/POE2.jpg"},
        { image: "http://localhost:3000/GAMES/PATH OF EXILE/POE3.jpg"},
        { image: "http://localhost:3000/GAMES/PATH OF EXILE/POE4.jpg"},
        { image: "http://localhost:3000/GAMES/PATH OF EXILE/POE5.jpg"}
    ];

    return (
    <>
    <div className='Game-showcase'>
        <div className='Game-title'>Path of Exile</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/PATH OF EXILE/POE_Cover.jpg')} alt='img'></img></div>
                <div className='game_desc'>You are an Exile, struggling to survive on the dark continent of Wraeclast, as you fight to earn power that will allow you to exact your revenge against those who wronged you. Created by hardcore gamers, Path of Exile is an online Action RPG set in a dark fantasy world.</div>
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
