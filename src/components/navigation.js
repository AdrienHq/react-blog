import React from "react";

const navLinks = [
    {
        title: 'Home',
        path: '/'
    }, {
        title: 'Recipes',
        path: '/recipes-list'
    }, {
        title: 'Fridge',
        path: '/fridge'
    }, {
        title: 'Login',
        path: '/login'
    }, {
        title: 'Admin',
        path: '/admin'
    },

]

export default function Navigation() {
    return (
        <nav className="site-navigation">
            <span>My blog</span>
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a className="nav-link" href={link.path}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}