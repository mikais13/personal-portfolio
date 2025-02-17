import React from "react";
import ExperienceList from "../ExperienceList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../experienceList.scss";
import { motion } from "motion/react";

import PagePill from "../Navigation/PagePill";
import PageSection from "../PageSection";

const roles = [
    {
        title: "Research and Development Intern",
        categories: ["Internship", "Professional", "Research"],
        company: "PGG Wrightson",
        location: "Te Puke, New Zealand",
        startDate: "Nov 2024",
        endDate: "Feb 2025",
        skills: ["Python", "OpenCV", "NumPy", "Research and Development", "Data Analysis", "Excel"],
        description: [
            "Developed an industry-first computer vision program using OpenCV and Python as a proof-of-concept to find kiwifruit size using RGB-D imaging technology.",
            "Conducted a research project, including a literature review, scientific report and presentation.",
            "Performed data analysis on all parts of the project using Excel.",
            "As a part of my project, I also aided in experimental trials for products, such as kiwifruit biostimulants, and spent time in the retail store and with technical representatives."
        ]
    }
];

const projects = [
    {
        title: "Portfolio Website",
        link: "https://github.com/mikais13/personal-portfolio",
        categories: ["Web Development", "Personal"],
        startDate: "2024",
        endDate: "Present",
        skills: ["React", "JavaScript", "Sass", "React Router", "Motion", "HTML", "CSS"],
        description: [
            "Developed this portfolio website to showcase more about myself, my skills, and experiences.",
            "Designed and developed a responsive website using React with React Router, and Sass, along with Motion.",
            "Deployed using Vercel and a custom domain."
        ],
    },
    {
        title: "Sequence",
        link: "https://github.com/mikais13/Sequence-CS130",
        categories: ["Desktop App", "Academic"],
        endDate: "Oct 2024",
        skills: ["Python", "Tkinter"],
        description: [
            "Developed a GUI desktop application for a Connect-4 style game according to the COMPSCI 130 assignment specifications.",
            "Implemented a GUI using Tkinter, and a game engine using Python."
        ]
    },
    {
        title: "Club Management System",
        link: "https://github.com/mikais13/Club-Management-Dashboard",
        categories: ["Academic", "Web Development"],
        endDate: "2023",
        skills: ["PHP", "SQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
        description: [
            "A full-stack web application to manage school clubs, including a database, login system, and CRUD operations.",
            "My project for one of my Year 13 Digital Technology assessments."
        ]
    }
];

export default function ExperiencePage() {
    return (
        <motion.div
            className="page-container"
            layoutId="page"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <PageSection title="Experience">
                <a href="" className="resume-link">View Full Resume <FontAwesomeIcon icon={faArrowUp} /></a>
                <ExperienceList id="roles" experiences={roles} />
            </PageSection>
            <PageSection title="Projects">
                <ExperienceList id="projects" experiences={projects} />
            </PageSection>
            <PagePill left="about" middle="home" right="home" />
        </motion.div>
    );
}