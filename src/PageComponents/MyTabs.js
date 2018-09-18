import React from 'react'
import {Tabs, Tab} from 'react-mdl'


class MyTabs extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      activeTab: 1
    }
  }
  render()
  {
    return(

      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Messages</Tab>
          <Tab>Posts</Tab>
          <Tab>Notifications</Tab>
      </Tabs>
    )
  }
}

export default MyTabs;
