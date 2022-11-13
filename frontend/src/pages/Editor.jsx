import React from 'react'
import Contact from '../components/Contact'

const Editor = () => {
  return (
    <>
        <div className='mainWrapper'>
            <div className="mainWrapper-left"></div>
            <div className="mainWrapper-right">
                <Contact />
            </div>
        </div>
        <div className="divider"></div>
    </>
  )
}

export default Editor