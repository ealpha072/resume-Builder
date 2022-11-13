import React from 'react'
import Contact from '../components/Contact'
import Breadcrump from '../components/Breadcrump'
import Education from '../components/Education'

const Editor = () => {
    return (
        <>
            <div className='mainWrapper'>
                <div className="mainWrapper-left"></div>
                <div className="mainWrapper-right">
                    <Education />
                </div>
            </div>
            <div className="divider"></div>
            <div className="save-cont">
                <div className="back-create-resume save-changes">
                    <button className="back">
                        Save
                    </button>
                </div>
                <div className="back-create-resume">
                    <button className="continue">
                        Continue
                    </button>
                </div>
            </div>
        </>
    )
}

export default Editor