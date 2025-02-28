import React from "react";
import { motion } from 'motion/react';
import PagePill from "../Navigation/PagePill";
import PageSection from "../PageSection";
import SummaryCarousel from "./SummaryCarousel";
import "./index.scss";

export default function Home() {
  const summaries = [
    {
      title: "R&D Intern",
      company: "PGG Wrightson",
      description: "I researched Computer Vision applications in horticulture and built an industry-first program"
    },
    {
      title: "Compsci Student",
      company: "University of Auckland",
      description: "I am a penultimate-year student pursuing a Bachelor of Science majoring in Computer Science"
    },
    {
      title: "Sports Fan",
      description: "I love watching and playing sports, especially football, basketball, and golf"
    },
    {
      title: "Footballer",
      description: "I have played football for as long as I can remember, whether for club, school, or social teams"
    },
    {
      title: "Music Lover",
      description: "I'm almost always listening to music from a broad range of genres, but I truly love hip-hop. I have also started collecting vinyl records"
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
          Last summer, I was fortunate enough to work as a R&D Intern at PGG Wrightson, where I had the opportunity to improve my skills with Python, and expose myself to Computer Vision concepts and applications.
        </p>
        <p className="intro">
          I am always looking for new opportunities to learn and grow, so feel free to reach out on LinkedIn if you have any questions or opportunities!
        </p>
      </PageSection>
      <PageSection title="At a Glance">
        <SummaryCarousel summaries={summaries} />
      </PageSection>
      <PagePill left="experience" middle="about" right="about" />
    </motion.div>
  );
}