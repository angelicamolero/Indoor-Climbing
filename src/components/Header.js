import React from 'react';
import logo from '../img/logo-w.png';
import './header.css';
import Button  from './Button';

const Header = () => {
    return(
        <header className="header">
            <div className="logo-box">
               <img src={logo} alt="Logo" className="logo"/>
            </div>
            <div className="text-box">
            <h1 className="heading-primary">
                <span className="heading-primary-main">Indoors</span>
                <span className="heading-primary-sub">get prepare for the outside</span>
            </h1>
            <Button
             css="btn-white btn-animated"
             text="Discover indoor climbing"
            />
            </div>
        </header>
    
    )
}

export default Header;