import React from "react"
import Typed from "react-typed";
//REACT FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const skills = ["React", "JavaScript", "NodeJS", "HTML5", "CSS3", "C#", "C++", "Python", "Git"];

const SocialMedia = () => {
    return (
        <div className="social-media smaller-on-phone">
            <a href="https://www.linkedin.com/in/levi-korenblit/" target="_blank" rel="noreferrer nofollow" className="btn-social-media">
                <FontAwesomeIcon icon={faLinkedin} style={{ color: "#fff" }} />
            </a>

            <a href="https://github.com/levikore" target="_blank" rel="noreferrer nofollow" className="btn-social-media">
                <FontAwesomeIcon icon={faGithub} style={{ color: "#fff" }} />
            </a>
        </div>
    );
}

const Header = () => {
    return (
        <div className="header-wraper" id="section-header">
            <div className="main-info">

                <h1 className="smaller-on-phone">Levi Korenblit</h1>

                <p className="typed-wrap smaller-on-phone">
                    Software Developer  <Typed
                        className="typed-text"
                        strings={skills}
                        typeSpeed={150}
                        backSpeed={90}
                        loop
                    /> ...
                </p>
                <h3 className="smaller-on-phone">Got Work For Me?</h3>
                <a href="#contact" className="btn-main-offer smaller-on-phone">
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: "#fff" }} /> Contact Me
                </a>

                <SocialMedia/>

                <a href="#section-about-me" className="arrow-down smaller-on-phone">
                    <FontAwesomeIcon icon={faChevronDown} style={{ color: "#fff" }} />
                </a>
            </div>
        </div>
    )
}

export {Header, SocialMedia};
