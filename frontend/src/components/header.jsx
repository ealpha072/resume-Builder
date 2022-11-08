import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className='header-container'>
            <div>
                <div className="logo">
                    <div className='icons'>
                        <i className='fa fa-file-o'></i>
                        <i className="fa fa-cog"></i>
                    </div>
                    <h1>Resume <br />Builder</h1>
                </div>
            </div>

            <div  className='actions'>
                <div>
                    <Link to='Home'><a href="">My Resumes</a></Link>
                </div>
                <div>
                    <Link to='/'><a href="">Login</a></Link>
                </div>
                <div>
                    <Link to='Signup'><a href="">Sign-up</a></Link>
                </div>
            </div>
        </nav>
        <hr />
    </div>
  )
}

export default Header