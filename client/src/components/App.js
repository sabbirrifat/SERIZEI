import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product

import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import Home from './views/Home/Home';

import Dashboard from './Dashboard';
import Movie from './Movie';
import NotFound from './NotFound';

import FavoritePage from "./views/FavoritePage/FavoritePage";


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
        <Switch>
          <Route exact path="/" component={Auth(Home, null)} />
          <Route exact path="/dashboard" component={Auth(Dashboard, true)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/tv/:movieId" component={Auth(Movie, true)} />
          <Route exact path="/favorite" component={Auth(FavoritePage, true)} />
          <Route component={NotFound} />
        </Switch>
    </Suspense>
  );
}

export default App;
