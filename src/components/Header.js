import React from 'react';
import logo from '../img/logo-w.png';
import Button  from './utils/Button';

const Header = () => {
    return(
        <header className="header">
            <div className="header__logo-box">
               <img src={logo} alt="Logo" className="header__logo"/>
            </div>
            <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Indoors</span>
                <span className="heading-primary--sub">get prepare for the outside</span>
            </h1>
            <Button
             css="btn btn--white btn--animated"
             text="Discover indoor climbing"
            />
            </div>
        </header>
    
    )
}

export default Header;