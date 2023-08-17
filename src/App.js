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
  <p>Thank you to each and every one of you who takes the time
            to view my portfolio. I have been working towards my career 
            in web development since 2019 when I started at Ivy Tech Community 
            College in Indiana. I earned my first degree in <span style={{'color': 'palevioletred'}}>Software Development </span> 
            here, as well as a certificate in Software Application Development.
            My plan was always to get a 4 year degree, so I immediately transferred 
            to IUPUI to earn my <span style={{'color': 'palevioletred'}}>B.S in Informatics</span>. This degree really helped me develop 
            my technical skills as well as my user empathy skills since I was able to 
            take many <span style={{'color': 'palevioletred'}}>UX/ HCI</span> based classes. I recently completed an 11-month long <span style={{'color': 'palevioletred'}}>internship </span> 
            as a web developer and designer which gave me a vast amount of real world experience 
            using a CMS and creating ads for websites. I was able to sit in with vendors of the 
            company and discuss <span style={{'color': 'palevioletred'}}>website design and development</span> on a weekly basis.I have spent 
            many hours after school and 
            internships to develop my web development abilities. I started with HTML 
            and CSS, and worked my way up to where I am now. I am currently learning more 
            backend technologies and frameworks, such as <span style={{'color': 'palevioletred'}}>Node.js</span>, to better be able to 
            create dynamic websites. When I'm not in class you can find me reading. I have 
            a crazy collection of books and the last time I counted I had about 300.
            I am so excited to hear any questions you may have, so please feel free to email me or send a message through the form below! 
    </p>
  <form action="mailto:sreneelive@gmail.com"> 
  <button>Email Me!</button>
  </form>
  </div>
 <div className="stephimg">
 <img id="animation" src="https://media3.giphy.com/media/UVG0BN8TOMKkPOJS6e/giphy.gif?cid=ecf05e471vrpf1kxv3jv0n3xfx96y2j394yfcyczbn4iqypf&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="" />
 
  </div>
 </div>
 <Skill/>
 <Footer />
 </>
    
  );
}

export default App;
