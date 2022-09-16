import React from "react";
import "./styles.css";
import Background from "../../components/Background";
import imageLink from "../../assets";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import portfolioList from "../../utils/portfolioList.js";
import Portfolio from "../../components/Portfolio";
import PageTitle from "../../../../react-portfolio/src/components/PageTitle";

function AboutMe () { 
    return(
        <Background image = {imageLink}>
            <Navbar />
            <PageTitle
                title="Portfolio"
                description="Examples of my recent work."
                paddingTop= {140}
                paddingBottom = {70}
            />
            <Container>
                {
                    portfolioList.map((item, id) => {
                        return(
                            <Portfolio
                                image = {item.img}
                                name = {item.name}
                                description = {item.description}
                                appLink = {item.appLink}
                                githubLink = {item.githubLink}
                             key = {id}
                            />
                        )
                    })
                }
            </Container>
        </Background>
    )
}

export default AboutMe