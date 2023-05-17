import React, {useState} from 'react';
import '../CSS/NavBar.css';
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"
import { SearchBar } from './Search/SearchBar';


export default function NavBar() {
    
  return (
    <nav className='navbar'>
        <div className='nav-brand'>
            <Link to="/" className='gameon-logo'>
                <img className='logo' src={ require('../IMAGES/LOGO/arcade-machine.png') } alt='logo'></img>
            </Link>
            <Link to="/" className='gameon-brand'>GAME-ON</Link>
        </div>
        <div className='Search-Bar'>
            <SearchBar />
        </div>
        <div className='navbar-links'>
            <ul>
                <li><Link className='links' to="/">STORE</Link></li>
                <li><Link className='links' to="/discover">DISCOVER</Link></li>
                <li><Link className='links' to="/about">ABOUT</Link></li>
                <li><Link className='links'><img className='cart' src={ require('../IMAGES/ICONS/shopping-cart.png') } alt='cart'></img></Link></li>
            </ul>
        </div>
        <div className='toggle-button'>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
        </div>
    </nav>
  );
}

