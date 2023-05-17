import React from 'react'
import '../CSS/Grid.css'
import { Link } from 'react-router-dom'

export default function Grid() {
  return (
    <div className='Content'>
        <div className='Grid-Selection'>
            <div className='grid-item1'>
            <Link className='grid-images' to="/discover/destiny_2"><img src={require('../GAMES/DESTINY 2/DESTINY2_Cover.jpg')} alt='img'></img>
              <div className='item-desc'>
                <h2>Destiny 2</h2>
              </div></Link>
            </div>
            <div className='grid-item2'>
              <Link className='grid-images' to="/discover/sons_of_the_forest"><img src={require('../GAMES/SONS OF THE FOREST/SOTF_Cover.avif')} alt='img'></img>
              <div className='item-desc'>
                <h2>Sons Of The Forest</h2>
              </div></Link>
            </div>
            <div className='grid-item3'>
            <Link className='grid-images' to="/discover/ea_sports_fifa_23"><img src={require('../GAMES/EA SPORTS FIFA 23/FIFA_Cover.jpg')} alt='img'></img>
              <div className='item-desc'>
                <h2>EA Sports FIFA 23</h2>
              </div></Link>
            </div>
            <div className='grid-item4'>
            <Link className='grid-images' to="/discover/monster_hunter_rise"><img src={require('../GAMES/MONSTER HUNTER RISE/MHR_Cover.jpg')} alt='img'></img>
              <div className='item-desc'>
                <h2>Monster Hunter Sunbreak</h2>
              </div></Link>
            </div>
            <div className='grid-item5'>
            <Link className='grid-images' to="/discover/rust"><img src={require('../GAMES/RUST/RUST_Cover.jpg')} alt='img'></img>
              <div className='item-desc'>
                <h2>Rust</h2>
              </div></Link>
            </div>
            <div className='grid-item6'>
            <Link className='grid-images' to="/discover/star_wars_jedi_survivor"><img src={require('../GAMES/STAR WARS JEDI SURVIVOR/SWJS_Cover.jpg')} alt='img'></img>
              <div className='item-desc'>
                <h2>STAR WARS Jedi: Survivor™</h2>
              </div></Link>
            </div>
            <div className='grid-item8'>
            <Link className='grid-images' to="/discover/war_thunder"><img src={require('../GAMES/WAR THUNDER/WT_Cover.jpg')} alt='img'></img>
              <div className='item-desc'>
                <h2>War Thunder</h2>
              </div></Link>
              </div>
            <div className='grid-item7'>
            <Link className='grid-images' to="/discover/counter-strike_global_offensive"><img src={require('../GAMES/COUNTER-STRIKE GLOBAL OFFENSIVE/CSGO_Cover.png')} alt='img'></img>
              <div className='item-desc'>
                <h2>Counter-Strike: Global Offensive</h2>
              </div></Link>
              </div>
            <div className='grid-item9'>
            <Link className='grid-images' to="/discover/team_fortress_2"><img src={require('../GAMES/TEAM FORTRESS 2/TF_Cover.jpg')} alt='img'></img>
              <div className='item-desc'>
                <h2>Team Fortress 2</h2>
              </div></Link>
            </div>
        </div>
    </div>
  )
}
