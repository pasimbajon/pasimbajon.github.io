import React from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Table.css';

export default function Mostplayed() {
  return (
    <div className='game'>
        <div className='content'>
            <Link to="/discover/counter-strike_global_offensive" className='GameCover'><img src={require('../../GAMES/COUNTER-STRIKE GLOBAL OFFENSIVE/CSGO_Cover.png')} alt='img' className='gameimage'></img></Link>
            <div className='GameDesc'>
            <Link to="/discover/counter-strike_global_offensive" className='Gametitle'>Counter-Strike: Global Offensive</Link>
            <p>Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).</p>
            </div>
        </div>
        <div className='content'>
            <Link to="/discover/dota_2" className='GameCover'><img src={require('../../GAMES/DOTA 2/DOTA2_Cover.jpg')} alt='img' className='gameimage'></img></Link>
            <div className='GameDesc'>
             <Link to="/discover/dota_2" className='Gametitle'>DOTA 2</Link>
            <p>Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes.
                And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. 
                With regular updates that ensure a constant evolution of gameplay, features, and heroes, 
                Dota 2 has taken on a life of its own.</p>
            </div>
        </div>
        <div className='content'>
              <Link to="/discover/apex_legends" className='GameCover'><img src={require('../../GAMES/APEX LEGENDS/APEX_COVER.jpg')} alt='img' className='gameimage'></img></Link>
              <div className='GameDesc'>
                <Link to="/discover/apex_legends" className='Gametitle'>Apex Legends™</Link>
                <p>Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.</p>
              </div>
            </div>
            <div className='content'>
              <Link to="/discover/pubg_battlegrounds" className='GameCover'><img src={require('../../GAMES/PUBG/PUBG_Cover.png')} alt='img' className='gameimage'></img></Link>
              <div className='GameDesc'>
                <Link to="/discover/pubg_battlegrounds" className='Gametitle'>PUBG: BATTLEGROUNDS</Link>
                <p>Play PUBG: BATTLEGROUNDS for free. Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds. Squad up and join the Battlegrounds for the original Battle Royale experience that only PUBG: BATTLEGROUNDS can offer.</p>
              </div>
            </div>
            <div className='content'>
              <Link to="/discover/team_fortress_2" className='GameCover'><img src={require('../../GAMES/TEAM FORTRESS 2/TF_Cover.jpg')} alt='img' className='gameimage'></img></Link>
              <div className='GameDesc'>
                <Link to="/discover/team_fortress_2" className='Gametitle'>Team Fortress 2</Link>
                <p>Nine distinct classes provide a broad range of tactical abilities and personalities. Constantly updated with new game modes, maps, equipment and, most importantly, hats!</p>
              </div>
            </div>
            <div className='content'>
              <Link to="/discover/rust" className='GameCover'><img src={require('../../GAMES/RUST/RUST_Cover.jpg')} alt='img' className='gameimage'></img></Link>
              <div className='GameDesc'>
                <Link to="/discover/rust" className='Gametitle'>Rust</Link>
                <p>The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.</p>
              </div>
            </div>
            <div className='content'>
              <Link to="/discover/grand_theft_auto_V" className='GameCover'><img src={require('../../GAMES/GRAND THEFT AUTO V/GTAV_Cover.jpg')} alt='img' className='gameimage'></img></Link>
              <div className='GameDesc'>
                <Link to="/discover/grand_theft_auto_V" className='Gametitle'>Grand Theft Auto V</Link>
                <p>Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.</p>
              </div>
            </div>
            <div className='content'>
              <Link to="/discover/call_of_duty_modern_warfare_II" className='GameCover'><img src={require('../../GAMES/CALL OF DUTY MODERN WARFARE II/CODMWII_Cover.jpg')} alt='img' className='gameimage'></img></Link>
              <div className='GameDesc'>
                <Link to="/discover/call_of_duty_modern_warfare_II" className='Gametitle'>Call of Duty®: Modern Warfare® II</Link>
                <p>Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.</p>
              </div>
            </div>
            <div className='content'>
              <Link to="/discover/destiny_2" className='GameCover'><img src={require('../../GAMES/DESTINY 2/DESTINY2_Cover.jpg')} alt='img' className='gameimage'></img></Link>
              <div className='GameDesc'>
                <Link to="/discover/destiny_2" className='Gametitle'>Destiny 2</Link>
                <p>Destiny 2 is an action MMO with a single evolving world that you and your friends can join anytime, anywhere, absolutely free.</p>
              </div>
            </div>
          </div>
  )
}
