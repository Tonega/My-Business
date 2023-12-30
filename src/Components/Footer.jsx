import React from 'react'
import '../css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faGithub, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/Style=Default.svg'

const Footer = () => {
    return(
        <>
        <main className='footer'>
            <div className="footer2">
                <div className="head">
                    <a className='tony' href="/"><img className='logo' src={logo} alt="" /> Tony</a>
                    <p className='mern'>Mern Stack Developer</p>
                    <p className='design'>Design Credit ~ Elias from Figma community</p>
                </div>
                <div className="media">
                    <h4 className='media2'> Media</h4>
                    <div className="media-link">
                    <a className='tweets' href="https://github.com/Tonega"><FontAwesomeIcon icon={faGithub}/></a>
                    <a className='tweets' href="mailto:thonieetega182@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a className='tweets' href="https://twitter.com/Thonieetega" target='_blank'><FontAwesomeIcon icon={faXTwitter} /></a>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p className='made'>Made with <FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} /><FontAwesomeIcon icon={faBootstrap} style={{ color: '#563d7c' }} /></p>
                <p className='copy'>&copy; copyright 2023. Made by <b>Tony</b> </p>
            </div>
        </main>
        </>
    )
}

export default Footer