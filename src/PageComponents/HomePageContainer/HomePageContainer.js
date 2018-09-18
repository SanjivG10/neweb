import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {section} from 'react-mdl'

import MyTabs from './../MyTabs'
import HomePageActionCreator from './../../redux/homePageAction'

class HomePageContainer extends React.Component
{

  componentWillMount()
  {
      this.props.HomePageActionCreator()
  }

  render()
  {
    return(
      <div>
        <MyTabs/>
        <section>
            <div className="content">
                I am in tab {this.props.data.tabState}
            </div>
        </section>
      </div>

    )
  }
}

function mapStateToProps(state)
{
  return {
    data: state.HomePageReducer
  }
}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators({HomePageActionCreator},dispatch)
}



export default connect(mapStateToProps,mapDispatchToProps)(HomePageContainer)
