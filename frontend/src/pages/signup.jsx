import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import userServices from '../services/user'

const Signup = ({setUser, setIsSignedup}) => {
    const navigate = useNavigate()

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

            const user = await userServices.signUp({email, password, confirmPassword})
            setUser(user)
            setIsSignedup(true)
            navigate('/home')
        } catch (error) {
            setErrorMsg('Error signin up user')
            setTimeout(()=> {
                setErrorMsg(null)
            }, 5000)
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
                    <h6>{errorMsg}</h6>
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
                    <Link to='' > Already a member?</Link>
                </div>
                <div>
                    <Link to='/'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup