import React from "react";
import Loader from "react-loaders";
import ExperienceList from "./ExperienceList";
import "./index.scss";

export default function ExperiencePage() {
    return (
        <>
            <div className="page-container">
                <div className="title-container">
                    <h1>Experience</h1>
                </div>
                <div className="content-container">
                    <ExperienceList/>
                </div>
            </div>
            <Loader type="ball-scale" active={false}/>
        </>
    );
}