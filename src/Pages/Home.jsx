import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'

function Home() {
  const assets_folder_prefix = "/src/assets/"
  const stack_folder_prefix = "/src/assets/stack/"

  return (
    <>
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero_content_wrapper">
            <img src="/src/assets/hero.jpg" alt="Hero image" width={200} height={200} />
            <span className="label">Mofeleng Shadow Mokgope</span>
            <h1 className="heading">I build seamless web experiences that give your brand the trust and authority it needs to dominate.</h1>
            <p className="paragraph">
            My name is Mofeleng Shadow Mokgope, I am a fullstack web developer and a final year BCom student. I help brands build websites that make them memorable.
            </p>
            <div className="buttons">
              <Link className='btn btn_wider btn_accent btn_rounded'>My Github</Link>
              <Link className='btn btn_wider btn_black btn_rounded'>My Projects</Link>
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
              <img src={stack_folder_prefix+'html_white'+'.svg'} alt="html logo" />
              <img src={stack_folder_prefix+'css_white'+'.svg'} alt="css logo" />
              <img src={stack_folder_prefix+'js'+'.svg'} alt="js logo" />
              <img src={stack_folder_prefix+'react'+'.svg'} alt="react js logo" />
              <img src={stack_folder_prefix+'node_white'+'.svg'} alt="node js logo" />
              <img src={stack_folder_prefix+'github_white'+'.svg'} alt="github logo" />
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default Home