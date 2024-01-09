import React from 'react'
import '../css/Home.css'
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import img from '../assets/images/Home-image.png'
import img1 from '../assets/images/desktop-design-step-1.jpg'
import img2 from '../assets/images/Live _~_.svg'
import img3 from '../assets/images/Card-detail.jpg'
import img4 from '../assets/images/Screenshot (205).png'
import img5 from '../assets/images/skills.png'
import pic from '../assets/images/about.png'


const Home = () => {
    return(
        <>
        <div className="container animate__animated animate__fadeInUp">
        <div className='home animate__animated animate__fadeInUp'> 
        <div className="home2 animate__animated animate__fadeInUp">
        <h1 className='name animate__animated animate__fadeInUp'>Hi, I'm Anthony Egbah. <br /> <span>A MERN Stack Developer</span> </h1>
        <p className='para animate__animated animate__fadeInUp'>Passionate about building with MongoDB, Express.js, React.js, and Node.js. Let's create something amazing together!</p>
        <a className='contact animate__animated animate__fadeInUp' href="/contact" >Contact me !!</a>
        </div>
        <div className="img animate__animated animate__fadeInUp">
            <img src={img} alt="" />
        </div>
        </div>

        <main className="projects animate__animated animate__fadeInUp">
            <div className="pro animate__animated animate__fadeInUp">
            <p className='pspan animate__animated animate__fadeInUp'>#
            <span className='line2 animate__animated animate__fadeInUp'></span>
            <span className='projects2 animate__animated animate__fadeInUp'>projects</span></p>
            <a className='view animate__animated animate__fadeInUp' href='/projects'>
            View all <FontAwesomeIcon icon={faArrowRight} />
          </a>
            </div>
            <section className='card5 animate__animated animate__fadeInUp'>
            <div className="card animate__animated animate__fadeInUp">
                <img className="image animate__animated animate__fadeInUp" src={img1} alt="" />
                <p className='para1 animate__animated animate__fadeInUp'>Vanilla JS, HTML, CSS</p>
                <hr />
                <h2 className='title animate__animated animate__fadeInUp'>Multi Step Form</h2>
                <p className='para2 animate__animated animate__fadeInUp'>This is a multi-step form for a subscription process on a website.
                The user progresses through these steps to provide necessary information and make selections.</p>
                <a className='link animate__animated animate__fadeInUp' href="https://multi-step-lyart.vercel.app/" target='_blank'> <img src={img2} alt="" /> </a>
            </div>
            <div className="card animate__animated animate__fadeInUp">
                <img className="image animate__animated animate__fadeInUp" src={img3} alt="" />
                <p className='para1 animate__animated animate__fadeInUp'>React.JS, CSS</p>
                <hr />
                <h2 className='title animate__animated animate__fadeInUp'>Card Detail Form</h2>
                <p className='para2 animate__animated animate__fadeInUp'>This is a React application that implements a credit card input form and a thank-you page.</p>
                <a className='link animate__animated animate__fadeInUp' href="https://card-detail-form-six.vercel.app/" target='_blank'> <img src={img2} alt="" /> </a>
            </div>
            <div className="card animate__animated animate__fadeInUp">
                <img className="image animate__animated animate__fadeInUp" src={img4} alt="" />
                <p className='para1 animate__animated animate__fadeInUp'>React.JS, API, CSS</p>
                <hr />
                <h2 className='title animate__animated animate__fadeInUp'>Github Search App</h2>
                <p className='para2 animate__animated animate__fadeInUp'>The project is designed to fetch and display information about a GitHub user based on the input provided by the user.</p>
                <a className='link animate__animated animate__fadeInUp' href="https://git-user-six.vercel.app/" target='_blank'> <img src={img2} alt="" /> </a>
            </div>
            </section>
        </main>

        <section className='skills animate__animated animate__fadeInUp'>
            <div className='skills2 animate__animated animate__fadeInUp'>
            <p className='pspan2 animate__animated animate__fadeInUp'>#
            <span className='line3 animate__animated animate__fadeInUp'></span>
            <span className='projects2 animate__animated animate__fadeInUp'>skills</span>
            </p>
            
            </div>
            
            <div className='main animate__animated animate__fadeInUp'>
            <div className="picture animate__animated animate__fadeInUp">
        <img className='pics animate__animated animate__fadeInUp' src={img5} alt="" />
    </div>

    <div className="flex-container animate__animated animate__fadeInUp">
        <div className="category">
            <h2 className='data'>Languages</h2>
            <div className="item">JavaScript</div>
        </div>

        <div className="category">
            <h2 className='data'>Databases</h2>
            <div className="item">MongoDB</div>
        </div>

        <div className="category">
            <h2 className='data'>Frameworks</h2>
            <div className="item">Express.js</div>
            <div className="item">Bootstrap</div>
            <div className="item">Node.js</div>
        </div>
    </div>

    <div className="flex-container2 animate__animated animate__fadeInUp">
        <div className="category">
            <h2 className='data'>Tools</h2>
            <div className="item">Git</div>
            <div className="item">VS-Code</div>
        </div>

        <div className="category">
            <h2 className='data'>Others</h2>
            <div className="item">HTML</div>
            <div className="item">CSS</div>
        </div>
    </div>
</div>

        </section>

        <h4 className='about1 animate__animated animate__fadeInUp'># <span className='line4'></span> <span className='about3'>about-me</span></h4>
        <div className='abouts animate__animated animate__fadeInUp'>
        <div className='abouts1 animate__animated animate__fadeInUp'>
          <p className='lorem2 animate__animated animate__fadeInUp'>Greetings! I'm Tony, a MERN Stack Developer hailing from Nigeria, My journey into the world of web development started with a fascination for transforming creative ideas into tangible digital experiences. I specialize in the MERN stack—MongoDB, Express.js, React.js, and Node.js—bringing a full-stack...</p>
                
                <a className='all animate__animated animate__fadeInUp' href='/about'>
            Read more <FontAwesomeIcon icon={faArrowRight} />
          </a>
                </div>


            <div className="imgs animate__animated animate__fadeInUp">
          <img className='pic animate__animated animate__fadeInUp' src={pic} alt="" />
          </div>
          
        </div>

        <main className='contacts1 animate__animated animate__fadeInUp'>
    <h2 className='con1 animate__animated animate__fadeInUp'># 
    <span className='line5 animate__animated animate__fadeInUp'></span>
    <span className='contact-text1 animate__animated animate__fadeInUp'>contacts</span>
     </h2>
    <div className="interest1 animate__animated animate__fadeInUp">
        <p className='hey1 animate__animated animate__fadeInUp'>Hey there! 👋 Excited to connect with you. Whether you've got a project idea, collaboration in mind, or just want to say hi, I'm all ears. Use any of the contact methods below, and I'll get back to you ASAP.</p>
        <div className="here1 animate__animated animate__fadeInUp">
            <h3 className='message1 animate__animated animate__fadeInUp'>Message me here</h3>
            <h6>
                <FontAwesomeIcon icon={faEnvelope} />
                <a className='tweetss animate__animated animate__fadeInUp' href="mailto:thonieetega182@gmail.com">thonieetega182@gmail.com</a>
                </h6>
            <h6>
            <FontAwesomeIcon icon={faXTwitter} />
            <a className='tweetss animate__animated animate__fadeInUp' href="https://twitter.com/Thonieetega" target='_blank'>@Thonieetega</a>
            </h6>
        </div>
    </div>
    </main>
    </div>
        
        </>
    )
}

export default Home