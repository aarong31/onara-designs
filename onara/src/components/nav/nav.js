import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {ReactComponent as Logo} from '../../media/oLogo.svg';
import { auth } from '../../firebase-utils/firebase.utils';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import './nav.scss'

const Nav = ({ currentUser, hidden }) => (
<nav className="navbar pl-6 pb-4 pt-3" role="navigation" aria-label="main navigation">
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
           <div className="navbar-end pt-5 pr-6">
               <Link to="/shop">
                    <div className="navbar-item subtitle has-text-black is-5 pt-4 navHover">
                        Shop
                    </div>
                </Link>
                <Link to="/contact">
                <div className="navbar-item subtitle has-text-black is-5 pt-4 navHover">
                        Contact
                    </div>
                </Link>
                 {currentUser ? (
                    <Link to="">
                        <div className='subtitle navbar-item has-text-black is-5 pt-4 navHover' onClick={() => auth.signOut()}>
                        SIGN OUT
                        </div>
                   </Link>
                 ) : (
                    <Link to="/signin">
                        <div className="navbar-item subtitle has-text-black is-5 pt-4 navHover">
                            Sign-In
                        </div>
                    </Link>
                    )}
                    <CartIcon /> 
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    </nav>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
  });
  
  export default connect(mapStateToProps)(Nav);