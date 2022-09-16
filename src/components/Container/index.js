import React from "react";
import "./style.css";

function Container(props) {
    return(
        <div className="container card-container">
            <div className="grid-match child-width-1-3@m" grid="true">
                {props.children}
            </div>
        </div>
    )
};

export default Container;
