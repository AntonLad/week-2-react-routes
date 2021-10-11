import React from 'react'
// import PropTypes from 'prop-types'
import { Provider, connect } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Link, Switch, Route, withRouter /* , Redirect */ } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import store, { history } from '../redux'

// import { Link } from 'react-router-dom'
import Header from './header'
import Dashboard from './dashboard'
// import Home from './home'
import DashboardMain from './dashboard-main'
import DashboardProfile from './dashboard-profile'
import Startup from '../config/startup'

// const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

// const PrivateRouteConnected = connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)

const mapDispatchToPropsStartup = (dispatch) => bindActionCreators({}, dispatch)

const StartupConnected = withRouter(connect(() => ({}), mapDispatchToPropsStartup)(Startup))

const RootComponent = (props) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history} location={props.location} context={props.context}>
        <StartupConnected>
          <Switch>
            {/* <Route exact path="/" component={() => <DummyView />} /> */}
            {/* <Route exact path="/dashboard" component={() => <Home />} /> */}
            <Route exact path="/dashboard/" component={() => <Dashboard />} />
            <Route exact path="/dashboard/profile/:user" component={() => <DashboardProfile />} />
            <Route exact path="/dashboard/main" component={() => <DashboardMain />} />
            {/* <PrivateRouteConnected exact path="/hidden-route" component={() => <DummyView />} /> */}
            {/* <Route component={() => <NotFound />} /> */}
          </Switch>
        </StartupConnected>
      </ConnectedRouter>
    </Provider>
  )
}

const Home = () => {
  return (
    <div>
      <Header />
      <RootComponent />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title"> Dashboard </div>
          <Link to="/dashboard/profile/fa416c70-8f8c-4b4a-861d-65ba6d838499">Go To Profile</Link>
          <Link to="/dashboard/main">Go To Main</Link>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
