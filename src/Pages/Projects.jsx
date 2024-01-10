import React from 'react'
import '../css/Projects.css'
import { Link } from 'react-router-dom'
import ProjectsList from '../Components/ProjectsList'


function Projects() {
  return (
    <>
      <section id="all_projects">
        <div className="container">
          <h1 className="heading">View all the projects I have worked on so far</h1>
          <p className="paragraph centered">Below are case studies of all my projects. Hope you like it.</p>
          <ProjectsList />
        </div>
      </section>
    </>
  )
}

export default Projects