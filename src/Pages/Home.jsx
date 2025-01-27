import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'
import ContactForm from '../Components/ContactForm'
import ProjectsGrid from '../Components/ProjectsGrid'

function Home() {
  const cloudinary_folder_prefix = "https://res.cloudinary.com/dmrrnno8f/image/upload/v1705006465/my%20portfolio%20website/"

  return (
    <>
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero_content_wrapper">
            <img src={cloudinary_folder_prefix + "hero.jpg"} alt="Hero image" />
            <span className="label">Mofeleng Shadow Mokgope</span>
            <h1 className="heading">Crafting seamless web solutions that solve real-world problems.</h1>
            <p className="paragraph">
            Hi, I’m Mofeleng Shadow Mokgope, a full-stack web developer and aspiring Mathematics & Computer Science student. I’m passionate about building innovative web experiences and pursuing a role in data-driven problem-solving to create impactful solutions.
            </p>
            <div className="buttons">
              <Link to={'https://github.com/Mofeleng'} target='blank' className='btn btn_wider btn_accent btn_rounded'>My Github</Link>
              <Link to={'/projects'} className='btn btn_wider btn_black btn_rounded'>My Projects</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container centered">
          <h2 className="heading_small">My skills</h2>
          <p className="paragraph">Here is the tech stack I use to craft blazing fast websites.</p>
          <div className="tech_stack_container">
            <div className="tech_stack">
              <div className="img_container">
                <img src={cloudinary_folder_prefix + 'html.svg'} alt="html logo" />
              </div>
              <div className="img_container">
                <img src={cloudinary_folder_prefix + 'css.svg'} alt="css logo" />                
              </div>
              <div className="img_container">
                <img src={cloudinary_folder_prefix + 'js.svg'} alt="js logo" />               
              </div>
              <div className="img_container">
                <img src={cloudinary_folder_prefix + 'react.svg'} alt="react js logo" />                
              </div>
              <div className="img_container">
                <img src={cloudinary_folder_prefix + 'node.svg'} alt="node js logo" />                
              </div>
              <div className="img_container">
                <img src={cloudinary_folder_prefix + 'github.svg'} alt="github logo" />               
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container centered">

          <h2 className="heading_small">Latest projects</h2>
          <p className="paragraph">
          Some of the projects I have been working on recently. Feel free to read more on them.
          </p>

          <ProjectsGrid />

        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container centered">
          <h2 className="heading_small">Get in touch</h2>
          <p className="paragraph">
            Want to collaborate on something great? Feel free to send me a message below :)
          </p>

          <div className="contact_form">
            <ContactForm />
          </div>
        </div>
      </section>
    
    </>
  )
}

export default Home