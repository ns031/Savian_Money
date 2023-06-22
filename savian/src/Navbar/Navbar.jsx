import React, { useState } from "react";
// import { NavLink } from 'react-router-dom';
import '../Navbar/navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';

const Navbar=()=>{
    const[showMediaIcons, setShowMediaIcons] = useState();

    return(
        <>
        <nav className="main-nav">
            <div className="logo">
                <h2>
                    <span>S</span>avian
                    <span>M</span>oney
                </h2>
            </div>
            <div className= {showMediaIcons ? "mobile-menu-link" :"menu-link"}>
                <ul>
                    <li> <a href="#/">Home</a> </li>
                    <li> <a href="#about">About</a> </li>
                    <li> <a href="#builders">Builders</a> </li>
                    <li> <a href="#contact">Contact Us</a> </li>
                </ul>
            </div>
            <div className="hamburger-menu">
                <a href="#hamburger" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu />
                </a>
            </div>
        </nav>
        </>
    )
}

export default Navbar;

    // return(
    //     <nav className='navbar-container'>
    //         <NavLink to='/'>Home</NavLink>
    //         <NavLink to='/about'>About</NavLink>
    //         <NavLink to='/builders'>Builders</NavLink>
    //         <NavLink to='contact'>Contact Us</NavLink>
    //     </nav>
    // );

// import React from 'react';
// import {Link} from 'react-router-dom';
// import './navbar.css';

// const Nav = () => {
//     return (
//         <div className='navbar-container'>
//             <ul className='nav-ul'>
//                 <li><Link to="/" className="nav-brand">Home</Link></li>
//                 <li><Link to="/about" className="nav-brand">About</Link></li>
//                 <li><Link to="/profile" className="nav-brand">Profile</Link></li>
//                 <li><Link to="/logout" className="nav-brand">Logout</Link></li>
//                 <li><Link to="/signup" className="nav-brand-collapse">Sign Up</Link></li>
//             </ul>
//         </div>
//     )
// }

// export default Nav;