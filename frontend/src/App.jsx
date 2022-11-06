import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Header from './components/header'
import Footer from './components/footer'
import Signup from './pages/signup'

const App = () => {
  return (
    <div>
        <div className='main-holders'>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </Router>
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
  )
}

export default App