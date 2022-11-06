import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="login-section">
          <div className="log">
              <div className="heading"><h3>Sign-up</h3></div>
              <div className="login-desc">
                  <p>
                    Sign-up a free account to get <br />
                    access to all resume templates and <br />
                    colors, plus create multiple resumes<br />
                    and save your progress <br />
                  </p>
              </div>
          </div>
          <div className="login-form">
              <form action="">
                  <div className='email'>
                      <label htmlFor="email">Email</label>
                      <input type="email" />
                  </div>
                  <div className='password'>
                      <label htmlFor="password">Password</label>
                      <input type="password"/>
                  </div>
                  <div className='password'>
                      <label htmlFor="confirm-password">Confirm Password</label>
                      <input type="password"/>
                  </div>
                  <div className='submit-btn'>
                      <button type='submit'>Sign Up</button>
                  </div>
              </form>
          </div>
          <div className="login-actions">
              <div className="">
                  <a href="">Already a member?</a>
              </div>
              <div>
                  <Link to='/'><a href="">Login</a></Link>
              </div>
          </div>
      </div>
  )
}

export default Signup