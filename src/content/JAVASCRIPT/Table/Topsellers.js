import React from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Table.css';

export default function Topsellers() {
  return (
    <div className='game'>
        <div className='content'>
            <Link to="/discover/age_of_wonders_4" className='GameCover'><img src={require('../../GAMES/AGE OF WONDERS 4/AOW4_Cover.jpg')} alt='img' className='gameimage'></img></Link>
            <div className='GameDesc'>
            <Link to="/discover/age_of_wonders_4" className='Gametitle'>Age of Wonders 4</Link>
            <p>Rule a fantasy realm of your own design! Explore new magical realms in Age of Wonders’ signature blend of 4X strategy and turn-based tactical combat. Control a faction that grows and changes as you expand your empire with each turn!</p>
            </div>
        </div>
        <div className='content'>
            <Link to="/discover/asssassins_creed_origins" className='GameCover'><img src={require('../../GAMES/ASSASSINS CREED ORIGINS/ACO_Cover.jpg')} alt='img' className='gameimage'></img></Link>
            <div className='GameDesc'>
             <Link to="/discover/asssassins_creed_origins" className='Gametitle'>Assassin's Creed® Origins</Link>
            <p>ASSASSIN’S CREED® ORIGINS IS A NEW BEGINNING *The Discovery Tour by Assassin’s Creed®: Ancient Egypt is available now as a free update!* Ancient Egypt, a land of majesty and intrigue, is disappearing in a ruthless fight for power.</p>
            </div>
        </div>
        <div className='content'>
              <Link to="/discover/ea_sports_fifa_23" className='GameCover'><img src={require('../../GAMES/EA SPORTS FIFA 23/FIFA_Cover.jpg')} alt='img' className='gameimage'></img></Link>
              <div className='GameDesc'>
                <Link to="/discover/ea_sports_fifa_23" className='Gametitle'>EA SPORTS™ FIFA 23</Link>
                <p>FIFA 23 brings The World’s Game to the pitch, with HyperMotion2 Technology, men’s and women’s FIFA World Cup™coming during the season, women’s club teams, cross-play features*, and more.</p>
              </div>
            </div>
            <div className='content'>
              <Link to="/discover/hogwarts_legacy" className='GameCover'><img src={require('../../GAMES/HOGWARTS LEGACY/HL_Cover.jpg')} alt='img' className='gameimage'></img></Link>
              <div className='GameDesc'>
                <Link to="/discover/hogwarts_legacy" className='Gametitle'>Hogwarts Legacy</Link>
                <p>Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own adventure in the wizarding world.</p>
              </div>
            </div>
            <div className='content'>
              <Link to="/discover/marvels_guardians_of_the_galaxy" className='GameCover'><img src={require('../../GAMES/MARVELS GUARDIANS OF THE GALAXY/GOTG_Cover.jpg')} alt='img' className='gameimage'></img></Link>
              <div className='GameDesc'>
                <Link to="/discover/marvels_guardians_of_the_galaxy" className='Gametitle'>Marvel's Guardians of the Galaxy</Link>
                <p>Fire up a wild ride across the cosmos with a fresh take on Marvel’s Guardians of the Galaxy. In this action-adventure game, you are Star-Lord leading the unpredictable Guardians from one explosion of chaos to the next. You got this. Probably.</p>
              </div>
            </div>
            <div className='content'>
              <Link to="/discover/monster_hunter_rise" className='GameCover'><img src={require('../../GAMES/MONSTER HUNTER RISE/MHR_Cover.jpg')} alt='img' className='gameimage'></img></Link>
              <div className='GameDesc'>
                <Link to="/discover/monster_hunter_rise" className='Gametitle'>MONSTER HUNTER RISE</Link>
                <p>Rise to the challenge and join the hunt! In Monster Hunter Rise, the latest installment in the award-winning and top-selling Monster Hunter series, you’ll become a hunter, explore brand new maps and use a variety of weapons to take down fearsome monsters as part of an all-new storyline.</p>
              </div>
            </div>
            <div className='content'>
              <Link to="/discover/monster_hunter_world" className='GameCover'><img src={require('../../GAMES/MOSNTER HUNTER WORLD/MHW_Cover.jpg')} alt='img' className='gameimage'></img></Link>
              <div className='GameDesc'>
                <Link to="/discover/monster_hunter_world" className='Gametitle'>Monster Hunter: World</Link>
                <p>Welcome to a new world! In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and excitement.</p>
              </div>
            </div>
            <div className='content'>
              <Link to="/discover/sons_of_the_forest" className='GameCover'><img src={require('../../GAMES/SONS OF THE FOREST/SOTF_Cover.avif')} alt='img' className='gameimage'></img></Link>
              <div className='GameDesc'>
                <Link to="/discover/sons_of_the_forest" className='Gametitle'>Sons Of The Forest</Link>
                <p>Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator.</p>
              </div>
            </div>
            <div className='content'>
              <Link to="/discover/star_wars_jedi_survivor" className='GameCover'><img src={require('../../GAMES/STAR WARS JEDI SURVIVOR/SWJS_Cover.jpg')} alt='img' className='gameimage'></img></Link>
              <div className='GameDesc'>
                <Link to="/discover/star_wars_jedi_survivor" className='Gametitle'>STAR WARS Jedi: Survivor™</Link>
                <p>The story of Cal Kestis continues in STAR WARS Jedi: Survivor™, a galaxy-spanning, third-person, action-adventure game.</p>
              </div>
            </div>
          </div>
  )
}
