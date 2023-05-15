import React from "react";
import styles from "../styles/Skills.module.css"

const Skill = () => {
    return (
        <div className="information">
            <div className="home-header">
                <h1 className="header-head">Key Skills</h1>
                <p className='color-p'>
                    Add relevant professional key skills and proficiencies.
                </p>
            </div>

            <div className={styles.skillsDiv}>
                <div className="skillEntry">
                    <input type="text" />
                </div>
                <div className="skillEntry">
                    <input type="text" />
                </div>
            </div>

        </div>
    )
}

export default Skill