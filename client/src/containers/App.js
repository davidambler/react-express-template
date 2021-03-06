import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './HomePage';

const App = () => (
  <Router>
    <Route exact path="/" component={HomePage} />
  </Router>
);

export default App;
