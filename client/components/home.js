import React from 'react'

// import { Link } from 'react-router-dom'
import Header from './header'
// import Dashboard from './dashboard'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          {
            // <Link to={<Dashboard />}> Go to dashboard </Link>
            // <Link to="/dashboard/main"> to main </Link>
            // <Link to="/dashboard/profile/:user"> to profile </Link>
          }
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
