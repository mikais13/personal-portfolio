import React from "react";
import ExperienceList from "./ExperienceList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import { motion } from "motion/react";
import PagePill from "../Navigation/PagePill";

const roles = [
    {
        title: "Research and Development Intern",
        categories: ["Internship", "Professional", "Research"],
        company: "PGG Wrightson",
        location: "Te Puke, New Zealand",
        startDate: "Nov 2024",
        endDate: "Feb 2025",
        skills: ["Python", "OpenCV", "Research and Development", "Data Analysis", "Excel"],
        description: "Developed industry-first computer vision scripts in Python using OpenCV to find the size of kiwifruit with 100% accuracy using RGB-D imaging. Completed research project including literature review, report and presentation to business leaders. Assisted experiential trial of kiwifruit biostimulants, performing data analysis using Excel"
    }
];

const projects = [
    {
        title: "Portfolio Website",
        link: "https://www.github.com/mikais13",
        categories: ["Web Development", "Personal"],
        startDate: "Nov 2024",
        endDate: "Present",
        skills: ["React", "JavaScript", "HTML", "CSS", "SASS", "React-Router"],
        description: "A simple portfolio website to showcase my experience and projects. "
    },
    {
        title: "Club Management System",
        link: "https://php.kkc.school.nz/CHG/2023_Y13%20Exemplars/AS91902/",
        categories: ["Academic", "Web Development"],
        startDate: "2023",
        skills: ["PHP", "SQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
        description: "A full-stack web application to manage school clubs, including a database, login system, and CRUD operations. My project for AS91902, the NCEA Level 3 standard 'Use complex techniques to develop a database'."
    }
];

export default function ExperiencePage() {
    return (
        <motion.div
            className="page-container"
            layoutId="page"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            layoutScroll
        >
            <div className="title-container">
                <h1>Experience</h1>
                <a href="" className="resume-link">View Full Resume <FontAwesomeIcon icon={faArrowUp} /></a>
            </div>
            <div className="content-container">
                <ExperienceList id="roles" experiences={roles} />
            </div>
            <div className="title-container">
                <h1>Projects</h1>
            </div>
            <div className="content-container">
                <ExperienceList id="projects" experiences={projects} />
            </div>
            <PagePill left="about" middle="home" right="home" />
        </motion.div>
    );
}