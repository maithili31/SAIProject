import React, { useState } from 'react'
import Logo from '../assets/saic_logo.jpg';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} width={45} height={45} align='left' />
        </div>
        <div className='rightSide'>
            <ul className='nav-menu'>
                <li><Link style={{textDecoration: 'none',color:'white'}} to={'https://nitdgp.ac.in/'}>Institute Home</Link></li>
                <li><Link style={{textDecoration: 'none',color:'white'}} to={'/'}>Home</Link></li>
                <li><Link style={{textDecoration: 'none',color:'white'}} to={'/'}>About SAIC</Link></li>
                <div class="dropdown">
                  <button class="dropbtn">
                  <li><Link style={{textDecoration: 'none',color:'white'}} to={'/Initiative'}>Initiatives</Link></li>
                    <i class="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Student Alumni Mentorship Programme(StAMP)</a>
                    <a href="#">Alumni Internship Mentorship(AIM)</a>
                    <a href="#">Alumni Recruit Connect(AIC)</a>
                    <a href="#">NITDian Branding</a>
                    <a href="#">NITDian Brand Store</a>
                    <a href="#">NIT Campus Tour</a>
                    <a href="#">Alumni Grand Meet</a>
                    <a href="#">Student Alumni Meet</a>
                  </div>
                </div>
                <li><Link style={{textDecoration: 'none',color:'white'}} to={'https://alumnitdgp.in/uploads/ENCORE2020.pdf'}>Publication</Link></li>
                <li><Link style={{textDecoration: 'none',color:'white'}} to={'/Team'}>The Team</Link></li>
            </ul>
        </div>
    </div>
  )
}
