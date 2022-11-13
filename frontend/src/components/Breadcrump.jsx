import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrump = () => {
    let array_itmes = ['Contact Information', 'Education', 'Work Experience', 'Key Skills', 'Profile', 'Complete']

    return (
        <div className='bredacrump-container'>
            <div className="breadcrumps">
                {array_itmes.map(item => (
                    <div className="breadcrump-item" key={item}>
                        <Link to='' > {item} </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Breadcrump