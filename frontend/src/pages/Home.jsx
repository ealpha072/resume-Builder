import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearState, userSelector } from '../redux/userSlice'

const Home = () => {
    const {isLoggedIn, userDetails} = useSelector(userSelector)
    const dispatch = useDispatch() 
    const navigate = useNavigate()

    console.log(userDetails)

    /*useEffect(()=>{
        if(isLoggedIn === false){
            dispatch(clearState())
            navigate('/')
        }
    }, [isLoggedIn, dispatch])*/

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