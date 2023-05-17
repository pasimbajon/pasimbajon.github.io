import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';

export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/MONSTER HUNTER RISE/MHR1.jpg"},
        { image: "http://localhost:3000/GAMES/MONSTER HUNTER RISE/MHR2.jpg"},
        { image: "http://localhost:3000/GAMES/MONSTER HUNTER RISE/MHR3.jpg"},
        { image: "http://localhost:3000/GAMES/MONSTER HUNTER RISE/MHR4.jpg"},
        { image: "http://localhost:3000/GAMES/MONSTER HUNTER RISE/MHR5.jpg"}
    ];

    return (
    <>
    <div className='Game-showcase'>
        <div className='Game-title'>MONSTER HUNTER RISE</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/MONSTER HUNTER RISE/MHR_Cover.jpg')} alt='img'></img></div>
                <div className='game_desc'>Rise to the challenge and join the hunt! In Monster Hunter Rise, the latest installment in the award-winning and top-selling Monster Hunter series, you’ll become a hunter, explore brand new maps and use a variety of weapons to take down fearsome monsters as part of an all-new storyline.</div>
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
