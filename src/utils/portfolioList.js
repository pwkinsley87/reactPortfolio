import cinephilesImg from "../assets/images/cinephilesImg.png";
import dogQuizImg from "../assets/images/dogBreedQuizImg.png";
import pwGenImg from "../assets/images/pwGenImg.png";

function PortfolioList(name, description, img, appLink, githubLink) {
    this.name = name;
    this.description = description;
    this.img = img;
    this.appLink = appLink;
    this.githubLink = githubLink;
};

// add consts for each port project here //
const Cinephiles = new PortfolioList(
    "Cinephiles",
    "An application that connects movie lovers and allows them to post and share their favorites from a list",
    cinephilesImg, 
    "https://ltb-cinephilia.herokuapp.com/",
    "https://github.com/LakelonBailey/Cinephiles.git"
);

const DogAdoptionAssistant = new PortfolioList(
    "Dog Adoption Assistant",
    "Allows prospective dog owners to answer a short quiz to see which breed best matches their preferences and needs.",
    dogQuizImg,
    "https://westsideriley.github.io/Group-Project-1/",
    "https://github.com/WestsideRiley/Group-Project-1"
);

const PasswordGenerator = new PortfolioList(
    "Password Generator",
    "A simple application that creates a randomly generated password for the user.",
    pwGenImg,
    "https://pwkinsley87.github.io/password-generator/",
    "https://github.com/pwkinsley87/password-generator.git"
);


let portfolioList = [ Cinephiles, DogAdoptionAssistant, PasswordGenerator];

export default portfolioList;

