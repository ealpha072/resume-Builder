import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import signUp from '../services/user'

const Signup = ({setUser}) => {
    const formValues = {
        email:'',
        password: '',
        confirmPassword: ''
    }

    // app state
    const [signupValues, setSignupValues] = useState(formValues)
    const [errorMsg, setErrorMsg] = useState('')

    //helper functions
    const handleChange = event => {
        const {name, value} = event.target
        setSignupValues({
            ...signupValues,
                [name]:value
        })
    }

    const signupUser = async (event) => {
        event.preventDefault()
        console.log(signupValues)

        try {
            const email = signupValues.email
            const password = signupValues.password
            const confirmPassword = signupValues.confirmPassword

            if(!(password === confirmPassword)){
                setErrorMsg('Password mismatch')
                console.log(errorMsg)
                return errorMsg
            }

            const user = await signUp({email, password, confirmPassword})
            setUser(user)
        } catch (error) {
            setErrorMsg('Error signin up user')
            console.log(errorMsg)
        }
    }

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
                <form action="" onSubmit={ signupUser }>
                    <div className='email'>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            value={signupValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='password'>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            name="password"
                            value={signupValues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='password'>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input 
                            type="password"
                            name="confirmPassword"
                            value={signupValues.confirmPassword}
                            onChange={handleChange}
                        />
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