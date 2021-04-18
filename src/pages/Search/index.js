import React, { useState } from 'react';
import logo from '../Homepage/logo.png';
import { SearchBar, Results } from '../../components'
import axios from 'axios';

const Search = () => {

  const [results, setResults ] = useState();

  async function fetchRequest (arg, term) {
    try {
      let { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?${arg}=${term}`);
      setResults(data);
    } catch (err) {
      setResults('No results found.')
    }
  }

  return (
    <main className="container">
      <img className="search-logo" src={logo} alt="Tipsy Treats"/>
      <SearchBar fetchRequest={fetchRequest}/>
      <Results results={results} />
    </main>
  );
}

export default Search;