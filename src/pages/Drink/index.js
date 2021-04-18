import React from 'react';
import logo from '../Homepage/logo.png';
import { DrinkBox } from '../../components'
import { Switch, Route } from 'react-router-dom';


const Drink = () => {
  return (
    <div className="drinks">
      <Switch>
        <Route path={"/drink/:id"}>
          <img className="search-logo" src={logo} alt="Tipsy Treats"/>
          <DrinkBox />
        </Route>
      </Switch>
    </div>
  );
};

export default Drink;