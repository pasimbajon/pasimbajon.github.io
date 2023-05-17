import React from 'react';
import '../../CSS/SearchResultList.css';
import { SearchResults } from './SearchResults';

export const SearchResultList = ({ results }) => {
  return (
    <div className='result-list'>
        {
            results.map((result, id) => {
                return <SearchResults result={result} key={id}/>
            })
        }
    </div>
  )
}
