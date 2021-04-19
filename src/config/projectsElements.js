import parkguard_cover from "./project-imgs/ParkGuard/cover.png"
import parkguard_img1 from "./project-imgs/ParkGuard/img1.png"
import parkguard_img2 from "./project-imgs/ParkGuard/img2.png"
import parkguard_img3 from "./project-imgs/ParkGuard/img3.png"
import parkguard_img4 from "./project-imgs/ParkGuard/img4.png"
import parkguard_img5 from "./project-imgs/ParkGuard/img5.png"


import domino_cover from "./project-imgs/DominoOnline/cover.png"
import domino_demogif from "./project-imgs/DominoOnline/demogif.gif"
import domino_img1 from "./project-imgs/DominoOnline/img1.png"

import magit_cover from "./project-imgs/MagicGit/cover.png"
import magit_img1 from "./project-imgs/MagicGit/img1.png"
import magit_img2 from "./project-imgs/MagicGit/img2.png"
import magit_img3 from "./project-imgs/MagicGit/img3.png"

let projectsElements = [
    {
        name: "MagicGit",
        coverImg: magit_cover,
        pictures: [magit_img1, magit_img2, magit_img3],
        tech: ["Java", "JavaScript", "HTML5", "CSS"],
        summary:"An online web application similar to GitHub",
        paragraph: "An online web application similar to GitHub. The app allows the user to create an empty repository or open an existing one from an XML file. The user can update the files in the ropository i.e update file content, add new files or change folders and commit his saves to the repository. Furthermore the user can create a new Branch, Fork another user's repository, push new repositories to remote branches etc.",
        links: ["https://github.com/levikore/MA_GIT_Java_Online"],
    },
    {
        name: "ParkGuard",
        coverImg: parkguard_cover,
        pictures: [parkguard_img1, parkguard_img2, parkguard_img3, parkguard_img4, parkguard_img5],
        tech: ["Java", "Python", "NodeJS", "OpenCV", "AWS-S3"],
        summary:"A smart IoT system that that assists wheelchair users to access their car lift when blocked by other drivers",
        paragraph: `A smart IoT device that connects to the entrance of a car, above the assistance lift, that belongs to a person with disabilities.
        The system alerts drivers that they blocked the entrance to the car thus preventing the lift from functioning properly.
        Furthermore the system notifies the user through an app that the car is blocked and sends the blocking cars details, such as a picture and the plate number. This gives the user the opportunity to contact the correct authorities.
        Through the app, the user can toggle an alarm, view a live stream of the event and send the car details to a contact.
        The system was implemented using an object recognition python script with openCV running on a Raspberry Pie 4.
        The information is stored on an AWS server and handles the transport of information to and from the app using multiple AWS services such as: SNS, S3, API Gateway, Lambda, AWS IoT, Amplify, Cognito.
        The app is written in Java and is connected to Google's FCM.`,
        links: ["https://www.linkedin.com/posts/levi-korenblit_computerscience-iot-aws-activity-6718528220460814337-y6HF/"],
    },
    {
        name: "Domino Online",
        coverImg: domino_cover,
        pictures: [domino_demogif, domino_img1],
        tech: ["React", "NodeJS", "CSS"],
        summary:"Online domino game player vs player",
        paragraph: "Online domino game for 2 to 3 players on a local server. Built using ReactJS, NodeJS, ExpressJS.",
        links: ["https://github.com/levikore/React_Domino_Local_Server"],
    },

];

export default projectsElements;