import React from 'react';
import logo from '../img/logo-w.png';
import './header.css';

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
            <a href="" className="btn btn-white btn-animated">Discover indoor climbing</a>
            </div>
        </header>
    
    )
}

export default Header;