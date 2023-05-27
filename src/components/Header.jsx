import React from 'react';
import Navbar from './Navbar';
import {FaBars} from 'react-icons/fa'

const Header = () => {
    return (
           

              <div className='header'>
            <FaBars className='header-menu-btn'/>
            <img className='header-logo' src="/images/kztsh-logo.jpg" alt="logo" />
            <h3>КЗТШ</h3>
            <Navbar/>
       </div>
     
    );
}

export default Header;
