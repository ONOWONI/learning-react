import React from 'react';
import logo from '../logo.svg';


function Header() {
return (
    <header className='center'>
        <nav className='nav-container'>
            <img src={logo} className="App-logo" alt="logo" />
            <ul className='nav-links'>
            <li>Pricing</li>
            <li>About</li>
            <li>Content</li>
            </ul>
        </nav>
    </header>
)}

export default Header;