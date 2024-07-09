"use client"

import React, {useState} from 'react'
import classes from './page.module.css'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg'
import menu from '../../../public/images/icon-menu.svg'
import close from '../../../public/images/icon-menu-close.svg'


const Nav = () => {

  const [sideNavVisible, setSideNavVisible] = useState(false);

  const toggleSideNav = () => {
    setSideNavVisible(!sideNavVisible);
  };

  return (
    <nav className={`${classes.navCont}`}>
      <Image src={logo} alt="logo" className={classes.logo} />        
      <ul className={`${classes.listCont}`}>
        <li className={`${classes.hideTop}`}><a href="#">Home</a></li>
        <li className={`${classes.hideTop}`}><a href="#">New</a></li>
        <li className={`${classes.hideTop}`}><a href="#">Popular</a></li>
        <li className={`${classes.hideTop}`}><a href="#">Trending</a></li>
        <li className={`${classes.hideTop}`}><a href="#">Categories</a></li>
        <li>
          <Image 
            src={menu} 
            alt="menu button" 
            className={classes.menu} 
            width={32} 
            height={18} 
            onClick={toggleSideNav} // Add this line to handle the click
          />
        </li>
      </ul>
      <ul className={`${classes.sideNav} ${sideNavVisible ? '' : classes.hideSide}`}>
        <li>
          <Image 
            src={close} 
            alt="close" 
            className={classes.close} 
            width={18} 
            height={18} 
            onClick={toggleSideNav} // Add this line to handle the click
          />
        </li>  
        <li className={`${classes.showSide}`}><a href="#">Home</a></li>
        <li className={`${classes.showSide}`}><a href="#">New</a></li>
        <li className={`${classes.showSide}`}><a href="#">Popular</a></li>
        <li className={`${classes.showSide}`}><a href="#">Trending</a></li>
        <li className={`${classes.showSide}`}><a href="#">Categories</a></li>
      </ul>
      <div className={`${classes.overlay} ${sideNavVisible ? '' : classes.hideSide}`} onClick={toggleSideNav}></div>
    </nav>
  );
}

export default Nav
