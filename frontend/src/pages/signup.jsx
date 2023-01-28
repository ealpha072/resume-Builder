import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser, clearErrorMsg, clearState, userSelector } from '../redux/userSlice'


const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {isRegistered} = useSelector(userSelector)
    const formValues = {
        email:'',
        password: '',
        confirmPassword: ''
    }

    // app state
    const [signupValues, setSignupValues] = useState(formValues)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(()=>{
        if(isRegistered === true){
            dispatch(clearState())
            navigate('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isRegistered])

    //helper functions
    const handleChange = event => {
        const {name, value} = event.target
        setSignupValues({...signupValues, [name]:value})
    }

    const signupUser = async (event) => {
        event.preventDefault()
        try {
           const resp = await dispatch(registerUser(signupValues))
           if (resp.payload.error){
            setErrorMsg(resp.payload.error)
            setTimeout(()=>{
                setErrorMsg(null)
            }, 5000)
           }
        } catch (error) {
            console.log(error)
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
                    <div className='error-class'>
                       {errorMsg}
                    </div>
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