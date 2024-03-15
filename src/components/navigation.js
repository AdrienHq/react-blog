import React from "react";
import {Link} from "react-router-dom";

const navLinks = [
    {
        title: 'Home',
        path: '/home'
    }, {
        title: 'Blog',
        path: '/blog'
    }, {
        title: 'Contact',
        path: '/contact'
    }, {
        title: 'Login',
        path: '/login'
    },
]

export default function Navigation() {
    return (
        <nav className="site-navigation">
            <span>My blog</span>
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}