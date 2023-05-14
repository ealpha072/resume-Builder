import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/Header.module.css"

const Header = () => {
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
                <div>
                    <Link to='create'>My Resumes</Link>
                </div>
                <div>
                    <Link to='/'>Login</Link>
                </div>
                <div>
                    <Link to='Signup'>Sign-up</Link>
                </div>
            </div>
        </nav>
        <hr />
    </div>
  )
}

export default Header