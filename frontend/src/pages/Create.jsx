import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/Create.module.css"


const Create = () => {
  return (
    <div className={styles.homecontainer}>
        <div className={styles.homeheader}>
            <h1>How do you want to start?</h1>
        </div>

        <div className={styles.resumescontainer}>
            <Link to='/templates'>
                <div className={styles.newResume}>
                    <div className={styles.resumeStartContainer}>
                        <div className="">
                           <h1>Create new resume</h1>
                        </div>
                        <p>
                            We'll guide you step by <br />
                            step
                        </p>
                    </div>
                </div>
            </Link>
            <Link>
                <div className={styles.newResume}>
                    <div className={styles.resumeStartContainer}>
                        <div className="">
                            <h1>Upload your linkedin profile</h1>
                        </div>
                        <p>
                            Have a LinkedIn profile 
                            upload your information
                        </p>
                    </div>
                </div>
            </Link>
        </div>
        <div className="back-create-resume">
            <button className={styles.back}>
                Back
            </button>
        </div>
    </div>
  )
}

export default Create