import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';

export default function Games() {
    const slides =[
        { image: "../GAMES/ASSASSINS CREED ORIGINS/ACO1.jpg"},
        { image: "../GAMES/ASSASSINS CREED ORIGINS/ACO2.jpg"},
        { image: "../GAMES/ASSASSINS CREED ORIGINS/ACO3.jpg"},
        { image: "../GAMES/ASSASSINS CREED ORIGINS/ACO4.jpg"},
        { image: "../GAMES/ASSASSINS CREED ORIGINS/ACO5.jpg"}
    ];

    return (
    <>
    <div className='Game-showcase'>
        <div className='Game-title'>Assassin's Creed® Origins</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/ASSASSINS CREED ORIGINS/ACO_Cover.jpg')} alt='img'></img></div>
                <div className='game_desc'>ASSASSIN’S CREED® ORIGINS IS A NEW BEGINNING *The Discovery Tour by Assassin’s Creed®: Ancient Egypt is available now as a free update!* Ancient Egypt, a land of majesty and intrigue, is disappearing in a ruthless fight for power.</div>
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
