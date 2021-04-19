import React from "react";
import Component from "./Component";
import ProjectModal from "./ProjectModal";
import projectsElements from "../config/projectsElements";
import paragraphContent from "../config/paragraphContent";
//REACT FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";


const ConditionalLinkButton = (props) => {
    return (
        props.link ?
            <a href={props.link} target="_blank" rel="noreferrer nofollow" className="btn-external-link">
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ color: "#2e2e2e", width: "0.6rem" }} />
            </a> : ""
    );
}

const ProjectCard = (props) => {
    return (
        <div className="card-wraper">
            <div className="card" >
                <div className="overflow">
                    <img
                        className="card-img-top"
                        src={props.coverImg}
                        alt="X"
                    />
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        {props.name}
                        <ConditionalLinkButton link={props.link} />
                    </h5>
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
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={props.handleButtonClick}>
                        More Info
                    </button>

                </div>
            </div>
        </div>
    );
}



class ProjectsGrid extends React.Component {
    constructor() {
        super();
        this.state = {
            requiredItem: 0
        };

        this.replaceModalItem = this.replaceModalItem.bind(this);
    }

    replaceModalItem(index) {
        this.setState({
            requiredItem: index
        });
    }

    render() {
        return (
            <>
                <div className="skills-container">
                    {
                        projectsElements.map((element, index) => {
                            return (
                                <ProjectCard key={index}
                                    coverImg={element.coverImg}
                                    name={element.name}
                                    summary={element.summary}
                                    tech={element.tech}
                                    link={element.links[0]}
                                    handleButtonClick= {()=>this.replaceModalItem(index)}
                                />
                            );
                        })
                    }

                </div>

                <ProjectModal
                    title={projectsElements[this.state.requiredItem].name}
                    paragraph={projectsElements[this.state.requiredItem].paragraph}
                    pictures={projectsElements[this.state.requiredItem].pictures}
                    links={projectsElements[this.state.requiredItem].links}
                    images= {projectsElements[this.state.requiredItem].pictures}
                />
            </>
        );
    }
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