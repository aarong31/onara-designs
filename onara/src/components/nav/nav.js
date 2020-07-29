import React from 'react';

import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../media/oLogo.svg';
import './nav.scss'

const Nav = () => (
<nav className="navbar pl-6 pb-6 pt-5" role="navigation" aria-label="main navigation">
         <div className="navbar-brand logo-container pl-6">
            <Link to="/">
                <Logo className="logo"/>
            </Link>
         <div
           className={'navbar-burger'}
           role="button" aria-label="menu" data-target="navmenu" >
           <span aria-hidden="true"></span>
           <span aria-hidden="true"></span>
           <span aria-hidden="true"></span>
         </div>
         </div>
         
         
         <div id="navmenu" className={'navbar-menu pr-5'}>
         <div className="navbar-start">
           
         </div>
           <div className="navbar-end pt-2 pr-6">
               <Link to="/shop">
                <a href="/shop" className="navbar-item">
                    <div className="subtitle is-5 pt-4">
                        Shop
                    </div>
                </a>
                </Link>
                <Link to="/contact">
                <a href="/contact" className="navbar-item ">
                    <div className="subtitle is-5 pt-4">
                        Contact
                    </div>
                </a>
                </Link>
                <Link to="/signin">
                <a href="/signin" className="navbar-item ">
                    <div className="subtitle is-5 pt-4">
                        Sign-In
                    </div>
                </a>
                </Link>
           </div>
         </div>
    </nav>
)

export default Nav;
