import React from "react"
import Component from "./Component"
import projectsElements from "../config/projectsElements";
import paragraphContent from "../config/paragraphContent";

const ProjectCard = (props) => {
    return (
        <div className="card">
            <div className="overflow">
                <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/new/standard/nature/187.jpg"
                    alt="..."
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                 </p>
                <a href="#!" className="btn btn-primary">Button</a>
            </div>
        </div>
    );
}

const ProjectsGrid = () => {
    return (
        <div className="skills-container">
            {
                projectsElements.map((element) => {
                    return (
                        <ProjectCard />
                    );
                })
            }
        </div>

    );
}



const Projects = () => {
    return (
        <Component
            id={"section-projects"}
            title={"My Projects"}
            paragraph={paragraphContent.projects}
            componentBody={<ProjectsGrid />}
        />
    )
};

export default Projects;