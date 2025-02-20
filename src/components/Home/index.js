import React from "react";
import { motion } from 'motion/react';
import PagePill from "../Navigation/PagePill";
import PageSection from "../PageSection";
import SummaryList from "./SummaryList";
import "./index.scss";


export default function Home() {
  const summaries = [
    {
      title: "R&D Intern",
      company: "PGG Wrightson",
      description: "Researched a possible application of Computer Vision in the horticulture industry",

    },
    {
      title: "CS Student",
      company: "University of Auckland",
      description: "A penultimate year student studying a Bachelor of Science majoring in Computer Science",
    },
    {
      title: "Sports Fan",
      description: "I love to watch and play sports, especially football, basketball, and golf",
    },
    {
      title: "Footballer",
      description: "I have played football for as long as I can remember",
    },
    {
      title: "Music Lover",
      description: "I love listening to music and have begun collecting vinyl records",
    }
  ];

  return (
    <motion.div
      className="home page-container"
      layoutId="page"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <PageSection title="Kia Ora!">
        <h2 className="intro">
          I'm Mikai,
        </h2>
        <h3 className="intro">
          A University of Auckland Computer Science Student
        </h3>
        <p className="intro">
          Welcome to my portfolio!
        </p>
        <p className="intro">
          I'm a current penultimate year Computer Science student at The University of Auckland, with a passion for solving problems and creating things through code.
        </p>
        <p className="intro">
          Last summer, I was fortunate enough to work as a R&D Intern at PGG Wrightson
        </p>
      </PageSection>
      <PageSection title="At a Glance">
        <SummaryList id="skills" summaries={summaries} />
      </PageSection>
      <PagePill left="experience" middle="about" right="about" />
    </motion.div>
  );
}