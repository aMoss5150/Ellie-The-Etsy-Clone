import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SearchBar from '../SearchBar';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink className='nav__links' to="/login">Log In</NavLink>
                <NavLink className='nav__links' to="/signup">Sign Up</NavLink>

            </>
        );
    }

    return (

        <nav className="navigation__bar">
            <NavLink className='nav__links' exact to="/">Home</NavLink>
            <SearchBar />
            {isLoaded && sessionLinks}

        </nav>

    );
}

export default Navigation;