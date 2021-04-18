import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const DrinkBox = () => {

  const [drink, setDrink] = useState();

  const params = useParams();

  useEffect(() => {
    const fetchDrink = async () => {
      try {
        let { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`);
        console.log(data.drinks[0]);
        setDrink(data.drinks[0]);
      } catch (err) {
        console.warn(err);
      }
    }
    fetchDrink();
  }, [params])

  const fetchIngredients = () => {
    if (drink) {
      let ingList = {};
      for (let i=0; i < 16; i++) {
        if (drink.strIngredient)
        return (
          <>
            <ul>
              
            </ul>
          </>
        );
      }
      
    } else {
      return "No ingredients";
    }
  }

  return (
    <section className="container drink">
      { drink ? 
      <div className="row">
          <div className="col-md-4 drink-border-left">
            <h1 className="text-center">{drink.strDrink}</h1>
            <img src={drink.strDrinkThumb} alt={drink.strDrink}></img>
            <h5 className="text-center mt-2">Ingrediants:</h5>
            <ul>
              { drink.strIngredient1 ? <li>{drink.strIngredient1} {drink.strMeasure1}</li> : <></> }
              { drink.strIngredient2 ? <li>{drink.strIngredient2} {drink.strMeasure2}</li> : <></> }
              { drink.strIngredient3 ? <li>{drink.strIngredient3} {drink.strMeasure3}</li> : <></> }
              { drink.strIngredient4 ? <li>{drink.strIngredient4} {drink.strMeasure4}</li> : <></> }
              { drink.strIngredient5 ? <li>{drink.strIngredient5} {drink.strMeasure5}</li> : <></> }
              { drink.strIngredient6 ? <li>{drink.strIngredient6} {drink.strMeasure6}</li> : <></> }
              { drink.strIngredient7 ? <li>{drink.strIngredient7} {drink.strMeasure7}</li> : <></> }
              { drink.strIngredient8 ? <li>{drink.strIngredient8} {drink.strMeasure8}</li> : <></> }
              { drink.strIngredient9 ? <li>{drink.strIngredient9} {drink.strMeasure9}</li> : <></> }
              { drink.strIngredient10 ? <li>{drink.strIngredient10} {drink.strMeasure10}</li> : <></> }
              { drink.strIngredient11 ? <li>{drink.strIngredient11} {drink.strMeasure11}</li> : <></> }
              { drink.strIngredient12 ? <li>{drink.strIngredient12} {drink.strMeasure12}</li> : <></> }
              { drink.strIngredient13 ? <li>{drink.strIngredient13} {drink.strMeasure13}</li> : <></> }
              { drink.strIngredient14 ? <li>{drink.strIngredient14} {drink.strMeasure14}</li> : <></> }
              { drink.strIngredient15 ? <li>{drink.strIngredient15} {drink.strMeasure15}</li> : <></> }
            </ul>
          </div>
          <div className="col-md-8 drink-border-right">
            
          </div>
      </div>
        :
      <h1>Loading...</h1>
      }
    </section>
  );
};

export default DrinkBox;
