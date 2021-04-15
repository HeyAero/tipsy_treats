import React from 'react';
import logo from './logo.png';
import { SearchBar, FactBox } from '../../components'

const Homepage = () => {
  return (
    <main className="container">
      <img className="home-logo" src={logo} alt="Tipsy Treats"/>
      <div className="search-by">
        <span className="search-by">SEARCH BY:</span>
      </div>
      <SearchBar/>
      <FactBox />
    </main>
  );
}

export default Homepage;