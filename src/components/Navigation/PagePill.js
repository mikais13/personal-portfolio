import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function PagePill({ left, middle, right }) {
    const [active, setActive] = useState(false);

    return (
        <div className="page-link">
            <div className="line" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                <NavLink to={`/${left}`} className={`left ${active ? "active" : ""}`}>
                    <p className="inner">
                        {left[0].toUpperCase() + left.slice(1)}
                    </p>
                </NavLink>
                <NavLink to={`/${middle}`} className={`middle ${active ? "active" : ""}`}>
                    <p className="inner">
                        Next Page
                    </p>
                </NavLink>
                <NavLink to={`/${right}`} className={`right ${active ? "active" : ""}`}>
                    <p className="inner">
                        {right[0].toUpperCase() + right.slice(1)}
                    </p>
                </NavLink>
            </div>
        </div>
    );
}
