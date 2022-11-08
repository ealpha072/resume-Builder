import React from 'react'

const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-header">
            <h1>My Resumes</h1>
        </div>
        <div className="resumes-container">
            <div className="create-new-resume">
                <div className="icon-holder">
                    <i> + </i> Create New Resume
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home