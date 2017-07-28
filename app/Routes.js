import React from 'react'
import { BrowserRouter as Router, Route, IndexRoute, Switch } from 'react-router-dom'
import Layout from './comp/Layout'
import Home from './comp/Home'
import About from './comp/About'
import style from './comp/variables.css'

const Routes = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={ Home } />
      <Route path="/about" component={ About } />        
    </Layout>
  </Router>
)

export default Routes
