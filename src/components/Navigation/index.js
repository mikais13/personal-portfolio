import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
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
                <a className="tiny-link" href="https://linkedin.com/in/mikaisomerville">L</a>
                <a className="tiny-link" href="https://github.com/mikais13">G</a>
                <a className="tiny-link" href="">R</a>
            </div>
        </header>
    );
}