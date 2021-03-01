import React from 'react';
import logo from '../../images/ipl-logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="d-flex p-2 header-container">
            <div className="col-4">
                  <img  src={logo} alt=""/>
            </div>
            <div className="col-8 text-white">
                <h1 >IPL AUCTION 2021</h1>
            </div>
        </div>
    );
};

export default Header;