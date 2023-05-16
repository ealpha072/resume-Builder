import { useState } from 'react'
import Contact from '../components/Contact'
import Breadcrump from '../components/Breadcrump'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Skill from '../components/Skill'
import Profile from '../components/Profile'
import Additional from '../components/Additional'
import styles from "../styles/Editor.module.css"


const Editor = () => {
    const [activeTab, setActiveTab] = useState(1)

    const renderActiveTab = (tabIndex) => {
        setActiveTab(tabIndex)
    }

    return (
        <>
            <div className='mainWrapper'>
                <div className="mainWrapper-left"></div>
                <div className="mainWrapper-right">
                    {activeTab ===1 && <Contact />}
                    {activeTab ===2 && <Education />}
                    {activeTab ===3 && <Experience />}
                    {activeTab ===4 && <Skill />}
                    {activeTab ===5 && <Profile />}
                    {activeTab ===6 && <Additional />}
                </div>
            </div>
            <div className="divider"></div>
            <div className={styles.sectionsMenu}>
                <div className="color-p" onClick={()=>renderActiveTab(1)}>Contact Information</div>
                <div className="color-p" onClick={()=>renderActiveTab(2)}>Education</div>
                <div className="color-p" onClick={()=>renderActiveTab(3)}>Work Experience</div>
                <div className="color-p" onClick={()=>renderActiveTab(4)}>Key Skills</div>
                <div className="color-p" onClick={()=>renderActiveTab(5)}>Profile</div>
                <div className="color-p" onClick={()=>renderActiveTab(6)}>Complete</div>
            </div>

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