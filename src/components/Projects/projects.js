import { useEffect, useState } from 'react'
// import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faJava, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Grid from '../../assets/images/grid1.png'
import Trng from '../../assets/images/tring1.png'




const Projects = () => {
  // const [letterClass, setLetterClass] = useState('text-animate')

  // useEffect(() => {
  //   let timeout;
  
  //   timeout = setTimeout(() => {
  //     setLetterClass("text-animate-hover");
  //   },3000);
  
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  return (
    <>
      <div className="container projects">
        <div className='main-text'>
          <h1>
            <AnimatedLetters
              //letterClass={letterClass}
              charArray={['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']}
              idx={15}
            />
          </h1>

          <div className='box'>
          <div className="grid-container">
          <div className="project-item-1">
              <article className="post">
                <a href='https://github.com/CSU-CS-314-Fall-2021/t01' className="image">
                  <img src={Trng} alt="trng" />
                </a>
                <p>TRNG is a mobile web application designed specifically for 
                  trip planning purposes. The app incorporates a map using Leaflet,
                  allowing users to search for locations or simply click on the map 
                  to add them to their trip itinerary. Additionally, it provides 
                  functionality to calculate individual and total distances between 
                  the selected locations.</p>
                  <p>As this project is private and still utilized by CSU, access and further information can be obtained by contacting me directly. I would be more than happy to assist you or address any inquiries you may have regarding the project.</p>
                <footer>
                  <ul className='project-tech-stack'>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>CSS</li>
                    <li>React</li>
                  </ul>
                </footer>
              </article>
            </div>
            <div className="project-item-2">
              <article className="post">
                <a href='https://github.com/Nia-pb' className="image">
                  <img src={Grid} alt="grid" />
                </a>
                <p>Color Grid Generator was a collaborative semester-long group 
                  project undertaken as part of the Modern Web Applications (CS312) course 
                  at Colorado State University. The primary objective of the project was 
                  to develop a website that enables users to select colors and fill 
                  in corresponding coordinates. Upon printing the page, a blank grid with 
                  color-coded coordinates is generated, allowing individuals to 
                  engage in a "color by number" activity.</p>
                <footer>
                  <ul className='project-tech-stack'>
                    <li>HTML</li>
                    <li>PHP</li>
                    <li>CSS</li>
                    <li>WebApp</li>
                  </ul>
                </footer>
              </article>
            </div>
           
            {/* <div className="project-item-3"> */}
              {/* <article className="post">
                <a href='https://github.com/Nia-pb' className="image">
                  <img src={Grid} alt="grid" />
                </a>
                <p>ColorCoded was a semester long group project. 
                  The project was a part of a Modern Web Applications (
                  CS312) class at Colorado State University, during Spring '22. 
                  The goal of the project is to have a website where users can 
                  chose colors and color in coordinates. Then, when they print 
                  the page, it prints a blank grid with the color coordinates so 
                  people can 'color by number'.</p>
                <footer>
                  <ul className='project-tech-stack'>
                    <li>HTML</li>
                    <li>PHP</li>
                    <li>CSS</li>
                    <li>WebApp</li>
                  </ul>
                </footer>
              </article> */}
            {/* </div> */}
        </div>
        </div>
        </div>

        <div className='cube'>
            <div className='spin'>
                <div className='one'>
                    <FontAwesomeIcon icon={faGithub} color='#171515'/>
                </div>
                <div className='two'>
                    <FontAwesomeIcon icon={faPython} color='#4B8BBE'/>
                </div>
                <div className='three'>
                    <FontAwesomeIcon icon={faJava} color='#FFF'/>
                </div>
                <div className='four'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                </div>
                <div className='five'>
                    <FontAwesomeIcon icon={faJs} color='#EFD81D'/>
                </div>
                <div className='six'>
                    <FontAwesomeIcon icon={faCode} color='#000000'/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Projects
