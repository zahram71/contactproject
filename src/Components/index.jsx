import React from 'react';
import { NavLink } from 'react-router-dom';
function Layout({children}) {
    return (
        <>
            <nav>
                <h1 className="brand-name">Contacts Projects</h1>
                <ul className="links-container">
                    <li className="link"><NavLink to="/">Home</NavLink></li>
                    <li className="link"><NavLink to="/contact">Contacts</NavLink></li>
                    <li className="link"><NavLink to="/about">About</NavLink></li>
                    <li className="link" ><NavLink to="Login">login</NavLink></li>
                </ul>
                <div className="hamburger">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </nav>
            {children}
            
        </>
    );
}

export default Layout;