import React from "react";
import Loader from "react-loaders";
import "./index.scss";

export default function Contact() {
    return (
        <>
            <div className="page-container">
                <div className="title-container">
                    <h1>Contact</h1>
                </div>
                <div className="content-container">
                    <p>This is the contact page.</p>
                </div>
            </div>
            <Loader type="ball-scale" active={true}/>
        </>
    );
}