import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';
export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/CALL OF DUTY MODERN WARFARE II/CODMWII1.jpg"},
        { image: "http://localhost:3000/GAMES/CALL OF DUTY MODERN WARFARE II/CODMWII2.jpg"},
        { image: "http://localhost:3000/GAMES/CALL OF DUTY MODERN WARFARE II/CODMWII3.jpg"},
        { image: "http://localhost:3000/GAMES/CALL OF DUTY MODERN WARFARE II/CODMWII4.jpg"},
        { image: "http://localhost:3000/GAMES/CALL OF DUTY MODERN WARFARE II/CODMWII5.jpg"}
    ];

    return (
    <>
    <div className='Game-showcase'>
        <div className='Game-title'>Call of Duty®: Modern Warfare® II</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/CALL OF DUTY MODERN WARFARE II/CODMWII_Cover.jpg')} alt='img'></img></div>
                <div className='game_desc'>Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.</div>
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
