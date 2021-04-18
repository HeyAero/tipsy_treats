import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Homepage, Search, Drink } from './pages';
// import { Header, Footer } from './layout';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/drink">
          <Drink />
        </Route>
      </Switch>
    </>
  );
};

export default App;