import React, {useState} from 'react';
import ExperienceSection from './ExperienceSection';

export default function ExperienceList() {
    const experiences = [
        {
            title: "Research and Development Intern",
            company: "PGG Wrightson",
            location: "Te Puke, New Zealand",
            startDate: "November 2024",
            endDate: "Present",
            description: "Lots of Work"
        },
        {
            title: "Full Stack Developer",
            company: "WDCC",
            location: "Auckland, New Zealand",
            startDate: "March 2025",
            endDate: "Present",
            description: "Lots of work"
        }
    ];

    const [categories, setCategories] = useState([
        "All",
        "Software Development",
        "Research",
        "Internship"
    ]);

    return (
        experiences.map((experience, index) => (
            <ExperienceSection key={index} experience={experience} />
        ))
    );
}