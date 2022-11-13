import React from 'react'
import { Link } from 'react-router-dom'

const Create = () => {
  return (
    <div className='home-container'>
        <div className="home-header">
            <h1>How do you want to start?</h1>
        </div>
        <div className="resumes-container">
            <Link to='/templates'>
                <div className="new-resume new-resume-start">
                    <div className="resume-start-container">
                        <div className="start-header">
                           <h1 className='heading'>Create new resume</h1>
                        </div>
                        <p className='start-p'>
                            We'll guide you step by <br />
                            step
                        </p>
                    </div>
                </div>
            </Link>
            <Link>
                <div className="new-resume upload-linkedin">
                    <div className="resume-start-linkedin">
                        <div className="start-header">
                            <h1 className='heading'>Upload your linkedin profile</h1>
                        </div>
                        <p className='start-p'>
                            Have a LinkedIn profile<br />
                            Save time and upload your <br />
                            information
                        </p>
                    </div>
                </div>
            </Link>
        </div>
        <div className="back-create-resume">
            <button className="back">
                Back
            </button>
        </div>
    </div>
  )
}

export default Create