import Typical from 'react-typical';
import pic from '../assets/pic.jpg';
import '../css/containers/about.css'

const About = () => {
    return (
        <div className="about container">
            <img className="about__pic" src={pic} alt="pic"/>
            <div className="about__content">
                <div className="about__text">
                    <h1>Hi, I'm <span>Sumit Jindal</span>.</h1>
                   <div> <Typical
                        className="about__typical"
                        steps={[ "I'm FullStack Developer. 💻   ", "I'm Technology Enthusiast. ⚙   "]}
                        loop={Infinity} />
                        <p className="about__detail">I have 3.5+ years of experience of designing and developing web applications. 
                        Proficient in HTML, CSS(SASS), Javascript( ReactJs, Node.js) and Responsive Design.
               </p> </div></div>
            </div>    
            <div className="about__contact">
                    Get in Touch
            </div>
            
        </div>
    )
}

export default About
