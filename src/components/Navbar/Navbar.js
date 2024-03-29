import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="header__nav">
            <div className="nav__content">
                <h2 className="logo">Cedric NGOUPANDE</h2>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><NavLink to="/home" className="nav__link">Home</NavLink></li>
                        <li className="nav__item"><NavLink to="/courses" className="nav__link">Courses</NavLink></li>
                        <li className="nav__item"><NavLink to="/about" className="nav__link">About</NavLink></li>
                        <li className="nav__item"><NavLink to="/jobs" className="nav__link">Jobs</NavLink></li>
                        <li className="nav__item"><NavLink to="/blog" className="nav__link">Blog</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="header__buttons">
                <Link to="/login" className="btn btn-login">Login</Link>
                <Link to="/signup" className="btn btn-signup">Signup</Link>
            </div>
        </div>);
};

export default Navbar;
