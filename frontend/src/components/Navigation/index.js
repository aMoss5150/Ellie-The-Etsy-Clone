import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SearchBar from '../SearchBar';
import { useCurrency } from '../../context/CurrencyContext'
import logo1 from '../../images/mustang-burnout-logo.png'
import './Navigation.css';

function Navigation({ isLoaded }) {
    const { setCurrency } = useCurrency()
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink className='nav__login-link' to="/login">Log In</NavLink>
                <NavLink className='nav__signup-link' to="/signup">Sign Up</NavLink>

            </>
        );
    }

    return (

        <nav className="navigation__bar">
            <span className='logo__span'><img className='logo__1' src={logo1} alt="" /></span>
            <NavLink className='nav__home-link' exact to="/">Home</NavLink>
            <SearchBar />
            {isLoaded && sessionLinks}
            <span id="currency__selector">

                <span id="usd" className='currency__selectors' onClick={() => setCurrency('usd')}>
                    USD
                </span>
                |
                <span id='gbr' className='currency__selectors' onClick={() => setCurrency('gbp')}>
                    GBR
                </span>

            </span>


        </nav>

    );
}

export default Navigation;