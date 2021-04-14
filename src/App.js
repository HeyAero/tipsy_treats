import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Homepage } from './pages';
// import { Header, Footer } from './layout';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </>
  );
};

export default App;