import React from "react"
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>web development and website promotions </h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Facebook Ads"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />

                <a href="#" className="btn-main-offer">Contact Me!</a>
            </div>
        </div>
    )
}

export default Header
