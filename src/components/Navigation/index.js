import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                <a className="tiny-link" href="https://linkedin.com/in/mikaisomerville" alt="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className="tiny-link" href="https://github.com/mikais13" alt="GitHub">
                    <FontAwesomeIcon icon={faSquareGithub} />
                </a>
                <a className="tiny-link" href="" alt="Resume">
                    <FontAwesomeIcon icon={faFile} />
                </a>
            </div>
        </header>
    );
}