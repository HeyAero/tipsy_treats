import React, { useState } from 'react';
const Results = ({results}) => {
  console.log(results);
  return (
    <div className="">
      { results ?
        results.drinks.map(result => (
          <div key={result.idDrink} className="result-box">
            <h2>{result.strDrink}</h2>
            <img src={result.strDrinkThumb} alt={result.strDrink}></img>
            <hr/>
            <a href="#">VIEW</a>
          </div>
        ))

        : <div></div>
      }
    </div>
  );
}


export default Results;