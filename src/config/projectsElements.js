import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJava, faCss3Alt, faHtml5, faPython, faNode, faJsSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import cover1 from "./project-imgs/ParkGuard/cover.png"
import cover2 from "./project-imgs/MagicGit/cover.png"
import cover3 from "./project-imgs/DominoLocalServer/cover.png"

let projectsElements = [
    {
        id: 1,
        name: "ParkGuard",
        coverImg: cover1,
        pictures: [],
        tech: ["Java", "Python", "OpenCV", "AWS S3"],
        summary:"blablaba",
        paragraph: "blablablaba",
        links: [],
    },
    {
        id: 2,
        name: "MagicGit",
        coverImg: cover2,
        pictures: [],
        tech: ["Java", "JavaScript", "Bootstrap", "HTML5", "CSS"],
        summary:"blablaba2",
        paragraph: "blablablaba2",
        links: [],
    },
    {
        id: 3,
        name: "Domino Local Server",
        coverImg: cover3,
        pictures: [],
        tech: ["React", "NodeJS", "CSS"],
        summary:"blablaba3",
        paragraph: "blablablaba3",
        links: [],
    },

];

export default projectsElements;