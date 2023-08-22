import './skill.css';
import { Link } from 'react-router-dom';

const Skill = () => {
  
    return ( 
        <>
        <div className="cardsdiv">
            <div className="card">
                <div className="image"><img id="react" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png" alt="" /></div>
                <div className="text"><h1>React</h1>
                <p>Learning React was such a fun experience. Up until this point I was using pure javascript, 
                    getting annoyed with how much code was needed for simple tasks. 
                    After learning React I now feel so much more efficient and use it for most of my projects.
                </p>
                </div>
            </div>
            <div className="card">
                <div className="image"><img id="javascript" src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-512.png" alt="" /></div>
                <div className="text"><h1>Javascript</h1>
                <p>I feel the need to speak on my experience with pure javascript. I am effcient with the basics of this language 
                    and have many repositiories on github that can attest to this. Please find my github link in the footer or on the contacts page.
                </p>
                </div>
            </div>
            <div className="card">
                <div className="image"><img id="python" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-1024.png" alt="" /></div>
                <div className="text">
                    <h1>Python</h1>
                    <p>I started learning Python in my early school career and have 
                        consistently used it for school projects in biostatistics, as 
                        well as for computer science courses. I have started learning 
                        Django and have become well adjusted to using Jupyter notebook.</p>
                    </div>
            </div>
          
        </div>

        <div className="projects">
            <h1>Please Check Out My Projects!</h1>
            <Link to="/projects" id='showmeBtn'>Show Me!</Link>
            
            </div>
        </>
        );
}
export default Skill;