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
                    src={props.coverImg}
                    alt="X"
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    {props.summary}
                </p>
                <div className="card-tech-grid">
                    {
                        props.tech.map((tech) => {
                            return (<p key={tech} className="tech-item">{tech}</p>);
                        })
                    }
                </div>
                <a href="#!" className="btn btn-primary">View</a>
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
                        <ProjectCard key={element.name}
                            coverImg={element.coverImg}
                            name={element.name}
                            summary={element.summary}
                            tech={element.tech}
                        />
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