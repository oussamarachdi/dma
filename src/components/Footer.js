import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='f-container'>
                <div className='row'>
                <div className='footer-col'>
                    <h4>Company</h4>
                    <ul>
                        <li><a href='/'>about us</a></li>
                        <li><a href='/'>our services</a></li>
                        <li><a href='/'>privacy policy</a></li>
                        <li><a href='/'>affiliate program</a></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>Get help</h4>
                    <ul>
                        <li><a href='/'>FAQ</a></li>
                        <li><a href='/'>Shipping</a></li>
                        <li><a href='/'>returns</a></li>
                        <li><a href='/'>Order status</a></li>
                        <li><a href='/'>Payment options</a></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>Services</h4>
                    <ul>
                        <li><a href='/'>Plombier</a></li>
                        <li><a href='/'>Hamza</a></li>
                        <li><a href='/'>mecanique</a></li>
                        <li><a href='/'>electrisian</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
