import React from "react";
import Component from "./Component";
import projectsElements from "../config/projectsElements";
import paragraphContent from "../config/paragraphContent";


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
                        View
                    </button>
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