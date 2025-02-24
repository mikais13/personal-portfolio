import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./index.scss";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

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
    const linkContainerVariants = {
        hidden: {
            opacity: 1,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.75,
                staggerChildren: 0.25,
                staggerDirection: pathname === "/experience" ? -1 : 1
            }
        }
    }
    const linkVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.25
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
                <motion.div
                    className="middle"
                    variants={linkContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className={`nav-link ${pathname === "/" ? "active" : ""}`}
                        variants={linkVariants}
                    >
                        <NavLink to="/">
                            <div className="line"></div>
                            <p>Home</p>
                        </NavLink>
                    </motion.div>
                    <motion.div
                        className={`nav-link ${pathname === "/about" ? "active" : ""}`}
                        variants={linkVariants}
                    >
                        <NavLink to="/about">
                            <div className="line"></div>
                            <p>About Me</p>
                        </NavLink>
                    </motion.div>
                    <motion.div
                        className={`nav-link ${pathname === "/experience" ? "active" : ""}`}
                        variants={linkVariants}
                    >
                        <NavLink to="/experience">
                            <div className="line"></div>
                            <p>Experience</p>
                        </NavLink>
                    </motion.div>
                </motion.div>
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
        </header>
    );
}