import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

module.exports = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
)
