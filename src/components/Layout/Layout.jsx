// src/components/Layout/Layout.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <aside className="side-menu">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </aside>
            <main className="content">
                {children}
            </main>
        </div>
    );
};

export default Layout;
