import React from "react";
import ContactForm from "./ContactForm";
import { SocialMedia } from "./Header";
import paragraphContent from "../config/paragraphContent";

const Contact = () => {
    return (
        <div className="header-wraper contact-wrapper" id="contact">
            <div className="contact-content">
                <div className="component-title-area">
                    <h2 className="component-title">Contact Me</h2>
                    <p>{paragraphContent.contact}</p>
                </div>
                <div className="form-wrapper"><ContactForm /></div>
                <SocialMedia />
                <p
                    style={{ fontSize: "0.7rem", padding:"0.5rem" }}>This website was made by me using React, CSS3 with multiple React libraries and toolkits, such as: Bootstrap, vertical timeline etc. You can check out the code...
                    <a href="https://github.com/levikore/my-portfolio" target="_blank" rel="noreferrer nofollow">here</a>.
                     Icons were used on this website and on my cv, license
                    <a href="https://fontawesome.com/license/free" target="_blank" rel="noreferrer nofollow">here</a>.
                </p>
            </div>
        </div>
    )
};

export default Contact;
