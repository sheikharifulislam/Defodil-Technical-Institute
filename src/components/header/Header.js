import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/DTI-Logo.png';
import './Header.css';

const Header = () => {
    return (
        <header className="style-header">
            <div className="container">
                <div className="logo-and-nav">
                    <div className="institute-logo">
                        <img src={logo} alt="Institute Logo" />
                    </div>
                    <div className="menu">
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/home">home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/all-departments">our departments</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/photo-gallery">photo gallery</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">about</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;