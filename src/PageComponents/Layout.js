import React from 'react';
import {Header, Navigation, Drawer, Content, Layout } from 'react-mdl'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Routes from './../routes'
import {NavLink} from 'react-router-dom'

class MyLayout extends React.Component
{
  render()
  {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header title="Sanjiv" scroll>
        </Header>

        <Content>
            <div className="page-content" />
            <Routes/>
        </Content>
    </Layout>
    </div>
    )
  }
}


export default MyLayout
