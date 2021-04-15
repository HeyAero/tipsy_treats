import React, { useState } from 'react';


const SearchBar = () => {

  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState(''); 

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setSearchInput('');
  }

  const [searchOption, setSearchOption] = useState('cocktail');
  
  const handleSwitchOption = (e) => {
    setSearchOption(e.target.value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <select value={searchOption} onChange={handleSwitchOption}>
        <option value="cocktail">NAME</option>
        <option value="ingredient">INGREDIENT</option>
        <option value="letter">LETTER</option>
      </select>
      <input type="text" id="search" name="search" placeholder="Enter here..." value={searchInput} onChange={handleInput}/>
    </form>
  )
};

export default SearchBar;