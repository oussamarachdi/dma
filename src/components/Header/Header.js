import React from 'react'
import './Header.css'
import Logo from "./../../images/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt=''/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Sign Up</Link></li>
                <li><Link to="/">LogIn</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header
