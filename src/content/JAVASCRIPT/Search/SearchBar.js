import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa"

export const SearchBar = () => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        const gamePages = ['asssassins_creed_origins',
                        'age_of_wonders_4',
                        'apex_legends',
                        'call_of_duty_modern_warfare_II',
                        'counter-strike_global_offensive',
                        'destiny_2',
                        'dota_2',
                        'ea_sports_fifa_23',
                        'grand_theft_auto_V',
                        'hogwarts_legacy',
                        'marvels_guardians_of_the_galaxy',
                        'monster_hunter_rise',
                        'monster_hunter_world',
                        'path_of_exile',
                        'pubg_battlegrounds',
                        'rust',
                        'sons_of_the_forest',
                        'star_wars_jedi_survivor',
                        'team_fortress_2',
                        'war_thunder'
                    ];
    }
    const ACO = {
        title:'asssassins creed origins',
        description:'ASSASSIN’S CREED® ORIGINS IS A NEW BEGINNING *The Discovery Tour by Assassin’s Creed®: Ancient Egypt is available now as a free update!* Ancient Egypt, a land of majesty and intrigue, is disappearing in a ruthless fight for power.',
        page:'asssassins_creed_origins'
    };
    
    const handleChanges = (value) =>{
        
    }
  return (
    <><FaSearch id="search-icon" /><input type='text' placeholder='Search..'></input></>
  )
}
