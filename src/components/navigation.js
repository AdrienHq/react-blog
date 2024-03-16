import React from "react";
import {Link} from "react-router-dom";
import {Avatar} from "antd";

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

export default function Navigation({user}) {
    return (
        <nav className="site-navigation">
            <span className="menu-title">My blog</span>
            <div className="menu-items">
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <span>
                        <Avatar src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' size={38}/>
                        <span className="menu-item-avatar">
                            {`${user.firstName} ${user.lastName}`}
                        </span>
                </span>
            </div>
        </nav>
    );
}