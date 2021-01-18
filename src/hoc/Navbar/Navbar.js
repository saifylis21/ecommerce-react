import React from 'react';

import classes from './Navbar.module.css';
import NavigationItem from '../../components/Navigation/NavigationItem/NavigationItem';

const Navbar = (props) => (
    <div>
        <ul className={classes.Navbar}>
            <NavigationItem link="/">Home</NavigationItem>
            <NavigationItem link="/about">About</NavigationItem>
            <NavigationItem link="/contact">Contact</NavigationItem>
            <NavigationItem link="/signup">Sign Up</NavigationItem>
            <NavigationItem link="/login">Log In</NavigationItem>
        </ul>
        <main>{props.children}</main>
    </div>
)

export default Navbar;