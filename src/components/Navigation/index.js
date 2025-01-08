import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./index.scss";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation() {
    const { pathname } = useLocation();
    return (
        <header>
            <div className="top">
                <div className={"start"}>
                    <NavLink to="/">
                        <h1><code>Mikai Somerville</code></h1>
                    </NavLink>
                </div>
                <div className="middle">
                    <div className={`nav-link ${pathname === "/" ? "active" : ""}`}>
                        <NavLink to="/">
                            <div className="line"></div>
                            <p>Home</p>
                        </NavLink>
                    </div>
                    <div className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
                        <NavLink to="/about">
                            <div className="line"></div>
                            <p>About Me</p>
                        </NavLink>
                    </div>
                    <div className={`nav-link ${pathname === "/experience" ? "active" : ""}`}>
                        <NavLink to="/experience">
                            <div className="line"></div>
                            <p>Experience</p>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="end">
                <a className="nav-link logo-link" href="https://linkedin.com/in/mikaisomerville" title="LinkedIn" alt="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className="nav-link logo-link" href="https://github.com/mikais13" title="Github" alt="GitHub">
                    <FontAwesomeIcon icon={faSquareGithub} />
                </a>
                <a className="nav-link logo-link" href="" title="Resume" alt="Resume">
                    <FontAwesomeIcon icon={faFile} />
                </a>
            </div>
        </header>
    );
}