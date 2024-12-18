import React  from "react";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div className="root">
            <Navigation />
            <div className="main">
                <Outlet />
            </div>
        </div>
    );
}