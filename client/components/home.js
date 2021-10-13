import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Header from './header'
import Dashboard from './dashboard'

import DashboardMain from './dashboard-main'
import DashboardProfile from './dashboard-profile'

const Home = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/dashboard/" component={() => <Dashboard />} />
        <Route exact path="/dashboard/profile/:user" component={() => <DashboardProfile />} />
        <Route exact path="/dashboard/main" component={() => <DashboardMain />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
