import { Link } from 'react-router-dom'
import React from 'react'
import './Navbar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li><Link to='/'>Binomie</Link></li>
                <li><Link to='/places'>Places</Link></li>
            </ul>
        </div>
    )
}

export default NavBar