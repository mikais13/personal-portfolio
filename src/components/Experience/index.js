import React from "react";
import Loader from "react-loaders";
import ExperienceList from "./ExperienceList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
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
                    <a href="" className="resume">View Full Resume <FontAwesomeIcon icon={faArrowUp} /></a>
                </div>
            </div>
            <Loader type="ball-scale" active={false}/>
        </>
    );
}