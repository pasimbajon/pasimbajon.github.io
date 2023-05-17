import React from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Table.css';
import Mostplayed from './Mostplayed';
import Topsellers from './Topsellers';

export default function Table() {
  return (
    <>
    <div className='Tables'>
        <div className='table-bar'>
          <Link to='/discover/mostplayed' className='title'>Most Played</Link>
          <Link to='/discover/topsellers' className='title'>Top Seller</Link>
        </div>
        <div className='table-content'>
          <div>
            <Mostplayed />
          </div>
          <div>
            <Topsellers />
          </div>
        </div>
    </div>
    </>
  )
}
