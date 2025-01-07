import React from 'react';
import { motion, MotionConfig } from 'motion/react';

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
            whileHover={{ backgroundColor: 'var(--grey)' }}
        >
            <div className="header">
                <p className='title'>{experience.title}</p>
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
                <p className='description'>{experience.description}</p>
            </div>
        </motion.div>
    );
}