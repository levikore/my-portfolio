import React from "react"
import Typed from "react-typed";
//REACT FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const skills = ["Junior Software Developer", "Junior Full-Stack Developer", "Junior Web Developer"];

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h3 className="hello-text">Hi, I'm</h3>
                <h1>Levi Korenblit</h1>
                <p className="typed-wrap">
                    Looking for a <Typed
                        className="typed-text"
                        strings={skills}
                        typeSpeed={100}
                        backSpeed={60}
                        loop
                    /> position
                </p>
                <a href="#" className="btn-main-offer">
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: "#fff" }} /> Contact Me
                </a>

                <div className="social-media">
                    <a href="https://www.linkedin.com/in/levi-korenblit/" className="btn-social-media">
                        <FontAwesomeIcon icon={faLinkedin} style={{ color: "#fff" }} />
                    </a>

                    <a href="https://github.com/levikore" className="btn-social-media">
                        <FontAwesomeIcon icon={faGithub} style={{ color: "#fff" }} />
                    </a>
                </div>

                <div className="arrow-down">
                <FontAwesomeIcon icon={faChevronDown} style={{ color: "#fff"}} />
                </div>
            </div>
        </div>
    )
}

export default Header
