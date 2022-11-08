import React from 'react'

const Create = () => {
  return (
    <div className='home-container'>
        <h1>Hello</h1>
        <div className="home-header">
            <h1>How do you want to start?</h1>
        </div>
        <div className="resumes-container">
            <div className="create-new-resume">
                <div className="create-resume-header">
                    <h3>Create a new resume</h3>
                </div>
            </div>
            <div className="upload-linkedin">
                <div className="create-resume-header">
                    <h3>Upload your linkedIn Profile</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Create