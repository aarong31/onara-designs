import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './main.styles.scss';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.js';
import SignIn from './pages/signin/signin';
import Nav from './components/nav/nav';

function App() {
  return (
    <div>
    < Nav />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignIn} />
    </Switch>
  </div>
  );
}

export default App;