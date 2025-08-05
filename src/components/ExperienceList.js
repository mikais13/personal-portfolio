import { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import { motion } from 'motion/react';

export default function ExperienceList({ id, experiences }) {
    const [categories, setCategories] = useState({
        "All": true,
        ...Object.fromEntries(
            [...new Set(experiences.flatMap(experience => experience.categories))].sort((a, b) => {
                if (a < b) {
                    return -1;
                } else if (a > b) {
                    return 1;
                } else {
                    return 0;
                }
            }).map(category => [category, true])
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
                document.querySelectorAll(`[data-name^="${id}"]`).forEach(button => {
                    button.classList.remove("selected");
                });
            } else {
                document.querySelectorAll(`[data-name^="${id}"]`).forEach(button => {
                    button.classList.add("selected");
                });
            }
        } else {
            if (categories["All"] === true) {
                document.querySelectorAll(`[data-name^="${id}"]`).forEach(button => {
                    if (button.id !== selectedCategoryName) {
                        button.classList.remove("selected");
                    }
                });
            } else {
                if (categories[selectedCategoryName] === true) {
                    document.querySelectorAll(`[data-name^="${id}"]`).forEach(button => {
                        button.classList.add("selected");
                    });
                } else {
                    document.querySelectorAll(`[data-name^="${id}"]`).forEach(button => {
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
                document.querySelectorAll(`[data-name^="${id}"]`).forEach(button => {
                    button.classList.add("selected");
                });
            } else {
                document.querySelectorAll(`[data-name^="${id}"]`).forEach(button => {
                    if (categories[button.id] === true) {
                        button.classList.add("selected");
                    } else {
                        button.classList.remove("selected");
                    }
                });
            }
        } else {
            document.querySelectorAll(`[data-name^="${id}"]`).forEach(button => {
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
                            <motion.button
                                id={category}
                                data-name={id + "-" + category}
                                onMouseEnter={(event) => handleCategoryEnter(event)}
                                onMouseLeave={(event) => handleCategoryLeave(event)}
                                onClick={handleCategoryToggle}
                                className={categories[category] === true ? 'selected' : ''}
                            >
                                {category}
                            </motion.button>
                        );
                    })]
                }
            </div>
            <div className="experience-list">
                {
                    Object.keys(categories).filter(category => categories[category] === true).length === 0 ?
                        <motion.p
                            className='no-experience'
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            layoutId={id}
                        >
                            Oops! Try a different filter.
                        </motion.p> :
                        categories["All"] === true ?
                            experiences.map((experience) => (
                                <ExperienceCard experience={experience} />
                            ))
                            :
                            experiences.filter(experience => experience.categories.some(category => categories[category] === true)).map((experience, index) => (
                                <ExperienceCard experience={experience} />
                            ))
                }
            </div>
        </>
    );
}