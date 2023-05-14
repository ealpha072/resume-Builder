import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Header from './components/header'
import Footer from './components/footer'
import Signup from './pages/signup'
import Home from './pages/Home'
import Create from './pages/Create'
import Templates from './pages/Templates'
import Editor from './pages/Editor'

const App = () => {

    return (
        <div>
            <div className='main-holders'>
                <Router>
                    <Header />
                    <Routes>
                        <Route 
                            path='/' 
                            element={<Login />
                            } 
                        />
                        <Route 
                            path='/signup' 
                            element={<Signup />} 
                        />
                        <Route path='/home' element={<Home />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/templates' element={<Templates />} />
                        <Route path='/editor/' element={<Editor />} />
                    </Routes>
                </Router>
            </div>
            
                <Footer />
            
        </div>
    )
}

export default App