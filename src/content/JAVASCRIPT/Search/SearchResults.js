import React from 'react'
import { Link } from 'react-router-dom';
import '../../CSS/SearchResult.css';

export const SearchResults = ({result}) => {
  return (
    <Link className='search-result' to={`/discover/${result.page}`}>{result.gameName}</Link>
  )
}
