import { Link } from 'react-router-dom';
//import MyName from '../../assets/images/name.png'
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Profile from '../../assets/images/prof.jpeg';


const Home = () =>{
    // const [letterClass, setLetterClass] = useState('text-animate')
    // const nameArray = [' ','N', 'i', 'a', ' ', 'B', 'e', 'n', 'n', 'a', 'b', 'h', 'a', 'k', 't', 'u', 'l', 'a']
    
    // useEffect(() => {
    //     let timeout;
      
    //     timeout = setTimeout(() => {
    //       setLetterClass("text-animate-hover");
    //     }, 4000);
      
    //     return () => {
    //       clearTimeout(timeout);
    //     };
    //   }, []);
    
    
    return (
        <div className="home-page">
            <div className='main-text'>
                <h1> Nia Bennabhaktula
                {/* <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m, </span>
                
                {/* <img src = {MyName} alt='developer' /> */}
                {/* <AnimatedLetters letterClass={letterClass} 
                charArray={nameArray} 
                idx={15}/> */} 
                <br/>
                </h1>
                <h2>Software Engineer</h2>
                <h2>
                    I’ve recently graduated with a degree in Computer Science and am excited to 
                    learn more about the tech industry. <br/> I have worked on many projects during 
                    college that has taught me Java, JavaScript, C++, and Python. <br/> I am currently 
                    interning at BUYEGAMES LLC, which uses React and Node frameworks.
                </h2>
                <Link to="/contact" className='contact'>CONTACT ME</Link>
            </div>

            <div className='main-picture'>
                <img src={Profile} alt="profile" />
            </div>
            
            {/* <div className='loader'>
                <svg width="0" height="0">
                <filter id="gooey-black-hole">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur"/>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16" result="goo" />
                </filter>
                </svg>
                <div class="black-hole">
                    <ul class="gooey-container">
                        <li class="bubble"></li>
                        <li class="bubble"></li>
                        <li class="bubble"></li>
                        <li class="bubble"></li>
                        <li class="bubble"></li>
                        <li class="bubble"></li>
                    </ul>
                </div>
            </div> */}
        </div>
        
        
    )
}

export default Home