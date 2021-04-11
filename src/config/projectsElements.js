import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJava, faCss3Alt, faHtml5, faPython, faNode, faJsSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import img01 from "./project-imgs/ParkGuard/0.png"
import img02 from "./project-imgs/MagicGit/0.png"

let projectsElements = [
    {
        id: 1,
        name: "ParkGuard",
        coverImg: img01,
        pictures: [],
        tech: ["Java", "Python", "OpenCV", "AWS S3", "AWS Cognito", "AWS Lambda"],
        summary:"blablaba",
        paragraph: "blablablaba",
        links: [],
    },
    {
        id: 2,
        name: "MagicGit",
        coverImg: img02,
        pictures: [],
        tech: ["Java", "JavaScript", "Bootstrap", "HTML5", "CSS"],
        summary:"blablaba2",
        paragraph: "blablablaba2",
        links: [],
    },
    {
        id: 3,
        name: "Domino Local Server",
        coverImg: "",
        pictures: [],
        tech: ["React", "NodeJS", "CSS"],
        summary:"blablaba3",
        paragraph: "blablablaba3",
        links: [],
    },

];

export default projectsElements;