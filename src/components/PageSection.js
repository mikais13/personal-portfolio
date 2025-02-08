import React from 'react';

export default function PageSection({ title, children }) {
    return (
        <>
            <div className="title-container">
                <h1>{title}</h1>
            </div>
            <div className="content-container">
                {children}
            </div>
        </>
    );
}