import React, { useLayoutEffect } from "react";
import Navigation from "../Navigation";
import { Outlet, useLocation } from "react-router-dom";
import "./index.scss";

export default function Root() {
    const { pathname } = useLocation();
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="root">
            <Navigation />
            <div className="main">
                <Outlet />
            </div>
        </div>
    );
}