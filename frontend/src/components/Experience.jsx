import React from "react";
import styles from "../styles/Experience.module.css"

const Experience = () => {
    return(
        <div className="information">
            <div className="home-header">
                <h1 className="header-head">Recent Professional Experience</h1>
                <p className='color-p'>
                    Add your most recent job and continue in descending order.
                </p>
            </div>

            <div className="contact-form">
                <form action="">
                    <div className="row-1">
                        <div className="col form-div">
                            <input type="text" className='form-input'/>
                            <label htmlFor="" className='label'>Position</label>
                        </div>
                        <div className="col form-div">
                            <input type="text" className='form-input'/>
                            <label htmlFor="" className='label'>Company Name</label>
                        </div>
                    </div>

                    <div className="row-1">
                        <div className="col form-div">
                            <input type="text" className='form-input'/>
                            <label htmlFor="" className='label'>Start Month</label>
                        </div>
                        <div className="col form-div">
                            <input type="text" className='form-input'/>
                            <label htmlFor="" className='label'>Start Year</label>
                        </div>
                    </div>

                    <div className="row-1">
                        <div className="col form-div">
                            <input type="text" className='form-input'/>
                            <label htmlFor="" className='label'>End Month</label>
                        </div>
                        <div className="col form-div">
                            <input type="text" className='form-input'/>
                            <label htmlFor="" className='label'>End Year</label>
                        </div>
                    </div>

                    <div className="row-1">
                        <div className="col form-div">
                            
                        </div>
                        <div className="col form-div">
                            <p htmlFor="">Currentlly work here</p>
                            <input type="checkbox" className='form-input'/>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Experience