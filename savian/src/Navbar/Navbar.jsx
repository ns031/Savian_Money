import { NavLink } from 'react-router-dom';
import '../Navbar/navbar.css';

import React from "react";


const Navbar=()=>{
    return(
        <nav className='Navbar_container'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            


        </nav>
    );
}

export default Navbar;
