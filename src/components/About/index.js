import React  from "react";
import Loader from "react-loaders";
import { motion } from "motion/react";

export default function About() {
    return (
        <>
            <motion.div 
                className="page-container"
                layoutId="about-page"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="title-container">
                    <h1>About Me</h1>
                </div>
                <div className="content-container">
                    <p>This is the about page.</p>
                </div>
            </motion.div>
            <Loader type="ball-scale" active={false}/>
        </>
    );
}