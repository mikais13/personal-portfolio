import React from "react";
import { motion } from "motion/react";
import PagePill from "../Navigation/PagePill";

export default function About() {
    return (
        <motion.div
            className="page-container"
            layoutId="page"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="title-container">
                <h1>About Me</h1>
            </div>
            <div className="content-container">
                <p>This is the about page.</p>
            </div>
            <PagePill left="home" middle="experience" right="experience" />
        </motion.div>
    );
}