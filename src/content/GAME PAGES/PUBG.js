import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';

export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/PUBG/PUBG1.jpg"},
        { image: "http://localhost:3000/GAMES/PUBG/PUBG2.jpg"},
        { image: "http://localhost:3000/GAMES/PUBG/PUBG3.jpg"},
        { image: "http://localhost:3000/GAMES/PUBG/PUBG4.jpg"},
        { image: "http://localhost:3000/GAMES/PUBG/PUBG5.jpg"}
    ];

    return (
    <>
    <div className='Game-showcase'>
        <div className='Game-title'>PUBG: BATTLEGROUNDS</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/PUBG/PUBG_Cover.png')} alt='img'></img></div>
                <div className='game_desc'>Play PUBG: BATTLEGROUNDS for free. Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds. Squad up and join the Battlegrounds for the original Battle Royale experience that only PUBG: BATTLEGROUNDS can offer.</div>
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
