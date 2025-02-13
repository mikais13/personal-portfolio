import React from 'react';
import { motion } from 'motion/react';

export default function ExperienceCard({ experience }) {
    var date = "";
    if (experience.startDate != null) {
        date += experience.startDate;
        if (experience.endDate != null) {
            date += " - " + experience.endDate;
        }
    }

    return (
        <motion.div
            className='experience-card'
            key={experience.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ backgroundColor: 'var(--grey)', boxShadow: '0 20px 25px -5px var(--shadow), 0 8px 10px -6px var(--shadow)' }}
        >
            <div className="header">
                {
                    experience.link == null ?
                        <p className='title'>{experience.title}</p>
                        :
                        <a className='title' href={experience.link} target='_blank' rel='noreferrer'>{experience.title}</a>
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
                            return <p id={skill} className='skill'>{skill}</p>;
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
        </motion.div>
    );
}