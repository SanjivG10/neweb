import {combineReducers} from 'redux'

import HomePageReducer from './homePageReducer'

let allReducers = combineReducers({
  HomePageReducer: HomePageReducer
})


export default allReducers;
