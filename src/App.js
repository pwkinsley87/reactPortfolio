import React from "react";
import { Router, Route } from "react-router-dom";
import AboutMe from "./pages/aboutMe";
import Portfolio from "./pages/portfolio";
import ContactMe from "./pages/contactMe";
import Footer from "./components/Footer";

function App() {
    return(
        <Router>
            <Route path="/" component={AboutMe} />
            <Route path="/about" component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path = "/contact" component={ContactMe} />
            <Footer />
        </Router>
    );
}

export default App;

