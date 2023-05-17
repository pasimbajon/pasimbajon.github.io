import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa"

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
      const gameData = [
        {id:1,gameName:"Asssassins Creed Origins",page:"asssassins_creed_origins"},
        {id:2,gameName:"Age of Wonders 4",page:"age_of_wonders_4"},
        {id:3,gameName:"Apex Legends",page:"apex_legends"},
        {id:4,gameName:"Call Of Duty Modern Warfare II",page:"call_of_duty_modern_warfare_II"},
        {id:5,gameName:"Counter Strike Global Offensive",page:"counter-strike_global_offensive"},
        {id:6,gameName:"Destiny 2",page:"destiny_2"},
        {id:7,gameName:"Dota 2",page:"dota_2"},
        {id:8,gameName:"EA Sports Fifa 23",page:"ea_sports_fifa_23"},
        {id:9,gameName:"Grand Theft Auto V",page:"grand_theft_auto_V"},
        {id:10,gameName:"Hogwarts Legacy",page:"hogwarts_legacy"},
        {id:11,gameName:"Marvels Guardians Of The Galaxy",page:"marvels_guardians_of_the_galaxy"},
        {id:12,gameName:"Monster Hunter Rise",page:"monster_hunter_rise"},
        {id:13,gameName:"Monster Hunter World",page:"monster_hunter_world"},
        {id:14,gameName:"Path Of Exile",page:"path_of_exile"},
        {id:15,gameName:"PUBG Battlegrounds",page:"pubg_battlegrounds"},
        {id:16,gameName:"Rust",page:"rust"},
        {id:17,gameName:"Sons Of The Forest",page:"sons_of_the_forest"},
        {id:18,gameName:"Star Wars Jedi Survivor",page:"star_wars_jedi_survivor"},
        {id:19,gameName:"Team Fortress 2",page:"team_fortress_2"},
        {id:20,gameName:"War Thunder",page:"war_thunder"}
      ];
      const result = gameData.filter((game) => {
        return value && game && game.gameName && game.gameName.toLocaleLowerCase().includes(value)
      });
      setResults(result);
    };
    
    const handleChanges = (value) =>{
        setInput(value);
        fetchData(value);
    }
  return (
    <>
    <FaSearch id="search-icon" />
    <input type='text' placeholder='Search..' value={input} onChange={(e) => handleChanges(e.target.value)} />
    </>
  )
}
