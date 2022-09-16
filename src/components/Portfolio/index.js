import React from "react";
import "./style.css";

function Portfolio(props){
    return(
        <div className="portfolio-container">
            <div className="card card-default">
                <div className="card-media-top">
                    <img src={props.image} alt={props.name} />
                </div>
                <div className="portfolio-body">
                    <h3 className="card-title">{props.name}</h3>
                    <p>{props.description}</p>
                    <div margin = "true" className="text-center">
                        <a className="button button-default portfolio-btn" href= {props.appLink} target="_blank">View Website</a>
                        <a className="button button-default portfolio-btn" href= {props.githubLink} target= "_blank">View Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;