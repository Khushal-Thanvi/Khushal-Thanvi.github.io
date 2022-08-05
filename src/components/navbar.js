import React from "react";
import '../css/navbar.css';

export function Navbar({ setPage, page }) {
    
    return (
        <div id='nav-bar'>
            <button className='nav-button' onClick={() => setPage('About')}><span className={page === 'About'? 'nav_sapn active': 'nav_sapn'}>About </span></button>
            <button className='nav-button' onClick={() => setPage('Experience')}><span className={page === 'Experience'? 'nav_sapn active': 'nav_sapn'}>Experience </span></button>
            <button className='nav-button' onClick={() => setPage('Skills')}><span className={page === 'Skills'? 'nav_sapn active': 'nav_sapn'}>Skills </span></button>
        </div>
    );
}