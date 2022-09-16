import React from "react";
import "./style.css";

function Contact() {
    return(
        <div className="container">
            <div className="text=center">
                <p>Reach out using the form below or email me directly at: <a id="emailLink" href="mailto:pwkinsley87@gmail.com">pwkinsley87@gmail.com</a></p>
                <div className= "text-center text-middle">
                    <a uk-icon="icon: github-alt" className="gitIcon contactIcon" href="https://github.com/pwkinsley87" target="_blank"></a>
                </div>
            </div>
        </div>
    )
}

export default Contact