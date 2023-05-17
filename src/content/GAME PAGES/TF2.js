import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';


export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/TEAM FORTRESS 2/TF1.jpg"},
        { image: "http://localhost:3000/GAMES/TEAM FORTRESS 2/TF2.jpg"},
        { image: "http://localhost:3000/GAMES/TEAM FORTRESS 2/TF3.jpg"},
        { image: "http://localhost:3000/GAMES/TEAM FORTRESS 2/TF4.jpg"},
        { image: "http://localhost:3000/GAMES/TEAM FORTRESS 2/TF5.jpg"}
    ];

    return (
    <>
    <div className='Game-showcase'>
        <div className='Game-title'>Team Fortress 2</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/TEAM FORTRESS 2/TF_Cover.jpg')} alt='img'></img></div>
                <div className='game_desc'>Nine distinct classes provide a broad range of tactical abilities and personalities. Constantly updated with new game modes, maps, equipment and, most importantly, hats!</div>
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
