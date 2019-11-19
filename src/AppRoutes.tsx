import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Rates from './features/rates/components/Rates';

const AppRoutes = () => (
  <Switch>
    <Redirect exact path="/" to="/rates" />

    <Route exact path="/rates" component={Rates} />
    <Route exact path="/404" component={() => <h1>Not found.</h1>} />

    <Redirect path="*" to="/404" />
  </Switch>
);

export default AppRoutes;
