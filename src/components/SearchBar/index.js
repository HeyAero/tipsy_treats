import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const SearchBar = ({fetchRequest}) => {

  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState(''); 
  const history = useHistory();

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  }

  const handleFormSubmit = (e) => {
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    e.preventDefault();
    setSearch(searchInput);
    history.push('/search');
    fetchRequest(e.target[0].value, e.target[1].value);
  }

  const [searchOption, setSearchOption] = useState('cocktail');
  
  const handleSwitchOption = (e) => {
    setSearchOption(e.target.value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <select value={searchOption} onChange={handleSwitchOption}>
        <option value="s">NAME</option>
        <option value="i">INGREDIENT</option>
        <option value="a">LETTER</option>
      </select>
      <input type="text" id="search" name="search" placeholder="Enter here..." value={searchInput} onChange={handleInput}/>
    </form>
  )
};

export default SearchBar;