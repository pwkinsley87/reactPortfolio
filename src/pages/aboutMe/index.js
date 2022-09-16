import React from "react";
import "./style.css";
import Background from "../../components/Background";
import imageLink from "../../assets/images/Background1.jpg";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";

function AboutMe() {
    return(
        <Background image = {imageLink}>
            <Navbar />
            <About />
        </Background>
    )
}

export default AboutMe