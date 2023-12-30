import React from 'react'
import '../css/Projects.css'
import 'animate.css';
import img1 from '../assets/images/desktop-design-step-1.jpg'
import img2 from '../assets/images/Live _~_.svg'
import img3 from '../assets/images/Card-detail.jpg'
import img4 from '../assets/images/Screenshot (205).png'
import img5 from '../assets/images/advice.jpg'
import img7 from '../assets/images/News.jpg'
import img8 from '../assets/images/Dropdown.jpg'
import img9 from '../assets/images/newsletter.jpg'
import img10 from '../assets/images/result-sum.jpg'
import img11 from '../assets/images/profile.jpg'
import img12 from '../assets/images/QR.jpg'

const Projects = () => {
  return (
    <>
    <div className="projects-container animate__animated animate__slideInUp">
    <main className='wrapper animate__animated animate__slideInUp'>
        <h2 className='slash animate__animated animate__slideInUp'>/<span className='slash2'>projects</span> </h2>
        <p className='list animate__animated animate__slideInUp'>List of my projects</p>
        <section className='wrap animate__animated animate__slideInUp'>
            <div className="card animate__animated animate__slideInUp">
                <img className="image animate__animated animate__slideInUp" src={img1} alt="" />
                <p className='para1 animate__animated animate__slideInUp'>Vanilla JS, HTML, CSS</p>
                <hr />
                <h2 className='title animate__animated animate__slideInUp'>Multi Step Form</h2>
                <p className='para2 animate__animated animate__slideInUp'>This is a multi-step form for a subscription process on a website.
                The user progresses through these steps to provide necessary information and make selections.</p>
                <a className='link animate__animated animate__slideInUp' href="https://multi-step-lyart.vercel.app/" target='_blank'> <img src={img2} alt="" /> </a>
            </div>
            <div className="card animate__animated animate__slideInUp">
                <img className="image animate__animated animate__slideInUp" src={img3} alt="" />
                <p className='para1 animate__animated animate__slideInUp'>React.JS, CSS</p>
                <hr />
                <h2 className='title animate__animated animate__slideInUp'>Card Detail Form</h2>
                <p className='para2 animate__animated animate__slideInUp'>This is a React application that implements a credit card input form and a thank-you page.</p>
                <a className='link animate__animated animate__slideInUp' href="https://card-detail-form-six.vercel.app/" target='_blank'> <img src={img2} alt="" /> </a>
            </div>
            <div className="card animate__animated animate__slideInUp">
                <img className="image animate__animated animate__slideInUp" src={img4} alt="" />
                <p className='para1 animate__animated animate__slideInUp'>React.JS, API, CSS</p>
                <hr />
                <h2 className='title animate__animated animate__slideInUp'>Github Search App</h2>
                <p className='para2 animate__animated animate__slideInUp'>The project is designed to fetch and display information about a GitHub user based on the input provided by the user.</p>
                <a className='link animate__animated animate__slideInUp' href="https://git-user-six.vercel.app/" target='_blank'> <img src={img2} alt="" /> </a>
            </div>
            <div className="card animate__animated animate__slideInUp">
                <img className="image animate__animated animate__slideInUp" src={img5} alt="" />
                <p className='para1 animate__animated animate__slideInUp'>React.JS, API, CSS</p>
                <hr />
                <h2 className='title animate__animated animate__slideInUp'>Advice Generator App</h2>
                <p className='para2 animate__animated animate__slideInUp'>This project is a React application that fetches advice from the "Advice Slip" API and displays it on a webpage. The application includes a button that, when clicked, triggers a new API request to get a different piece of advice.</p>
                <a className='link animate__animated animate__slideInUp' href="https://advice-generator-chi-two.vercel.app/" target='_blank'> <img src={img2} alt="" /> </a>
            </div>
            <div className="card animate__animated animate__slideInUp">
                <img className="image animate__animated animate__slideInUp" src={img7} alt="" />
                <p className='para1 animate__animated animate__slideInUp'>HTML, CSS</p>
                <hr />
                <h2 className='title animate__animated animate__slideInUp'>News homepage</h2>
                <p className='para2 animate__animated animate__slideInUp'>This project is a webpage for a news homepage designed as part of a challenge on Frontend Mentor.</p>
                <a className='link animate__animated animate__slideInUp' href="https://news-aug-tonega.vercel.app/" target='_blank'> <img src={img2} alt="" /> </a>
            </div>
            <div className="card animate__animated animate__slideInUp">
                <img className="image animate__animated animate__slideInUp" src={img8} alt="" />
                <p className='para1 animate__animated animate__slideInUp'>HTML, CSS, Bootstrap</p>
                <hr />
                <h2 className='title animate__animated animate__slideInUp'>Intro section with dropdown navigation</h2>
                <p className='para2 animate__animated animate__slideInUp'>This project represents a web page that implements a dropdown navigation menu using HTML, CSS, and the Bootstrap framework.</p>
                <a className='link animate__animated animate__slideInUp' href="https://aug-dropdown.vercel.app/" target='_blank'> <img src={img2} alt="" /> </a>
            </div>
            <div className="card animate__animated animate__slideInUp">
                <img className="image animate__animated animate__slideInUp" src={img9} alt="" />
                <p className='para1 animate__animated animate__slideInUp'>HTML, CSS, JS</p>
                <hr />
                <h2 className='title animate__animated animate__slideInUp'>Newsletter sign-up form with success message</h2>
                <p className='para2 animate__animated animate__slideInUp'>This project is a simple newsletter sign-up form with a success message, </p>
                <a className='link animate__animated animate__slideInUp' href="https://newsletter-xi-beige.vercel.app/" target='_blank'> <img src={img2} alt="" /> </a>
            </div>
            <div className="card animate__animated animate__slideInUp">
                <img className="image animate__animated animate__slideInUp" src={img10} alt="" />
                <p className='para1 animate__animated animate__slideInUp'>HTML, CSS</p>
                <hr />
                <h2 className='title animate__animated animate__slideInUp'>Results summary component</h2>
                <p className='para2 animate__animated animate__slideInUp'> A user interface that displays a summary of test result</p>
                <a className='link animate__animated animate__slideInUp' href="https://result-sum-eight.vercel.app/" target='_blank'> <img src={img2} alt="" /> </a>
            </div>
            <div className="card animate__animated animate__slideInUp">
                <img className="image animate__animated animate__slideInUp" src={img11} alt="" />
                <p className='para1 animate__animated animate__slideInUp'>HTML, CSS</p>
                <hr />
                <h2 className='title animate__animated animate__slideInUp'>Profile card component</h2>
                <p className='para2 animate__animated animate__slideInUp'>The represents a user profile card, displaying information about a person</p>
                <a className='link animate__animated animate__slideInUp' href="https://profile-card-beta-six.vercel.app/" target='_blank'> <img src={img2} alt="" /> </a>
            </div>
            <div className="card animate__animated animate__slideInUp">
                <img className="image animate__animated animate__slideInUp" src={img12} alt="" />
                <p className='para1 animate__animated animate__slideInUp'>React.js</p>
                <hr />
                <h2 className='title animate__animated animate__slideInUp'>QR code component</h2>
                <p className='para2 animate__animated animate__slideInUp'>This project also renders a simple user-interface</p>
                <a className='link animate__animated animate__slideInUp' href="https://react-qr-eight.vercel.app/" target='_blank'> <img src={img2} alt="" /> </a>
            </div>
            </section>
    </main>
    </div>
    </>
  )
}

export default Projects