import { useState } from "react"
import styles from "../styles/Contact.module.css" 

const Contact = () => {
    const [socialLink, setSocialLink] = useState([{name:"", value:""}])

    const handleAddLink = (e) => {
        e.preventDefault()
        setSocialLink([...socialLink, {name:"", value:""}])
    }

    const handleInputChange = (index, event) => {
        const {name, value} = event.target
        const updatedSocialLinks = [...socialLink]
        updatedSocialLinks[index][name] = value
        setSocialLink(updatedSocialLinks)
    }

    const removeLink = (index) => {
        const updatedSocialLinks = [...socialLink]
        updatedSocialLinks.splice(index, 1)
        setSocialLink(updatedSocialLinks)
    }

    const renderLinks = () => {
        return socialLink.map((link, index) => (
            <div className="row-1" key={index}>
                <div className="col form-div">
                    <input 
                        type="text" 
                        className="form-input" 
                        value={link.name}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                    <label htmlFor="" className="label">
                    Label
                    </label>
                </div>
                <div className="col form-div">
                    <input 
                        type="email" 
                        className="form-input" 
                        value={link.url}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                    <label htmlFor="" className="label">
                        Link
                    </label>
                </div>
                <div className={styles.delete}>
                    <i className="fa fa-trash" onClick={()=>{removeLink(index)}}></i>
                </div>
            </div>
      ));
    };

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
                            <button className="btn-social-link" onClick={handleAddLink}>
                                + Add Social or Portfolio Links
                            </button>
                        </div>
                    </div>
                    
                    {renderLinks()}
                </form>
            </div>
        </div>
    )
}

export default Contact