//REACT FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJava, faCss3Alt,  faHtml5, faPython, faNode} from "@fortawesome/free-brands-svg-icons";

let size = "3x";
let skillsElements = [
    {
        id: 1,
        name: "React",
        icon: <FontAwesomeIcon icon={faReact} color={"#03fcd7"} size={size}/>,
        text: "I use React to build front end for web applications such as this website.",

    },
    {
        id: 2,
        name: "NodeJS",
        icon: <FontAwesomeIcon icon={faNode} color={"#1f8f10"} size={size}/>,
        text: `I use NodeJS to build the server side of web applications. I have used it in my  Online Domino project.`,

    },
    {
        id: 3,
        name: "HTML5",
        icon: <FontAwesomeIcon icon={faHtml5} color={"#f76902"} size={size}/>,
        text: "I use HTML5 to create UI components in my React web applications.",

    },
    {
        id: 4,
        name: "CSS3",
        icon: <FontAwesomeIcon icon={faCss3Alt} color={"#0094b5"} size={size}/>,
        text: "I use CSS3 to create and format content structure of my web applications.",

    },
    {
        id: 5,
        name: "Java",
        icon: <FontAwesomeIcon icon={faJava} color={"#f5aa42"} size={size}/>,
        text: "I use Java for server side of some of my web applications. I also use it to create AI systems of games such as lines of action using the MinMax tree algorithm (check it out on my GitHub). I have also used JSX for client side in some of my projects.",

    },
    {
        id: 6,
        name: "Python",
        icon: <FontAwesomeIcon icon={faPython} color={"#ffee03"} size={size}/>,
        text: `I use Python scripts to integrate the computer vision library OpenCV into my IoT project - ParkGuard`,

    },
];

export default skillsElements;