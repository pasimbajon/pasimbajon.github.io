import React from 'react';
import '../CSS/Game.css';
import ImageSlider from '../JAVASCRIPT/ImageSlider';
import NavBar from '../JAVASCRIPT/NavBar';
import Footer from '../JAVASCRIPT/Footer';

export default function Games() {
    const slides =[
        { image: "http://localhost:3000/GAMES/EA SPORTS FIFA 23/FIFA1.jpg"},
        { image: "http://localhost:3000/GAMES/EA SPORTS FIFA 23/FIFA2.jpg"},
        { image: "http://localhost:3000/GAMES/EA SPORTS FIFA 23/FIFA3.jpg"},
        { image: "http://localhost:3000/GAMES/EA SPORTS FIFA 23/FIFA4.jpg"},
        { image: "http://localhost:3000/GAMES/EA SPORTS FIFA 23/FIFA5.jpg"}
    ];

    return (
    <>
    <NavBar />
    <div className='Game-showcase'>
        <div className='Game-title'>EA SPORTS™ FIFA 23</div>
        <div className='Game-Content'>
            <div className='slideshow-gallery'>
                <ImageSlider slides={slides}/>
            </div>
            <div className='descriptions'>
                <div className='game_cover'><img src={require('../GAMES/EA SPORTS FIFA 23/FIFA_Cover.jpg')} alt='img'></img></div>
                <div className='game_desc'>FIFA 23 brings The World’s Game to the pitch, with HyperMotion2 Technology, men’s and women’s FIFA World Cup™coming during the season, women’s club teams, cross-play features*, and more.</div>
                <div className='Game-Add'>
                    <button className='Game-button'>Add to your wishlist</button>
                    <button className='Game-button'>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}
