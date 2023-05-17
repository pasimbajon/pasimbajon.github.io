import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';

export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/AGE OF WONDERS 4/AOW4_1.jpg"},
        { image: "http://localhost:3000/GAMES/AGE OF WONDERS 4/AOW4_2.jpg"},
        { image: "http://localhost:3000/GAMES/AGE OF WONDERS 4/AOW4_3.jpg"},
        { image: "http://localhost:3000/GAMES/AGE OF WONDERS 4/AOW4_4.jpg"},
        { image: "http://localhost:3000/GAMES/AGE OF WONDERS 4/AOW4_5.jpg"}
    ];

    return (
    <>
    <div className='Game-showcase'>
        <div className='Game-title'>Age of Wonders 4</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/AGE OF WONDERS 4/AOW4_Cover.jpg')} alt='img'></img></div>
                <div className='game_desc'>Rule a fantasy realm of your own design! Explore new magical realms in Age of Wonders’ signature blend of 4X strategy and turn-based tactical combat. Control a faction that grows and changes as you expand your empire with each turn!</div>
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
