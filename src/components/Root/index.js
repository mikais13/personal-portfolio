import React  from "react";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";
import "./index.scss";
import "../../utils/loader.scss";
import { AnimatePresence } from "motion/react";

export default function Root() {
    return (
        <div className="root">
            <Navigation />
            <AnimatePresence>
                <div className="main">
                    <Outlet />
                </div>
            </AnimatePresence>
        </div>
    );
}