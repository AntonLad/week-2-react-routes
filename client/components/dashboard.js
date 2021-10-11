import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'
// import Header from './header'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div className="flex bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10 flex-col">
            <div id="title"> Dashboard </div>
            <Link to="/dashboard/profile/fa416c70-8f8c-4b4a-861d-65ba6d838499">Go To Profile</Link>
            <Link to="/dashboard/main">Go To Main</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
