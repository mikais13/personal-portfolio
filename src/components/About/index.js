import React from "react";
import { motion } from "motion/react";
import ExperienceList from "../ExperienceList";
import PagePill from "../Navigation/PagePill";
import PageSection from "../PageSection";

const education = [
    {
        title: "BSc in Computer Science",
        categories: ["Tertiary"],
        company: "University of Auckland",
        location: "Auckland, New Zealand",
        startDate: "2024",
        endDate: "2026",
        skills: ["Computer Science", "Mathematics", "Statistics"],
        description: [
            "Currently studying my penultimate year of a Bachelor of Science majoring in Computer Science.",
            "9.0/9.0 GPA - A+ average."
        ]
    },
    {
        title: "Young Scholar's Programme",
        categories: ["Tertiary"],
        company: "University of Auckland",
        location: "Auckland, New Zealand",
        endDate: "2023",
        skills: ["Mathematics"],
        description: "Earned an A+ in MATHS 199: Advancing in Mathematics."
    },
    {
        title: "NCEA and NZ Scholarship",
        categories: ["Secondary"],
        company: "Katikati College",
        location: "Katikati, Bay of Plenty, New Zealand",
        startDate: "2017",
        endDate: "2023",
        skills: ["Computer Science", "Mathematics", "Biology", "Physics", "Chemistry"],
        description: [
            "Achieved Outstanding Scholarship (Top 27 Students) in Biology, and Scholarship (Top 236 Students) in Physics).",
            "Awarded Dux in 2023 for Highest Academic Achievement.",
            "First in Level 3 Calculus and Digital Technology (2022), and First in Level 3 Physics and Chemistry (2023).",
            "Gained NCEA Level 1 (2021), Level 2 and Level 3 (2022) endorsed with Excellence."
        ]
    }
]

export default function About() {
    return (
        <motion.div
            className="page-container"
            layoutId="page"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <PageSection title="About Me">
                <p>Kia Ora, I'm Mikai Somerville, a penultimate year Computer Science student at the University of Auckland. I grew up in the small town of Katikati before coming to Auckland to pursue my passion for Computer Science and Software Development.</p>
            </PageSection>
            <PageSection title="Education">
                <ExperienceList id="education" experiences={education} />
            </PageSection>
            <PagePill left="home" middle="experience" right="experience" />
        </motion.div>
    );
}