import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from "../styles/Header.module.css"

const Header = () => {
    const location  = useLocation()
    const [actions, setActions] = useState([
        {
            name: "Login",
            href: "/"
        },
        {
            name: "Signup",
            href: "/signup"
        }
    ])

    useEffect(()=>{
        if(location.pathname === "/home"){
            setActions([
                {
                    name: "My Resumes",
                    href: "/home/create"
                },
                {
                    name: "Logout",
                    href: "/"
                }
            ])
        }else{
            setActions([
                {
                    name: "Signup",
                    href: "/signup"
                },
                {
                    name: "Login",
                    href: "/"
                }
            ])
        }
    }, [location])
    
    return (
        <div>
            <nav className={styles.nav}>
                <div>
                    <div className={styles.logo}>
                        <div className={styles.headerIcons}>
                            <i className='fa fa-file-o'></i>
                            <i className="fa fa-cog"></i>
                        </div>
                        <h1>Resume <br />Builder</h1>
                    </div>
                </div>

                <div  className={styles.actions}>
                    {actions.map((action, index) => {
                        return(
                            <div key={index}>
                                <Link to={action.href}>{action.name}</Link>
                            </div>
                        )
                    })}
                </div>
            </nav>
            <hr />
        </div>
  )
}

export default Header