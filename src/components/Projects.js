import React from "react";
import Component from "./Component";
import projectsElements from "../config/projectsElements";
import paragraphContent from "../config/paragraphContent";
//REACT FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";


import ProjectModal from "./ProjectModal";

const ConditionalLinkButton = (props) => {
    return (
        props.link ?
            <a href={props.link} target="_blank" rel="noreferrer nofollow" className="btn-external-link">
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ color: "#2e2e2e", width: "0.6rem" }} />
            </a> : ""
    );
}

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="card-wraper">
                <div className="card" >
                    <div className="overflow">
                        <img
                            className="card-img-top"
                            src={this.props.coverImg}
                            alt="X"
                        />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.name}
                            <ConditionalLinkButton link={this.props.link} />
                        </h5>
                        <p className="card-text">
                            {this.props.summary}
                        </p>
                        <div className="card-tech-grid">
                            {
                                this.props.tech.map((tech) => {
                                    return (<p key={tech} className="tech-item">{tech}</p>);
                                })
                            }
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.props.handleButtonClick}
                            data-toggle="modal"
                            data-target="#exampleModal">
                            More Info
                    </button>

                    </div>
                </div>
            </div>
        );
    }
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