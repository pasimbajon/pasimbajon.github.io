import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';


export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/GRAND THEFT AUTO V/GTAV1.jpg"},
        { image: "http://localhost:3000/GAMES/GRAND THEFT AUTO V/GTAV2.jpg"},
        { image: "http://localhost:3000/GAMES/GRAND THEFT AUTO V/GTAV3.jpg"},
        { image: "http://localhost:3000/GAMES/GRAND THEFT AUTO V/GTAV4.jpg"},
        { image: "http://localhost:3000/GAMES/GRAND THEFT AUTO V/GTAV5.jpg"}
    ];

    return (
    <>
    <div className='Game-showcase'>
        <div className='Game-title'>Grand Theft Auto V</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/GRAND THEFT AUTO V/GTAV_Cover.jpg')} alt='img'></img></div>
                <div className='game_desc'>Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.</div>
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
