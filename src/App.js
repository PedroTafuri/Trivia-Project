import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Login from './Pages/Login';
import Game from './Pages/Game';
import Settings from './Pages/Settings';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/game" component={ Game } />
        <Route path="/settings" component={ Settings } />
        <Route path="/" component={ Login }/>
      </Switch>
    </div>
  );
}