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
            <Link to='/home/templates'>
                <div className={styles.newResume}>
                    <div className={styles.resumeStartContainer}>
                        <div className="">
                           <h1>Create new resume</h1>
                        </div>
                    </div>
                </div>
            </Link>
            <Link>
                <div className={styles.newResume}>
                    <div className={styles.resumeStartContainer}>
                        <div className="">
                            <h1>Upload your linkedin profile</h1>
                        </div>
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