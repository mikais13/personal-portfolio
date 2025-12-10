import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function PagePill({ left, middle, right }) {
  const [active, setActive] = useState("")

  return (
    <AnimatePresence>
      <motion.div
        className="page-link"
        layoutId="page-pill"
        transition={{ visualDuration: 0.225, type: "spring", bounce: 0.3 }}
      >
        <div className={`line ${active !== "" && "active"}`}>
          <NavLink
            className={`left ${active !== "" ? "active" : ""}`}
            onMouseEnter={() => setActive("left")}
            onMouseLeave={() => setActive("")}
            to={`/${left === "home" ? "" : left}`}
          >
            <p className="inner">
              <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
              {left[0].toUpperCase() + left.slice(1)}
            </p>
          </NavLink>
          <NavLink
            className={`middle ${active !== "" ? "active" : ""}`}
            onMouseEnter={() => setActive("middle")}
            onMouseLeave={() => setActive("")}
            to={`/${middle === "home" ? "" : middle}`}
          >
            <p className="inner">Next Page</p>
          </NavLink>
          <NavLink
            className={`right ${active !== "" ? "active" : ""}`}
            onMouseEnter={() => setActive("right")}
            onMouseLeave={() => setActive("")}
            to={`/${right === "home" ? "" : middle}`}
          >
            <p className="inner">
              {right[0].toUpperCase() + right.slice(1)}
              <FontAwesomeIcon className="arrow" icon={faArrowRight} />
            </p>
          </NavLink>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
