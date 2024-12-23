import React from "react";
import Loader from 'react-loaders';

export default function Home() {
    return (
        <>
            <div className="page-container">
                <div className="title-container">
                    <h1>Home</h1>
                </div>
                <div className="content-container">
                    <p>
                        Welcome to my portfolio! I'm a passionate developer focused on creating innovative solutions.
                        I specialize in full-stack development with expertise in React, Node.js, and modern web technologies. With a strong foundation in software engineering principles, I strive to build scalable and maintainable applications. Throughout my career, I've worked on diverse projects ranging from e-commerce platforms to real-time data visualization systems. I'm always eager to learn new technologies and tackle challenging problems.
                    </p>
                </div>
            </div>
            <Loader type="ball-scale" active={false}/>
        </>
    );
}