import React from 'react'

const Contact = () => {
  return (
    <div className='infomation'>
        <div className="home-header">
            <h1 className="header-head">Contact Information</h1>
            <p className='color-p'>Include at minimum your email and phone number</p>
        </div>
        <div className="contact-form">
            <form action="">
                <div className="row-1">
                    <div className="col form-div">
                        <input type="text" className='form-input'/>
                        <label htmlFor="" className='label'>First Name</label>
                    </div>
                    <div className="col form-div">
                        <input type="text" className='form-input'/>
                        <label htmlFor="" className='label'>Last Name</label>
                    </div>
                </div>
                <div className="row-1">
                    <div className="col form-div">
                        <input type="text" className='form-input'/>
                        <label htmlFor="" className='label'>Job Title</label>
                    </div>
                    <div className="col form-div">
                        <label htmlFor="" className='custom-file-upload label btn'>
                            <input type="file" />
                            Browse
                        </label>
                        <label htmlFor="" className='label label-img'>Profile Image</label>
                    </div>
                </div>

                <div className="row-1">
                    <div className="col form-div">
                        <input type="text" className='form-input'/>
                        <label htmlFor="" className='label'>Adress</label>
                    </div>
                </div>

                <div className="row-1">
                    <div className="col form-div">
                        <input type="text" className='form-input'/>
                        <label htmlFor="" className='label'>City</label>
                    </div>
                    <div className="col form-div">
                        <input type="text" className='form-input'/>
                        <label htmlFor="" className='label'>State</label>
                    </div>
                    <div className="col form-div">
                        <input type="text" className='form-input'/>
                        <label htmlFor="" className='label'>Zip</label>
                    </div>
                </div>

                <div className="row-1">
                    <div className="col form-div">
                        <input type="text" className='form-input'/>
                        <label htmlFor="" className='label'>Phone</label>
                    </div>
                    <div className="col form-div">
                        <input type="email" className='form-input'/>
                        <label htmlFor="" className='label'>Email</label>
                    </div>
                </div>
                <div className="row-1 social-link-wrapper">
                    <div className="col social-link">
                        <button className="btn-social-link">- Add Social or Portfolio Links</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact