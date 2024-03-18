import React, { useState } from 'react'
import Logo from '../assets/saic_logo.jpg';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} width={60} height={60} align='left' />
        </div>
        <div className='rightSide'>
            <ul className='nav-menu'>
                <li><Link style={{textDecoration: 'none',color:'white'}} to={'/InstituteHome'}>Institute Home</Link></li>
                <li><Link style={{textDecoration: 'none',color:'white'}} to={'/'}>Home</Link></li>
                <li><Link style={{textDecoration: 'none',color:'white'}} to={'/About'}>About SAIC</Link></li>
                <li><Link style={{textDecoration: 'none',color:'white'}} to={'/Initiative'}>Initiatives</Link></li>
                <li><Link style={{textDecoration: 'none',color:'white'}} to={'/Publication'}>Publication</Link></li>
                <li><Link style={{textDecoration: 'none',color:'white'}} to={'/Team'}>The Team</Link></li>
            </ul>
        </div>
    </div>
  )
}
