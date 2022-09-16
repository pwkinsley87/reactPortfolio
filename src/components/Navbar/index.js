import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Background(props) {
    return(
        <div className="position-relative">
            <div className="postion-top">
                <nav className="navbar-container navbar-transparent" navbar = "true">
                    <div className="navbar-right">
                        <ul classname="navbar-nav visisble@m">
                            <li><Link to = "/about">About</Link></li>
                            <li><Link to = "/portfolio">Portfolio</Link></li>
                            <li><a href = {Resume} target = "_blank">Resume</a></li>
                            <li><Link to = "/Contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
};

export default Background