import { Link } from "react-router-dom";
import Nav from "./Nav";
import './app.css';
import Skill from "./skill";
function App() {
  return (
    <>
 <Nav />
 <div className="Hero">
 <div className="heroText">
  <h1>Welcome to my portfolio</h1>
  <p>I started my development journey over 4 years ago, when I started college. I couldn't have picked a better path for myself. Please feel free to check out my projects and learn a little about me {":)"}. To get you started, I have become very proficient in React, Javascript, and HTML, but I also know a few server side languages such as python.</p>
  <button>Email Me!</button>
  </div>
 <div className="stephimg"></div>
 </div>
 <Skill/>
 </>
    
  );
}

export default App;
