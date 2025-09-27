import { Link } from 'react-router-dom';
import React from 'react';
function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li className="title"><Link to="/">Jacob Chan</Link></li>
                <div className="nav-links">
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/fun-corner">Fun Corner</Link></li>
                </div>
            </ul>
        </nav>
    );
};

export default Nav;