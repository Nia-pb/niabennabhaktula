import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import Name from '../../assets/images/NB.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf, faHome, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='name' to='/'>
            <img src={Name} alt="name" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects" to="/projects">
                <FontAwesomeIcon icon={faLaptop} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/niabennabhaktula/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel='noreferrer'
                    href='mailto: niabenna@gmail.com'
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel='noreferrer'
                    href='https://github.com/Nia-pb'
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel='noreferrer'
                    href='mailto: niabenna@gmail.com'
                >
                    <FontAwesomeIcon icon={faFilePdf} color="#4d4d4e"/>
                </a>
            </li>

        </ul>
    </div>
)


export default Sidebar