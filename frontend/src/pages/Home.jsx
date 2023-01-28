import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearState, userSelector } from '../redux/userSlice'

const Home = () => {
    const {isLoggedIn} = useSelector(userSelector)
    const dispatch = useDispatch() 
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(isLoggedIn === false){
            dispatch(clearState())
            navigate('/')
        }
    })

    return (
        <div className='home-container'>
            <div className="home-header">
                <h1>My Resumes</h1>
            </div>
            <div className="resumes-container">
                <div className="create-new-resume">
                    <Link to='./Create'>
                        <div className="icon-holder">
                            <i> + </i> Create New Resume
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home