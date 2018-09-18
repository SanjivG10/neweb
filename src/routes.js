import {Switch, Route, BrowserRouter} from 'react-router-dom'
import React from 'react'
import Portfolio from './PageComponents/portfolio'
import Contact from './PageComponents/contact'
import Policy from './PageComponents/policy'
import HomePage from './PageComponents/homepage'


class MyRoutes extends React.Component
{
  render()
  {
    return(
        <Switch>
          <Route exact path="/" component = {HomePage} />
          <Route path="/portfolio" component = {Portfolio} />
          <Route path="/policy" component = {Policy} />
          <Route path="/contact" component = {Contact} />
        </Switch>
    )
  }
}

export default MyRoutes
