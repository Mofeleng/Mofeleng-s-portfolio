import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'
import ContactForm from '../Components/ContactForm'
import ProjectsGrid from '../Components/ProjectsGrid'

function Home() {
  const assets_folder_prefix = "/src/assets/"
  const stack_folder_prefix = "/src/assets/stack/"

  return (
    <>
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero_content_wrapper">
            <img src="hero.jpg" alt="Hero image" />
            <span className="label">Mofeleng Shadow Mokgope</span>
            <h1 className="heading">I build seamless web experiences that give your brand the trust and authority it needs to dominate.</h1>
            <p className="paragraph">
            My name is Mofeleng Shadow Mokgope, I am a fullstack web developer and a final year BCom student. I help brands build websites that make them memorable.
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
                <img src={stack_folder_prefix+'html_white'+'.svg'} alt="html logo" />
              </div>
              <div className="img_container">
                <img src={stack_folder_prefix+'css_white'+'.svg'} alt="css logo" />                
              </div>
              <div className="img_container">
                <img src={stack_folder_prefix+'js'+'.svg'} alt="js logo" />               
              </div>
              <div className="img_container">
                <img src={stack_folder_prefix+'react'+'.svg'} alt="react js logo" />                
              </div>
              <div className="img_container">
                <img src={stack_folder_prefix+'node_white'+'.svg'} alt="node js logo" />                
              </div>
              <div className="img_container">
                <img src={stack_folder_prefix+'github_white'+'.svg'} alt="github logo" />               
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