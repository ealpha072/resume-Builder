
const Education = () => {
  return (
    <div className='information'>
        <div className="home-header">
            <h1 className="header-head">Education Information</h1>
            <p className='color-p'>Add your most relevant education, including programs 
                you&'re currently enrolled in.
            </p>
        </div>

        <div className="contact-form">
            <form action="">
                <div className="row-1">
                    <div className="col form-div">
                        <input type="text" className='form-input'/>
                        <label htmlFor="" className='label'>School Name</label>
                    </div>
                    <div className="col form-div">
                        <input type="text" className='form-input'/>
                        <label htmlFor="" className='label'>School Location</label>
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
                        <input type="text" className='form-input'/>
                        <label htmlFor="" className='label'>Degree</label>
                    </div>
                </div>

                <div className="row-1">
                    <div className="col form-div">
                        <input type="text" className='form-input'/>
                        <label htmlFor="" className='label'>Field of Study</label>
                    </div>
                </div>

                <div className="row-1">
                    <div className="col form-div">
                        <label htmlFor="" className='label'>Description</label>
                    </div>
                </div>

                <div className="row-discuss">
                    <div className="col">
                       
                        <textarea name="" id="" ></textarea>
                    </div>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Education