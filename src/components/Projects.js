import React from "react";
import Component from "./Component";
import projectsElements from "../config/projectsElements";
import paragraphContent from "../config/paragraphContent";
//REACT FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";


import ProjectModal from "./ProjectModal";

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isShowModal: false };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        this.setState(() => ({
            isShowModal: true

        }));
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
                        <h5 className="card-title">{this.props.name}</h5>
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
                            onClick={this.handleClick}>
                            More Info
                    </button>
                        <a href={this.props.link} target="_blank" rel="noreferrer nofollow" className="btn-social-media">
                            <FontAwesomeIcon icon={faExternalLinkAlt} style={{ color: "#000000" }} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
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
                            link={element.links[0]}
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