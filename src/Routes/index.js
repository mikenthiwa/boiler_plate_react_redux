import React from 'react';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Home from '../Views/Home'

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact path='/'
        component={ Home }
      />
    </Switch>
  </BrowserRouter>
);

export default routes;
