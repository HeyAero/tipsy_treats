import React from 'react';
import logo from '../Homepage/logo.png';
import { SearchBar } from '../../components'

const Search = () => {
  return (
    <main className="container">
      <img className="search-logo" src={logo} alt="Tipsy Treats"/>
      <SearchBar/>
    </main>
  );
}

export default Search;