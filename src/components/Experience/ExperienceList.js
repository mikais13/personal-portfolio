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
            skills: ["Research", "Development", "Data Analysis", "OpenCV"],
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
        },
        {
            title: "Research and Development Intern",
            categories: ["Research", "Internship", "Professional"],
            company: "PGG Wrightson",
            location: "Te Puke, New Zealand",
            startDate: "November 2024",
            endDate: "Present",
            skills: ["Research", "Development", "Data Analysis", "OpenCV"],
            description: "Lots of Work"
        },
        {
            title: "Research and Development Intern",
            categories: ["Research", "Internship", "Professional"],
            company: "PGG Wrightson",
            location: "Te Puke, New Zealand",
            startDate: "November 2024",
            endDate: "Present",
            skills: ["Research", "Development", "Data Analysis", "OpenCV"],
            description: "Lots of Work"
        },
        {
            title: "Research and Development Intern",
            categories: ["Research", "Internship", "Professional"],
            company: "PGG Wrightson",
            location: "Te Puke, New Zealand",
            startDate: "November 2024",
            endDate: "Present",
            skills: ["Research", "Development", "Data Analysis", "OpenCV"],
            description: "Lots of Work"
        },
        {
            title: "Research and Development Intern",
            categories: ["Research", "Internship", "Professional"],
            company: "PGG Wrightson",
            location: "Te Puke, New Zealand",
            startDate: "November 2024",
            endDate: "Present",
            skills: ["Research", "Development", "Data Analysis", "OpenCV"],
            description: "Lots of Work"
        },
        {
            title: "Research and Development Intern",
            categories: ["Research", "Internship", "Professional"],
            company: "PGG Wrightson",
            location: "Te Puke, New Zealand",
            startDate: "November 2024",
            endDate: "Present",
            skills: ["Research", "Development", "Data Analysis", "OpenCV"],
            description: "Lots of Work"
        },
        {
            title: "Research and Development Intern",
            categories: ["Research", "Internship", "Professional"],
            company: "PGG Wrightson",
            location: "Te Puke, New Zealand",
            startDate: "November 2024",
            endDate: "Present",
            skills: ["Research", "Development", "Data Analysis", "OpenCV"],
            description: "Lots of Work"
        },
        {
            title: "Research and Development Intern",
            categories: ["Research", "Internship", "Professional"],
            company: "PGG Wrightson",
            location: "Te Puke, New Zealand",
            startDate: "November 2024",
            endDate: "Present",
            skills: ["Research", "Development", "Data Analysis", "OpenCV"],
            description: "Lots of Work"
        },
        {
            title: "Research and Development Intern",
            categories: ["Research", "Internship", "Professional"],
            company: "PGG Wrightson",
            location: "Te Puke, New Zealand",
            startDate: "November 2024",
            endDate: "Present",
            skills: ["Research", "Development", "Data Analysis", "OpenCV"],
            description: "Lots of Work"
        },
        {
            title: "Research and Development Intern",
            categories: ["Research", "Internship", "Professional"],
            company: "PGG Wrightson",
            location: "Te Puke, New Zealand",
            startDate: "November 2024",
            endDate: "Present",
            skills: ["Research", "Development", "Data Analysis", "OpenCV"],
            description: "Lots of Work"
        },
        {
            title: "Research and Development Intern",
            categories: ["Research", "Internship", "Professional"],
            company: "PGG Wrightson",
            location: "Te Puke, New Zealand",
            startDate: "November 2024",
            endDate: "Present",
            skills: ["Research", "Development", "Data Analysis", "OpenCV"],
            description: "Lots of Work"
        },
        {
            title: "Research and Development Intern",
            categories: ["Research", "Internship", "Professional"],
            company: "PGG Wrightson",
            location: "Te Puke, New Zealand",
            startDate: "November 2024",
            endDate: "Present",
            skills: ["Research", "Development", "Data Analysis", "OpenCV"],
            description: "Lots of Work"
        },
        {
            title: "Research and Development Intern",
            categories: ["Research", "Internship", "Professional"],
            company: "PGG Wrightson",
            location: "Te Puke, New Zealand",
            startDate: "November 2024",
            endDate: "Present",
            skills: ["Research", "Development", "Data Analysis", "OpenCV"],
            description: "Lots of Work"
        },
        {
            title: "Research and Development Intern",
            categories: ["Research", "Internship", "Professional"],
            company: "PGG Wrightson",
            location: "Te Puke, New Zealand",
            startDate: "November 2024",
            endDate: "Present",
            skills: ["Research", "Development", "Data Analysis", "OpenCV"],
            description: "Lots of Work"
        },
        {
            title: "Research and Development Intern",
            categories: ["Research", "Internship", "Professional"],
            company: "PGG Wrightson",
            location: "Te Puke, New Zealand",
            startDate: "November 2024",
            endDate: "Present",
            skills: ["Research", "Development", "Data Analysis", "OpenCV"],
            description: "Lots of Work"
        }
    ];

    const [categories, setCategories] = useState({
        "All": true,
        ...Object.fromEntries(
            [...new Set(experiences.flatMap(experience => experience.categories))].map(category => [category, true])
        )
    });

    const handleCategoryToggle = (event) => {
        const selectedCategoryName = event.target.id;
        if (selectedCategoryName === "All") {
            const newCategories = {
                ...Object.fromEntries(
                    Object.keys(categories).map(category => [category, !categories["All"]])
                )
            }
            setCategories(newCategories);
        } else if (categories[selectedCategoryName] === true && categories["All"] === false) {
            const newCategories = {
                ...Object.fromEntries(
                    Object.keys(categories).map(category => [category, true])
                )
            }
            setCategories(newCategories);
        } else {
            const newCategories = {
                ...Object.fromEntries(
                    Object.keys(categories).map(category => [category, false])
                )
            }
            newCategories[selectedCategoryName] = true;
            setCategories(newCategories);
        }
    };

    const handleCategoryEnter = (event) => {
        const selectedCategoryName = event.target.id;
        if (selectedCategoryName === "All") {
            if (categories["All"] === true) {
                document.querySelectorAll("button").forEach(button => {
                    button.classList.remove("selected");
                });
            } else {
                document.querySelectorAll("button").forEach(button => {
                        button.classList.add("selected");
                });
            }
        } else {
            if (categories["All"] === true) {
                document.querySelectorAll("button").forEach(button => {
                    if (button.id !== selectedCategoryName) {
                        button.classList.remove("selected");
                    }
                });
            } else {
                if (categories[selectedCategoryName] === true) {
                    document.querySelectorAll("button").forEach(button => {
                        button.classList.add("selected");
                    });
                } else {
                    document.querySelectorAll("button").forEach(button => {
                        if (button.id === selectedCategoryName) {
                            button.classList.add("selected");
                        } else {
                            button.classList.remove("selected");
                        }
                    });
                }
            }
        }
    };

    const handleCategoryLeave = (event) => {
        const selectedCategoryName = event.target.id;
        if (selectedCategoryName === "All") {
            if (categories["All"] === true) {
                document.querySelectorAll("button").forEach(button => {
                    button.classList.add("selected");
                });
            } else {
                document.querySelectorAll("button").forEach(button => {
                    if (categories[button.id] === true) {
                        button.classList.add("selected");
                    } else {
                        button.classList.remove("selected");
                    }
                });
            }
        } else {
            document.querySelectorAll("button").forEach(button => {
                if (categories[button.id] === true) {
                    button.classList.add("selected");
                } else {
                    button.classList.remove("selected");
                }
            });
        }
    }

    return (
        <>
            <div className="filtering">
                {
                    [...Object.keys(categories).map((category) => {
                        return (
                            <button 
                                id={category} 
                                onMouseEnter={handleCategoryEnter}
                                onMouseLeave={handleCategoryLeave}
                                onClick={handleCategoryToggle} 
                                className={ categories[category] === true ? 'selected' : '' }
                            >
                                {category}
                            </button>
                        );
                    })]
                }
            </div>
            {
                Object.keys(categories).filter(category => categories[category] === true).length === 0?
                    <p>No experiences found</p> :
                    categories["All"] === true ?
                        experiences.map((experience, index) => (
                            <ExperienceCard experience={experience} />
                        ))
                        :
                        experiences.filter(experience => experience.categories.some(category => categories[category] === true)).map((experience, index) => (
                            <ExperienceCard experience={experience} />
                        ))
            }
        </>
    );
}