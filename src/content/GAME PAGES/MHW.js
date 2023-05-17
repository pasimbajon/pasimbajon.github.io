import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';

export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/MOSNTER HUNTER WORLD/MHW1.jpg"},
        { image: "http://localhost:3000/GAMES/MOSNTER HUNTER WORLD/MHW2.jpg"},
        { image: "http://localhost:3000/GAMES/MOSNTER HUNTER WORLD/MHW3.jpg"},
        { image: "http://localhost:3000/GAMES/MOSNTER HUNTER WORLD/MHW4.jpg"},
        { image: "http://localhost:3000/GAMES/MOSNTER HUNTER WORLD/MHW5.jpg"}
    ];

    return (
    <>
    <div className='Game-showcase'>
        <div className='Game-title'>Monster Hunter: World</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/MOSNTER HUNTER WORLD/MHW_Cover.jpg')} alt='img'></img></div>
                <div className='game_desc'>Welcome to a new world! In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and excitement.</div>
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
