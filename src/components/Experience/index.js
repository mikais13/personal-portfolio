import React from "react";
import Loader from "react-loaders";
import ExperienceList from "./ExperienceList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const roles = [
    {
        title: "Research and Development Intern",
        categories: ["Research", "Internship", "Professional"],
        company: "PGG Wrightson",
        location: "Te Puke, New Zealand",
        startDate: "Nov 2024",
        endDate: "Feb 2025",
        skills: ["Research", "Development", "Data Analysis", "OpenCV"],
        description: "Lots of Work"
    },
    {
        title: "Full Stack Developer",
        categories: ["Software Development"],
        company: "WDCC",
        location: "Auckland, New Zealand",
        startDate: "Mar 2025",
        endDate: "Present",
        skills: ["React", "Node.js"],
        description: "Lots of work"
    }
];

const projects = [
    {
        title: "Project 1",
        categories: ["Research", "Internship", "Professional"],
        skills: ["Research", "Development", "Data Analysis", "OpenCV"],
        description: "Lots of Work"
    },
    {
        title: "Project 2",
        categories: ["Research", "Internship", "Professional", "Project 2"],
        skills: ["Research", "Development", "Data Analysis", "OpenCV"],
        description: "Lots of Work"
    }
];

export default function ExperiencePage() {
    return (
        <>
            <div className="page-container">
                <div className="title-container">
                    <h1>Experience</h1>
                    <a href="" className="resume-link">View Full Resume <FontAwesomeIcon icon={faArrowUp} /></a>
                </div>
                <div className="content-container">
                    <ExperienceList id="roles" experiences={roles}/>
                </div>
                <div className="title-container">
                    <h1>Projects</h1>
                </div>
                <div className="content-container">
                    <ExperienceList id="projects" experiences={projects}/>
                </div>
            </div>
            <Loader type="ball-scale" active={false}/>
        </>
    );
}