import './App.css';
import { Route, Routes} from "react-router-dom";
import Store from './content/JAVASCRIPT/Pages/Store';
import Discover from './content/JAVASCRIPT/Pages/Discover';
import About from './content/JAVASCRIPT/Pages/About';
import ACO from './content/GAME PAGES/ACO';
import AOW4 from './content/GAME PAGES/AOW4';
import APEX from './content/GAME PAGES/APEX';
import CODMWII from './content/GAME PAGES/CODMWII';
import CSGO from './content/GAME PAGES/CSGO';
import DESTINY2 from './content/GAME PAGES/DESTINY2';
import DOTA2 from './content/GAME PAGES/DOTA2';
import FIFA23 from './content/GAME PAGES/FIFA23';
import GTAV from './content/GAME PAGES/GTAV';
import HG from './content/GAME PAGES/HG';
import MARVELS from './content/GAME PAGES/MARVELS';
import MHR from './content/GAME PAGES/MHR';
import MHW from './content/GAME PAGES/MHW';
import POE from './content/GAME PAGES/POE';
import PUBG from './content/GAME PAGES/PUBG';
import RUST from './content/GAME PAGES/RUST';
import SOFT from './content/GAME PAGES/SOFT';
import SWJR from './content/GAME PAGES/SWJR';
import TF2 from './content/GAME PAGES/TF2';
import WT from './content/GAME PAGES/WT';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/discover'>
          <Route index element={<Discover />} />
          <Route path='asssassins_creed_origins' element={<ACO />} />
          <Route path='age_of_wonders_4' element={<AOW4 />} />
          <Route path='apex_legends' element={<APEX />} />
          <Route path='call_of_duty_modern_warfare_II' element={<CODMWII />} />
          <Route path='counter-strike_global_offensive' element={<CSGO />} />
          <Route path='destiny_2' element={<DESTINY2 />} />
          <Route path='dota_2' element={<DOTA2 />} />
          <Route path='ea_sports_fifa_23' element={<FIFA23 />} />
          <Route path='grand_theft_auto_V' element={<GTAV />} />
          <Route path='hogwarts_legacy' element={<HG />} />
          <Route path='marvels_guardians_of_the_galaxy' element={<MARVELS />} />
          <Route path='monster_hunter_rise' element={<MHR />} />
          <Route path='monster_hunter_world' element={<MHW />} />
          <Route path='path_of_exile' element={<POE />} />
          <Route path='pubg_battlegrounds' element={<PUBG />} />
          <Route path='rust' element={<RUST />} />
          <Route path='sons_of_the_forest' element={<SOFT />} />
          <Route path='star_wars_jedi_survivor' element={<SWJR />} />
          <Route path='team_fortress_2' element={<TF2 />} />
          <Route path='war_thunder' element={<WT />} />
        </Route>
        <Route path='/about' element={<About />} />
        
      </Routes>
    </>
  );
}

export default App;
