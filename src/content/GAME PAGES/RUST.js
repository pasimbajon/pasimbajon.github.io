import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';

export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/RUST/RUST1.jpg"},
        { image: "http://localhost:3000/GAMES/RUST/RUST2.jpg"},
        { image: "http://localhost:3000/GAMES/RUST/RUST3.jpg"},
        { image: "http://localhost:3000/GAMES/RUST/RUST4.jpg"},
        { image: "http://localhost:3000/GAMES/RUST/RUST5.jpg"}
    ];

    return (
    <>
    <div className='Game-showcase'>
        <div className='Game-title'>Rust</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/RUST/RUST_Cover.jpg')} alt='img'></img></div>
                <div className='game_desc'>The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.</div>
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
