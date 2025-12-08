import { NavLink, useLocation } from "react-router-dom"
import "./index.scss"
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import { faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "motion/react"

export default function Navigation() {
  const { pathname } = useLocation()
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.125,
        staggerChildren: 0.125,
      },
    },
  }
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
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
        staggerDirection: pathname === "/experience" ? -1 : 1,
      },
    },
  }
  const linkVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.25,
      },
    },
  }
  return (
    <header>
      <div className="top">
        <div className="start">
          <NavLink to="/">
            <motion.h1 animate="visible" initial="hidden" variants={sentenceVariants}>
              <code>
                <div>
                  {"Mikai".split("").map((letter, _) => (
                    <motion.span key={letter} variants={letterVariants}>
                      {letter}
                    </motion.span>
                  ))}
                </div>
                <div>
                  {"Somerville".split("").map((letter, _) => (
                    <motion.span key={letter} variants={letterVariants}>
                      {letter}
                    </motion.span>
                  ))}
                </div>
              </code>
            </motion.h1>
          </NavLink>
        </div>
        <motion.div
          animate="visible"
          className="middle"
          initial="hidden"
          variants={linkContainerVariants}
        >
          <motion.div
            className={`nav-link ${pathname === "/" ? "active" : ""}`}
            variants={linkVariants}
          >
            <NavLink to="/">
              <div className="line" />
              <p>Home</p>
            </NavLink>
          </motion.div>
          <motion.div
            className={`nav-link ${pathname === "/about" ? "active" : ""}`}
            variants={linkVariants}
          >
            <NavLink to="/about">
              <div className="line" />
              <p>About Me</p>
            </NavLink>
          </motion.div>
          <motion.div
            className={`nav-link ${pathname === "/experience" ? "active" : ""}`}
            variants={linkVariants}
          >
            <NavLink to="/experience">
              <div className="line" />
              <p>Experience</p>
            </NavLink>
          </motion.div>
        </motion.div>
      </div>
      <div className="end">
        <a
          alt="LinkedIn"
          className="nav-link logo-link"
          href="https://linkedin.com/in/mikaisomerville"
          title="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          alt="GitHub"
          className="nav-link logo-link"
          href="https://github.com/mikais13"
          title="Github"
        >
          <FontAwesomeIcon icon={faSquareGithub} />
        </a>
        <a
          alt="Resume"
          className="nav-link logo-link"
          href="/Mikai_Somerville_Resume.pdf"
          title="Resume"
        >
          <FontAwesomeIcon icon={faFile} />
        </a>
      </div>
    </header>
  )
}
