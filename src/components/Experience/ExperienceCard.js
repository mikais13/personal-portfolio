import React from 'react';

export default function ExperienceCard({ experience }) {
    return (
        <div className='experience-card'>
            <div className="header">
                <p className='title'>{experience.title}</p>
                {
                    experience.startDate != null || experience.endDate != null ?
                    <div className='date'>
                        <p>{ `${experience.startDate} - ${experience.endDate}`}</p>
                    </div> : null
                }
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
        </div>
    );
}