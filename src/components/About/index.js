import React from "react";
import "./style.css";
import Profile from "../../assets/images/.jpg";

function About() {
    return (
        <div className="about-container">
            <div className="about-text-center">
                <div className = "about">
                    <img id = "profile" src={Profile} alt="A headshot of the developer" style={{ width: 180 }} />
                        <h1 className="about-title">About Me</h1>
                        <div className="about-text-container">
                            <p>
                                I'm a full-stack web developer based in Nashville, TN. I have a professional background in the building science and hospitality industries. I have a lifelong love of twentieth-century literature and recorded music, and someday dream of running a private press. In my rare moments of idleness, I can Bbe found in my shed, probably, doing God knows what.  
                            </p>
                        </div>
                        <div className="text-center text-middle">
                            <a mail-icon="icon: mail; ratio: 1.5" className="mail-icon" href="mailto:pwkinsley87@gmail.com"></a>
                        </div>
                </div>
            </div>
        </div>
    )
};

export default About;