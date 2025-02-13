import React from "react";
import { motion } from 'motion/react';
import PagePill from "../Navigation/PagePill";
import PageSection from "../PageSection";

export default function Home() {
    return (
        <motion.div
            className="page-container"
            layoutId="page"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <PageSection title="Kia Ora!">
                <p>
                    Welcome to my portfolio!
                    <br />
                    I'm a current penultimate year Computer Science student at The University of Auckland, with a passion for solving problems and creating things through code.
                </p>
            </PageSection>
            <PageSection title="At The Moment">
                <p>
                    I'm currently looking for internships and graduate roles in software development and data science.
                    <br />
                    I'm also working on a few side projects, including a new version of this website!
                </p>
            </PageSection>
            <PagePill left="experience" middle="about" right="about" />
        </motion.div>
    );
}