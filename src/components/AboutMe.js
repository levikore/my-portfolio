import React from "react"
import Component from "./Component"
import TimeLine from "./TimeLine";

const AboutMe = () => {
    return (
        <Component
        id={"section-about-me"}
        title={"About Me"}
        paragraph={`I am a BSc computer science student at The Academic College of Tel Aviv-
        Yaffo, with a remainder of one course. due to graduate in 2021.
        Available for a full-time position.
        I have done projects in multiple programing languages some of which you can
        check out on my GitHub.
        I enjoy learning new technologies and can adapt to any task at hand by
        applying creative solutions.`}
        componentBody={<TimeLine />}
        />
    )
};

export default AboutMe;