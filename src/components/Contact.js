import React from "react";
import ContactForm from "./ContactForm";
import { SocialMedia } from "./Header";

const Contact = () => {
    return (
        <div className="header-wraper contact-wrapper" id="contact">
            <div className="contact-content">
                <div className="component-title-area">
                    <h2 className="component-title">Contact Me</h2>
                    <p>I'm looking for work!!!!</p>
                </div>
                <div className="form-wrapper"><ContactForm /></div>
                <SocialMedia />
                <p
                    style={{ fontSize: "0.7rem", padding:"0.5rem" }}>This website was made by me using React, CSS3. You can check out the code...
                    <a href="https://github.com/levikore/my-portfolio" target="_blank" rel="noreferrer nofollow">here</a>.
                </p>
            </div>
        </div>
    )
};

export default Contact;
