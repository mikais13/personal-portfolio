import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';

export default function ExperienceList() {
    const experiences = [
        {
            title: "Research and Development Intern",
            categories: ["Research", "Internship", "Professional"],
            company: "PGG Wrightson",
            location: "Te Puke, New Zealand",
            startDate: "November 2024",
            endDate: "Present",
            skills: ["Research", "Development"],
            description: "Lots of Work"
        },
        {
            title: "Full Stack Developer",
            categories: ["Software Development"],
            company: "WDCC",
            location: "Auckland, New Zealand",
            startDate: "March 2025",
            endDate: "Present",
            skills: ["React", "Node.js"],
            description: "Lots of work"
        }
    ];

    const [categories, setCategories] = useState({
        "All": true,
        ...Object.fromEntries(
            [...new Set(experiences.flatMap(experience => experience.categories))].map(category => [category, true])
        )
    });

    const handleCategoryToggle = (event) => {
        const selectedCategoryName = event.target.textContent;
        if (selectedCategoryName === "All") {
            setCategories({
                ...Object.fromEntries(
                    Object.keys(categories).map(category => [category, !categories[selectedCategoryName]])
                )
            });
        } else {
            const newCategories = {
                ...categories,
                [selectedCategoryName]: !categories[selectedCategoryName],
                "All": true
            }
            const areAllSelected = Object.values(newCategories).every(category => category === true);
            newCategories["All"] = areAllSelected;
            setCategories(newCategories);
        }
    };

    return (
        <>
            <div className="filtering">
                {
                    ["All", ...experiences.flatMap(experience => experience.categories)].map((category) => {
                        return (
                            <button key={category} onClick={handleCategoryToggle} className={ categories[category] === true ? 'selected' : '' }>{category}</button>
                        );
                    })
                }
            </div>
            {
                Object.keys(categories).filter(category => categories[category] === true).length === 0?
                    <p>No experiences found</p> :
                    categories["All"] === true ?
                        experiences.map((experience, index) => (
                            <ExperienceCard key={index} experience={experience} />
                        ))
                        :
                        experiences.filter(experience => experience.categories.some(category => categories[category] === true)).map((experience, index) => (
                            <ExperienceCard key={index} experience={experience} />
                        ))
            }
        </>
    );
}