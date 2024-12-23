import React from "react";
import Loader from "react-loaders";
import "./index.scss";

export default function Experience() {


    return (
        <>
            <div className="page-container">
                <div className="title-container">
                    <h1>Experience</h1>
                </div>
                <div className="content-container">
                    
                </div>
            </div>
            <Loader type="ball-scale" active={true}/>
        </>
    );
}