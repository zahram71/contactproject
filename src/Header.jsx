import React from 'react';

import { NavLink } from "react-router-dom";
function Header() {
    return (
        <nav>
            <h1 className="brand-name">Contacts Projects</h1>
            <ul className="links-container">
                {/* <li className="link"><NavLink to="/">Home</NavLink></li> */}
                <li className="link"><a>Contacts</a></li>
                <li className="link"><a>About</a></li>
                {/* <li className="link" ><NavLink to="Login">login</NavLink></li> */}
            </ul>
            <div className="hamburger">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </nav>

    );
}

export default Header;