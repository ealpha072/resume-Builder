import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
      <div className="login-section">
          <div className="log">
              <div className="heading"><h3>Log In</h3></div>
              <div className="login-desc">
                  <p>Log in to your free account to create <br />
                  a new resume or continue working on <br />
                  a saved one</p>
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
                  <div className='submit-btn'>
                      <button type='submit'>Log In</button>
                  </div>
              </form>
          </div>
          <div className="login-actions">
              <div className="">
                  <a href="">Forgot Password?</a>
              </div>
              <div>
                  <Link to='Signup'><a href="">Sign Up</a> </Link>
              </div>
          </div>
      </div>
  )
}

export default Login