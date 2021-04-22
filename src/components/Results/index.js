import React, { useState } from 'react';
const Results = ({results}) => {
  console.log(results);
  return (
    <div className="">
      { results ?
          results.drinks ?
            results.drinks.map(result => (
              <div key={result.idDrink} className="result-box">
                <h2>{result.strDrink}</h2>
                <img src={result.strDrinkThumb} alt={result.strDrink}></img>
                <hr/>
                <a href={`/drink/${result.idDrink}`}>VIEW</a>
              </div>
            ))
          :
          <h1 className="error-msg text-center mt-3">No results found.</h1>
        : <div></div>
      }
    </div>
  );
}


export default Results;