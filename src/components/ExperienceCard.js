import React from 'react';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ExperienceCard({ experience }) {
    var date = "";
    if (experience.endDate != null) {
        date = experience.endDate;
        if (experience.startDate != null) {
            date = experience.startDate + " - " + experience.endDate;
        }
    }

    const skillShake = {
        initial: {
            y: 0
        },
        rest: {
            y: 0,
            transition: {
                duration: 0.75
            }
        },
        hover: {
            y: [0, -4, 2, 0],
            transition: {
                duration: 0.75,
                type: 'tween',
                ease: 'easeInOut',
            }
        }
    }

    const backgroundEffects = {
        initial: {
            opacity: 0,
            y: 16
        },
        rest: {
            opacity: 1,
            y: 0,
            backgroundColor: 'var(--black)',
            boxShadow: '0 20px 25px -5px var(--black), 0 8px 10px -6px var(--black)',
            transition: {
                duration: 0.25,
                type: 'tween',
                ease: 'easeInOut'
            }
        },
        hover: {
            backgroundColor: 'var(--grey)',
            boxShadow: '0 20px 25px -5px var(--shadow), 0 8px 10px -6px var(--shadow)',
            transition: {
                duration: 0.25,
                type: 'tween',
                ease: 'easeInOut',
                staggerChildren: 0.075,
            },
        }
    }

    return (
        <motion.div
            className='experience-card'
            key={experience.title}
            initial='initial'
            animate='rest'
            whileHover='hover'
            variants={backgroundEffects}
        >
            <div className="header">
                {
                    experience.link == null ?
                        <p className='title'>{experience.title}</p>
                        :
                        <a className='title' href={experience.link}>{experience.title} <FontAwesomeIcon icon={faArrowUp} /></a>
                }
                <div className='date'>
                    <p>{date}</p>
                </div>
            </div>
            <div className='info'>
                <p className='company'>{experience.company}</p>
                <p className='location'>{experience.location}</p>
                <div className='skills'>
                    {
                        experience.skills.map((skill) => {
                            return <motion.p id={skill} className='skill' variants={skillShake}>{skill}</motion.p>;
                        })
                    }
                </div>
                <ul className='description'>{
                    typeof experience.description === 'string' ?
                        <li>{experience.description}</li> :
                        experience.description.map((paragraph) => {
                            return <li>{paragraph}</li>;
                        })
                }</ul>
            </div>
        </motion.div >
    );
}