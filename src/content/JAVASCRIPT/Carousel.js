import React, { Component } from 'react';
import '../CSS/Carousel.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


export default function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <div className='Contain'>
        <div className='Carousel'>
            <h2> Featured </h2>
            <Slider {...settings}>
                <div className='image-item'>
                    <Link to="/discover/dota_2"><img src={require('../GAMES/DOTA 2/DOTA2_Cover.jpg')} alt='img'></img></Link>
                </div>
                <div className='image-item'>
                    <Link to="/discover/apex_legends"><img src={require('../GAMES/APEX LEGENDS/APEX_COVER.jpg')} alt='img'></img></Link>
                </div>
                <div className='image-item'>
                    <Link to="/discover/pubg_battlegrounds"><img src={require('../GAMES/PUBG/PUBG_Cover.png')} alt='img'></img></Link>  
                </div>
                <div className='image-item'>
                    <Link to="/discover/grand_theft_auto_V"><img src={require('../GAMES/GRAND THEFT AUTO V/GTAV_Cover.jpg')} alt='img'></img></Link>    
                </div>
                <div className='image-item'>
                    <Link to="/discover/age_of_wonders_4"><img src={require('../GAMES/AGE OF WONDERS 4/AOW4_Cover.jpg')} alt='img'></img></Link>  
                </div>
                <div className='image-item'>
                    <Link to="/discover/monster_hunter_world"><img src={require('../GAMES/MOSNTER HUNTER WORLD/MHW_Cover.jpg')} alt='img'></img></Link>
                </div>
                <div className='image-item'>
                    <Link to="/discover/marvels_guardians_of_the_galaxy"><img src={require('../GAMES/MARVELS GUARDIANS OF THE GALAXY/GOTG_Cover.jpg')} alt='img'></img></Link>
                </div>
                <div className='image-item'>
                    <Link to="/discover/hogwarts_legacy"><img src={require('../GAMES/HOGWARTS LEGACY/HL_Cover.jpg')} alt='img'></img></Link>
                </div>
                <div className='image-item'>
                    <Link to="/discover/asssassins_creed_origins"><img src={require('../GAMES/ASSASSINS CREED ORIGINS/ACO_Cover.jpg')} alt='img'></img></Link>
                </div>
            </Slider>
        </div>
        </div>
  );
}
