import React from 'react';

export default function ExperienceSection({ experience }) {
    return (
        <div className='experience-section'>
            <div className='date'>
                <p>{experience.startDate} - {experience.endDate}</p>
            </div>
            <div className='info'>
                <p className='title'>{experience.title}</p>
                <p className='company'>{experience.company}</p>
                <p className='location'>{experience.location}</p>
                <p className='description'>{experience.description}</p>
            </div>
        </div>
    );
}