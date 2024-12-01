import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="start">
                <h1><code>Mikai Somerville</code></h1>
            </div>
            <div className="middle">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/experience">Experience</NavLink>
            </div>
            <div className="end">
                <a className="tiny-link" href="linkedin.com">L</a>
                <a className="tiny-link" href="github.com">G</a>
                <a className="tiny-link" href="">R</a>
            </div>
        </header>
    );
}