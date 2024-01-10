import React from 'react'
import '../css/Projects.css'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <>
      <section id="all_projects">
        <div className="container">
          <h1 className="heading">View all the projects I have worked on so far</h1>
          <p className="paragraph centered">Below are case studies of all my projects. Hope you like it.</p>
          <div className="projects_main">
            <div className="project_main">
              <h2 className="heading_small">
                <Link to={`/project/`}>Parawild Edu Capture</Link>
                <span className="type">Web development</span>
              </h2>
              <p>
              A responsive website for a wildlife managementcompany based in Hoedspruit
              </p>
              <div className="more_info">
                <span className="type vite">Vite</span>
                <span className="type react">React Js</span>
                <span className="type graphql">GraphQL</span>
              </div>
            </div>

            <div className="project_main">
            <h2 className="heading_small">
                <Link to={`/project/`}>Bold blossoms</Link>
                <span className="type">Web development</span>
              </h2>
              <p>
              A responsive website for a Pageantry website that hosts yearly pageants
              </p>
              <div className="more_info">
                <span className="type vite">Vite</span>
                <span className="type react">React Js</span>
                <span className="type graphql">GraphQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects