import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import './style.css'

export default function App() {
    return (
        <div className='main-container'>
            <Navbar />
            App
            <Home />
            <Footer />
        </div>
    )
}
