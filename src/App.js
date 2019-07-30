import React from 'react';
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component"

import HomePage from './pages/homepage/homepage.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import Header from './components/header/header.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
