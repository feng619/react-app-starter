// @flow
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './about';
import Port from './port';

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/port">port</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/port" component={Port} />
    </div>
  );
};

export default App;
