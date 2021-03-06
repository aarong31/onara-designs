import React from 'react';

import { Link } from 'react-router-dom';
import './nav-two.scss'

const Nav = () => (
    <div className='hero has-text-centered has-text-white'>
            <Link to="/shop">
                <span className="subtitle is-4 has-text-white has-backgorund-white">
                FREE U.S SHIPPING ON ORDERS $60+! <span className=" shop pl-3">SHOP NOW</span>
                </span>
            </Link> 
    </div>
)

export default Nav;
