import cover1 from "./project-imgs/ParkGuard/cover.png"
import cover2 from "./project-imgs/MagicGit/cover.png"
import cover3 from "./project-imgs/DominoOnline/cover.png"

let projectsElements = [
    {
        name: "MagicGit",
        coverImg: cover2,
        pictures: [],
        tech: ["Java", "JavaScript", "HTML5", "CSS"],
        summary:"An online web application similar to GitHub",
        paragraph: "prprprprprprprprprpr2",
        links: ["https://github.com/levikore/MA_GIT_Java_Online"],
    },
    {
        name: "ParkGuard",
        coverImg: cover1,
        pictures: [],
        tech: ["Java", "Python", "NodeJS", "OpenCV", "AWS-S3"],
        summary:"A smart IoT system that that assists wheelchair users to access their car lift when blocked by other drivers",
        paragraph: "prprprprprprprpr",
        links: ["https://www.linkedin.com/posts/levi-korenblit_computerscience-iot-aws-activity-6718528220460814337-y6HF/"],
    },
    {
        name: "Domino Online",
        coverImg: cover3,
        pictures: [],
        tech: ["React", "NodeJS", "CSS"],
        summary:"Online domino game player vs player",
        paragraph: "prprprprprprprprpr3",
        links: ["https://github.com/levikore/React_Domino_Local_Server"],
    },

];

export default projectsElements;