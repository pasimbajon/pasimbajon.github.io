import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';

export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/SONS OF THE FOREST/SOTF1.jpg"},
        { image: "http://localhost:3000/GAMES/SONS OF THE FOREST/SOTF2.jpg"},
        { image: "http://localhost:3000/GAMES/SONS OF THE FOREST/SOTF3.jpg"},
        { image: "http://localhost:3000/GAMES/SONS OF THE FOREST/SOTF4.jpg"},
        { image: "http://localhost:3000/GAMES/SONS OF THE FOREST/SOTF5.jpg"}
    ];

    return (
    <>
    <div className='Game-showcase'>
        <div className='Game-title'>Sons Of The Forest</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/SONS OF THE FOREST/SOTF_Cover.avif')} alt='img'></img></div>
                <div className='game_desc'>Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator.</div>
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
