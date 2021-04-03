import React from "react"
//REACT FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
//REACT VERTICAL TIME LINE
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import timelineElements from "../config/timelineElements";

const TimeLine = () => {
    let workIconStyles = { background: "#f9c74f" }
    let schoolIconStyles = { background: "#06D6A0" }

    let workIcon = <FontAwesomeIcon icon={faLaptop} className="timeline-icon" />
    let schoolIcon = <FontAwesomeIcon icon={faGraduationCap} className="timeline-icon"  />
    return (
        <div>
            
            <VerticalTimeline>
                {
                    timelineElements.map((element) => {
                        let isWorkIcon = element.icon === "work"
                        let showButton =
                            element.buttonText !== undefined &&
                            element.buttonText !== null &&
                            element.buttonText !== ""
                        return (
                            <VerticalTimelineElement 
                                key={Math.random().toString(36).substr(2, 9)}
                                date={element.date}
                                dateClassName="timeline-date"
                                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                icon={isWorkIcon ? workIcon : schoolIcon}
                            >

                                <h3 className="vertical-timeline-element-title">
                                    {element.title}
                                </h3>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {element.location}
                                </h5>
                                <p id="timeline-description">{element.description}</p>
                                {showButton && (
                                    <a
                                        className={`timeline-button ${isWorkIcon ? "workButton" : "schoolButton"}`}
                                        href={element.ref}>
                                        {element.buttonText}
                                    </a>
                                )}

                            </VerticalTimelineElement>

                        );
                    })
                }
            </VerticalTimeline>
        </div>
    );
};


const AboutMe = () => {
    return (
        <div className="component-wrapper" id="section-about-me">
            <div className="component-content">
                <div className="component-title-area">
                    <h2 className="component-title">About Me</h2>
                    <p>
                        I am a BSc computer science student at The Academic College of Tel Aviv-
                        Yaffo, with a remainder of one course. due to graduate in 2021.
                        Available for a full-time position.
                        I have done projects in multiple programing languages some of which you can
                        check out on my GitHub.
                        I enjoy learning new technologies and can adapt to any task at hand by
                        applying creative solutions.
                    </p>
                </div>

                <div id="timeline-container"><TimeLine /></div>

            </div>
        </div>
    )
};

export default AboutMe;