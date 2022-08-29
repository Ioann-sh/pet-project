import React from "react";
import {NavLink} from "react-router-dom";

import './Navbar.scss'

const Navbar = () => {
    return (
        <div className='Navbar'>
        <ul>
            <li>
                <NavLink to='/profile' className='Navbar_item_profile'>Profile</NavLink>
            </li>

            <li>
                <NavLink to='/news' className='Navbar_item_news'>News</NavLink>
            </li>

            <li>
                <NavLink to='/dialogs' className='Navbar_item_dialogs'>Messages</NavLink>
            </li>
            <hr></hr>
            <li>
                <NavLink to='/settings' className='Navbar_item_settings'>Settings</NavLink>
            </li>
        </ul>
        </div>
    )
}

export default Navbar;