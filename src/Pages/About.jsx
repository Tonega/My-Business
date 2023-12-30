import React from 'react'
import '../css/About.css'
import 'animate.css';
import pic from '../assets/images/about.png'

const About = () => {
  return (
    <>
    <div className="about-container animate__animated animate__slideInUp">
      <main className='abouts11 animate__animated animate__slideInUp'>
        <h4 className='about animate__animated animate__slideInUp'>/<span className='about2'>about-me</span></h4>
        <p className='am animate__animated animate__slideInUp'>who am i?</p>
        <section className='greet animate__animated animate__slideInUp'>
          <p className='lorem animate__animated animate__slideInUp'>Greetings! I'm Tony, a MERN Stack Developer hailing from Nigeria, My journey into the world of web development started with a fascination for transforming creative ideas into tangible digital experiences. I specialize in the MERN stack—MongoDB, Express.js, React.js, and Node.js—bringing a full-stack approach to my projects,  I've honed my skills in crafting robust and scalable web applications that exceed user expectations.
            <br />
          As I invite you to explore my portfolio and delve into some of my latest projects, I'm always eager to connect, learn, and share ideas with fellow developers, designers, and innovators. Feel free to reach out—I'd love to hear about your journey and explore the possibilities of creating something amazing together.</p>

          <img className='pic animate__animated animate__slideInUp' src={pic} alt="" />
          
        </section>

        <div className='skills2 animate__animated animate__slideInUp'>
            <p className='pspan2 animate__animated animate__slideInUp'>#
            <span className='projects2 animate__animated animate__slideInUp'>skills</span>
            </p>
            </div>
            <div className="main22 animate__animated animate__slideInUp">
            <div className="flex-container3 animate__animated animate__slideInUp">
        <div className="category1 animate__animated animate__slideInUp">
            <h2 className='data1'>Languages</h2>
            <div className="item1">JavaScript</div>
        </div>

        <div className="category1 animate__animated animate__slideInUp">
            <h2 className='data1'>Databases</h2>
            <div className="item1">MongoDB</div>
        </div>

        <div className="category1 animate__animated animate__slideInUp">
            <h2 className='data1'>Frameworks</h2>
            <div className="item1">Express.js</div>
            <div className="item1">Bootstrap</div>
            <div className="item1">Node.js</div>
        </div>
    </div>

    <div className="flex-container4 animate__animated animate__slideInUp">
        <div className="category1 animate__animated animate__slideInUp">
            <h2 className='data1'>Tools</h2>
            <div className="item1">Git</div>
            <div className="item1">VS-Code</div>
        </div>

        <div className="category1 animate__animated animate__slideInUp">
            <h2 className='data1'>Others</h2>
            <div className="item1">HTML</div>
            <div className="item1">CSS</div>
        </div>
        </div>
    </div>
      </main>
      </div>
    </>
  )
}

export default About