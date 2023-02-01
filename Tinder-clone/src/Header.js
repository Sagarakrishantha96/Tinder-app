import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize="large" className='header__icon'/>
        </IconButton>  
         
        <img
          className="header__logo"
          src="http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png"
          alt="tinder logo"
        />
        <IconButton>
            <ForumIcon fontSize="large" className='header__icon'/>
        </IconButton>  
    </div>)
}

export default Header;
