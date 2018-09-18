import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import MyLayout from './PageComponents/Layout'

class MainPage extends React.Component
{
  render()
  {
    return(
      <BrowserRouter>
        <MyLayout/>
      </BrowserRouter>
    )
  }
}


ReactDOM.render(<MainPage/>, document.getElementById('root'))
