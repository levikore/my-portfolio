import React from "react"
import logo from "../logo.png"
//REACT FONTAWSOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars } from "@fortawesome/free-solid-svg-icons"


const Navbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon ={faBars} style={{color:"#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#section-header">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section-about-me">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section-skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section-projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
