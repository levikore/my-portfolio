import React from "react"
import Typed from "react-typed";
//REACT FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown } from "@fortawesome/free-solid-svg-icons";

const skills = ["Junior Software Developer", "Junior Full-Stack Developer", "Junior Web Developer"];
const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h3 className = "hello-text">Hi, I'm</h3>
                <h1>Levi Korenblit</h1>
                <p className = "typed-wrap">
                    Looking for a <Typed
                        className="typed-text"
                        strings={skills}
                        typeSpeed={100}
                        backSpeed={60}
                        loop
                    /> position
                </p>
                <a href="#" className="btn-main-offer">Contact Me</a>
                <FontAwesomeIcon icon={faChevronDown} style={{color:"#fff", opacity:0.7}}/>
            </div>
        </div>
    )
}

export default Header
