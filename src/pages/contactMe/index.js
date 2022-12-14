import React from "react";
import "./styles.css";
import Background from "../../components/Background";
import imageLink from "../../assets/images";
import Navbar from "../../components/Navbar";

function ContactMe () {
    return(
        <Background image = {imageLink}>
            <Navbar />
        </Background>
    )
}

export default ContactMe