import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Web Director</title>
        <meta property="og:title" content="Dynamic Web Director" />
      </Helmet>
    </div>
  )
}

export default Home
