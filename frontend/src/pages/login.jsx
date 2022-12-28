import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import userServices from '../services/user'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser, setIsLoggedin, setIsSignedup }) => {
    const navigate = useNavigate()

    const [loginErr, setLoginerr] = useState('')
    const initialLogin = {
        email:'',
        password:''
    }

    const [loginValues, setLoginValues] = useState(initialLogin)

    const handleChange = event => {
        const {name, value} = event.target
        setLoginValues({
            ...loginValues,
            [name]:value
        })
    }

    const loginUser = async (event) => {
        event.preventDefault()
        console.log(loginValues)

        try{
            const email = loginValues.email
            const password = loginValues.password

            const user = await userServices.login({email, password})
            console.log(user)
            setUser(user)
            setIsSignedup(true)
            setIsLoggedin(true)

            if (user) {
                window.localStorage.setItem(
                    'currentUser', JSON.stringify(user)
                )
            }
            
            navigate('/home')
        } catch (error){
            setLoginerr('Error logging in check password and try again')
            setTimeout(()=>{
                setLoginerr(null)
            }, 10000)
        }
    }

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
                <form action="" onSubmit={loginUser} >
                    <h6>{loginErr}</h6>
                    <div className='email'>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name='email'
                            required
                            value={loginValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='password'>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            name='password'
                            required
                            value={loginValues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='submit-btn'>
                        <button type='submit'>Log In</button>
                    </div>
                </form>
            </div>
            <div className="login-actions">
                <div className="">
                    <Link>
                        Forgot Password?
                    </Link>
                </div>
                <div>
                    <Link to='Signup'>Sign Up </Link>
                </div>
            </div>
        </div>
    )
}

export default Login