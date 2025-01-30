import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function PagePill({ left, middle, right }) {
    const [active, setActive] = useState("");

    return (
        <AnimatePresence>
            <motion.div className="page-link" layoutId="page-pill" transition={{ visualDuration: 0.225, type: "spring", bounce: 0.3 }}>
                <div className="line">
                    <NavLink to={`/${left === "home" ? "" : left}`} className={`left ${active !== "" ? "active" : ""}`} onMouseEnter={() => setActive("left")} onMouseLeave={() => setActive("")}>
                        <p className="inner" layout>
                            <FontAwesomeIcon icon={faArrowLeft} />
                            {left[0].toUpperCase() + left.slice(1)}
                        </p>
                    </NavLink>
                    <NavLink to={`/${middle === "home" ? "" : middle}`} className={`middle ${active !== "" ? "active" : ""}`} onMouseEnter={() => setActive("middle")} onMouseLeave={() => setActive("")}>
                        <p className="inner" layout>
                            Next Page
                        </p>
                    </NavLink>
                    <NavLink to={`/${right === "home" ? "" : middle}`} className={`right ${active !== "" ? "active" : ""}`} onMouseEnter={() => setActive("right")} onMouseLeave={() => setActive("")}>
                        <p className="inner" layout>
                            {right[0].toUpperCase() + right.slice(1)}
                            <FontAwesomeIcon icon={faArrowRight} />
                        </p>
                    </NavLink>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
