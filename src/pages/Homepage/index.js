import React from 'react';
import logo from './logo.png';
import { SearchBar, FactBox } from '../../components'

const Homepage = () => {

  return (
    <main className="container">
      <img className="home-logo" src={logo} alt="Tipsy Treats"/>
      <FactBox />
      <div className="d-flex justify-content-center text-center mt-5">
          <a href="/search" className="main-button mx-3">SEARCH</a>
          <a href="/drink/random" className="main-button mx-3">SURPRISE ME</a>
      </div>
    </main>
  );
}

export default Homepage;