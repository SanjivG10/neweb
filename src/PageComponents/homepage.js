import React from 'react'
import {Card,CardTitle,CardText,CardActions, Button} from 'react-mdl'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import allReducers from './../redux/allReducers'
import MyTabs from './MyTabs'
import HomePageContainer from './HomePageContainer/HomePageContainer'

let store = createStore(allReducers)


class HomePage extends React.Component
{
  render()
  {
    return(
        <Provider store={store}>
            <HomePageContainer  state= {store} />
        </Provider>
    )
  }
}

export default HomePage
