import React from 'react'
import '../css/Contact.css'
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <>
    <div className="contact-container animate__animated animate__slideInUp">
    <main className='contacts animate__animated animate__slideInUp'>
    <h2 className='con animate__animated animate__slideInUp'>/
    <span className='contact-text animate__animated animate__slideInUp'>contacts</span>
     </h2>
    <p className='who animate__animated animate__slideInUp'>who am i?</p>
    <div className="interest animate__animated animate__slideInUp">
        <p className='hey animate__animated animate__slideInUp'>Hey there! 👋 Excited to connect with you. Whether you've got a project idea, collaboration in mind, or just want to say hi, I'm all ears. Use any of the contact methods below, and I'll get back to you ASAP.</p>
        <div className="here animate__animated animate__slideInUp">
            <h3 className='message animate__animated animate__slideInUp'>Message me here</h3>
            <h6>
                <FontAwesomeIcon icon={faEnvelope} />
                <a className='tweet' href="mailto:thonieetega182@gmail.com">thonieetega182@gmail.com</a>
                </h6>
            <h6>
            <FontAwesomeIcon icon={faXTwitter} />
            <a className='tweet' href="https://twitter.com/Thonieetega" target='_blank'>@Thonieetega</a>
            </h6>
        </div>
    </div>
    </main>
    </div>
    </>
  )
}

export default Contact