import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Authorization from './components/Authorization'
import Aside from './components/Aside'
import Terminals from './components/Terminals'
import Buyers from './components/Buyers'
import BuyersOne from './components/BuyersOne';
import Error from './components/Error'

function App() {
  return (
    <div style={{ display: 'flex', columnGap: '1rem' }}>
      <Aside />

      <Switch>
        <Route exact path='/terminals' component={Terminals} />
        <Route exact path='/buyers' component={Buyers} />
        <Route exact path='/buyers/:id' component={BuyersOne} />

        <Route path='/' component={Error} />
      </Switch>

    </div>
  );
}

export default App;
