import React from 'react';

export default function ExperienceCard({ experience }) {
    return (
        <div className='experience-card'>
            <div className='date'>
                <p>{experience.startDate} - {experience.endDate}</p>
            </div>
            <div className='info'>
                <p className='title'>{experience.title}</p>
                <p className='company'>{experience.company}</p>
                <p className='location'>{experience.location}</p>
                <div className='skills'>
                    {
                        experience.skills.map((skill, index) => {
                            return <p key={index} className='skill'>{skill}</p>;
                        })
                    }
                </div>
                <p className='description'>{experience.description}</p>
            </div>
        </div>
    );
}