import './contact.scss'
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react"
import { useRef } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
    // const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
   
    // useEffect(() => {
    //     let timeout;
      
    //     timeout = setTimeout(() => {
    //       setLetterClass("text-animate-hover");
    //     }, 3000);
      
    //     return () => {
    //       clearTimeout(timeout);
    //     };
    //   }, []);


      const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('gmail', 'template_duckxkt', refForm.current, 'J0qfnXpwW-bLeGDn__4Qg')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    
    return (
        <>
            <div className='container contact-page'>
                <div className='main-text'>
                    <h1>
                      Contact Me
                    </h1>

                    <div className="contact-form">
                        <form ref={refForm} onSumbit={sendEmail}>
                        <ul>
                            <li className="half">
                            <input placeholder="Name" type="text" name="name" required />
                            </li>
                            <li className="half">
                            <input placeholder="Email" type="email" name="email" required />
                            </li>
                            <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                            <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                            <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                        </form>
                    </div>
                </div>

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
        </>
    )
}

export default Contact