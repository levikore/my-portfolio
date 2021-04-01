import React from "react"
//REACT FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

const educationList = [
    {
        "name": "The Academic College of Tel Aviv- Yaffo",
        "from": '2016', "to": "2021", "degree": "BSc", "subject": "Computer Science"
    },
    {
        "name": "Ort Hermelin college, Netanya",
        "from": '2012', "to": "2013", "degree": "Practical Engineer", "subject": "Computer Science"
    }
];

class Education extends React.Component {
    render() {
        /*const listItems = educationList.map((d) =>
            <li key={d.name}>{d.name}</li>);*/

        const listItems = <p>temp</p>;

        return (listItems);
    }
}


const AboutMe = () => {
    return (
        <div className="component-wrapper">
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

                <div id="resume-box">
                    <Education />

                    <p>
                        blabla
                    </p>
                </div>

            </div>
        </div>
    )
}

export default AboutMe;