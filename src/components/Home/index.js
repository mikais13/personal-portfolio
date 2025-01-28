import React from "react";
import Loader from 'react-loaders';
import { motion } from 'motion/react';
import PagePill from "../Navigation/PagePill";

export default function Home() {
    return (
        <>
            <motion.div
                className="page-container"
                layoutId="home-page"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="title-container">
                    <h1>Hey, I'm Mikai</h1>
                </div>
                <div className="content-container">
                    <p>
                        Welcome to my portfolio!
                        <br />
                        I'm a current penultimate year Computer Science student at The University of Auckland, with a passion for solving problems and creating things through code.
                    </p>
                </div>
                <div className="title-container">
                    <h2>At The Moment</h2>
                </div>
                <div className="content-container">
                    <p>
                        I'm currently looking for internships and graduate roles in software development and data science.
                        <br />
                        I'm also working on a few side projects, including a new version of this website!
                    </p>
                </div>
                <PagePill left="experience" middle="about" right="about" />
            </motion.div>
            <Loader type="ball-scale" active={false} />
        </>
    );
}