import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Results = ({results}) => {
  console.log(results);
  return (
    <>
      { results ?
        results.drinks.map(result => (
          <div key={result.idDrink} className="result-box">
            <h2>{result.strDrink}</h2>
            <img src={result.strDrinkThumb} alt={result.strDrink}></img>
            <hr/>
            <a href="#">VIEW</a>
          </div>
        ))

        : <h1>Test</h1>
      }
    </>
  );
}


export default Results;