import { Link } from "react-router-dom";
import { useLayoutEffect } from 'react';
import Footer from "./Footer";
import Smallnav from "./Smallnav";
import './Project.css';



function Project(){
  //Link from homepage sends user to top of page
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
    return ( 
        <>
          <Smallnav />
          <div className="projectCards">
            <div className="project1">
              <div className="img"><a href="https://react-weather-api-steph.netlify.app/" id="proj1link"><img id="proj1" src="https://live.staticflickr.com/65535/53123808960_b132c4bf66.jpg" alt="" /></a></div>
              <div className="txt">
                <h2>Weather App using API</h2>
                <h3>HTML/CSS, Javascript, React</h3>
                <p>For my first React project I decided the tried and true weather 
                  single page application would be a fun way to get started. I used weatherAPI
                  to display all of the weather information. I used a simple and easy search bar to 
                  complete the API request so users can pick which cities to look at. The code validates
                  the user info and returns the input in the display window.</p>
                  <a id="repoBtn" href="https://github.com/Stephanie01011011/react-weather">Github Repo</a>
              </div>
            </div>
            <div className="project2">
            
              <div className="txt">
                <h2>Language Flash Cards</h2>
                <h3>HTML/CSS, Javascript, React, Bootstrap, Sass</h3>
                <p>For my second React project I wanted to focus on incorporating other frameworks like Bootstrap
                  so that I could gain more experience using multiple technologies in one project.
                  On this website, you can click through flash cards and quiz yourself on the german language. 
                  When each card is clicked it uses JS to check whether the answer is correct or not. As I continue to work on this project 
                  I want to add functionality for a user to add new flashcards or view an entire list of words in their flash card deck.
                </p>
                  <a id="repoBtn" href="https://github.com/Stephanie01011011/flashcardweb">Github Repo</a>
                  </div>
                  <div className="img"><a href="https://stephanie01011011.github.io/flashcardweb"><img id="proj2" src="https://live.staticflickr.com/65535/53131313523_787aa5e30e.jpg" alt="" /></a></div>
            </div>
          </div>
         
            
         
          

          
        


          <Footer />
          
        </>
        );
}
export default Project;