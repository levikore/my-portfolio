import React from "react"
import Component from "./Component"
import TimeLine from "./TimeLine";
import paragraphContent from "../config/paragraphContent";

const AboutMe = () => {
    return (
        <Component
        id={"section-about-me"}
        title={"About Me"}
        paragraph={paragraphContent.aboutMe}
        componentBody={<TimeLine />}
        />
    )
};

export default AboutMe;