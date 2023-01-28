import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, clearState, userSelector } from '../redux/userSlice'
//import { useNavigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isLoggedIn} = useSelector(userSelector)

    const initialLogin = {
        email:'',
        password:''
    }

    useEffect(()=>{
        dispatch(clearState())
    })

    useEffect(()=>{
        if(isLoggedIn === true){
            dispatch(clearState())
            navigate('/home')
        }
    }, [isLoggedIn])

    const [loginValues, setLoginValues] = useState(initialLogin)
    const [loginErr, setLoginErr] = useState(null)

    const handleChange = event => {
        const {name, value} = event.target
        setLoginValues({
            ...loginValues,
            [name]:value
        })
    }

    const login = async (event) => {
        event.preventDefault()
        try {
            const resp = await dispatch(loginUser(loginValues))

            if (resp.payload.error){
                setLoginErr(resp.payload.error)
                setTimeout(()=>{
                    setLoginErr(null)
                }, 7000)
            }
            console.log(loginValues)
        } catch (error) {
            console.log(error)
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
                <form action="" onSubmit={login} >
                    <div className='error-class'>
                       {loginErr}
                    </div>
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