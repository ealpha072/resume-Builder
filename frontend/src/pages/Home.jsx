import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <div className='home-container'>
          <div className="home-header">
              <h1>My Resumes</h1>
          </div>
          <div className="resumes-container">
              <div className="create-new-resume">
                <Link to='./Create'>
                    <div className="icon-holder">
                        <i> + </i> Create New Resume
                    </div>
                </Link>
              </div>
          </div>
      </div>
  )
}

export default Home