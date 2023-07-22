import { Link } from "react-router-dom";
import Nav from "./Nav";
import './app.css';
import Skill from "./skill";
import Footer from "./Footer";
function App() {
  return (
    <>
 <Nav />
 <div className="Hero">
 <div className="heroText">
  <h1>Welcome to my portfolio</h1>
  <p>I started my development journey over 4 years ago, when I started college. 
    I couldn't have picked a better path for myself because it has been both challenging 
    and so incredibly fun at the same time. Please feel free to check out my projects and learn a little about me {":)"}. 
    A quick introduction; I am Stephanie. I am from Indianapolis, IN and I currently am completing a year long internship 
    as a web developer and designer. I am currently learning a few new technologies but right now my focus is on Node.js 
    and putting together these really cool projects. I love to read in my free time and am an avid collector of books. I
    also spend a crazy amount of time completing school work for my B.S in Informatics.
    </p>
  <form action="mailto:sreneelive@gmail.com"> 
  <button>Email Me!</button>
  </form>
  </div>
 <div className="stephimg"><img src="https://media3.giphy.com/media/UVG0BN8TOMKkPOJS6e/giphy.gif?cid=ecf05e471vrpf1kxv3jv0n3xfx96y2j394yfcyczbn4iqypf&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="" /></div>
 </div>
 <Skill/>
 <Footer />
 </>
    
  );
}

export default App;
