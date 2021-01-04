import React from 'react';
import { Switch, Route as ReactRouterRoute } from 'react-router-dom';

import FavoriteTracks from '../pages/FavoriteTracks';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <ReactRouterRoute path="/" exact component={Home} />
    <ReactRouterRoute path="/favorites" component={FavoriteTracks} />
  </Switch>
);

export default Routes;
