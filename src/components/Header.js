import React from "react"
import Typed from "react-typed";

const skills = ["Junior Software Developer", "Junior Full-Stack Developer", "Junior Web Developer"];
const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
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
                <a href="#" className="btn-main-offer">Contact Me!</a>
            </div>
        </div>
    )
}

export default Header
