import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./index.scss";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { delay } from "motion";

export default function Navigation() {
    const { pathname } = useLocation();
    const sentenceVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.125,
                staggerChildren: 0.125
            }
        }
    }
    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.75
            }
        }
    }
    return (
        <header>
            <div className="top">
                <div className={"start"}>
                    <NavLink to="/">
                        <motion.h1
                            variants={sentenceVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <code>
                                <div>
                                    {/* <h1><code><div>Mikai</div><div>Somerville</div></code></h1> */}
                                    {
                                        "Mikai".split("").map((letter, i) => (
                                            <motion.span key={letter + "-" + i} variants={letterVariants}>{letter}</motion.span>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        "Somerville".split("").map((letter, i) => (
                                            <motion.span key={letter + "-" + i} variants={letterVariants}>{letter}</motion.span>
                                        ))
                                    }
                                </div>
                            </code>
                        </motion.h1>
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
                <a className="nav-link logo-link" href="/Mikai_Somerville_Resume.pdf" title="Resume" alt="Resume">
                    <FontAwesomeIcon icon={faFile} />
                </a>
            </div>
        </header >
    );
}