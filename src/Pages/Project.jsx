import { GraphQLClient, gql } from 'graphql-request'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../css/Project.css'
import ContactForm from '../Components/ContactForm'
import Loader from '../Components/Loader'

function Project() {

  const { slug } = useParams()
  const ENDPOINT = import.meta.env.VITE_GRAPHCMS_ENDPOINT

  const [ loading, setLoading ] = useState(true)
  const [ err, setErr ] = useState(null)

  const [ project, setProject ] = useState([])

  const fetchProject = async () => {
    try {
        const graphqlClient = new GraphQLClient(ENDPOINT)

        const fetchProject = gql`
        query GetProjects($slug: String!) {
            project(where: { slug: $slug }) {
                id
                name
                preview
                slug
                type
                date
                client
                link
                content {
                    html
                }
                coverPhoto {
                    url
                }
                languages {
                    language
                    styleName
                }
            }
        }
        `

        const variables = {
            slug
        }

        const response = await graphqlClient.request(fetchProject, variables)
        const res = await response

        if (res.project) {
            setProject(res.project)
            setLoading(false)
            setErr(null)
        }
    } catch (error) {
        setLoading(false)
        setErr("Something went wrong while fetching this project")
    }
  }

  let ran = 0

  useEffect(() => {
    if (ran === 0) {
        fetchProject()
        ran++
    }
  }, [])

  if (loading) {
    return (
        <Loader />
    )
  }
  if (err) {
    return err
  }

  return (
    <>
        <section id="hero_project">
            <div className="container">
                <span className="label">{ project.type }</span>
                <h1 className="heading start">{ project.name }</h1>
            </div>
        </section>
        <div className="coverimage_projects">
            <img src={project.coverPhoto.url} alt="Cover photo" />
        </div>
        <section id="project_details">
            <div className="container">
                <div className="project_details_grid_container">
                    <div className="project_details_grid">

                        <div className="left_information">
                            <div className="info_block">
                                <span className="label">Client</span> <br></br>
                                <span className="paragraph_info">{ project.client }</span>
                            </div>
                        
                            <div className="info_block">
                                <span className="label">Project type</span> <br></br>
                                <span className="paragraph_info">{ project.type }</span>
                            </div>

                            <div className="info_block">
                                <span className="label">Year</span> <br></br>
                                <span className="paragraph_info">{ project.date }</span>
                            </div>
                        </div>
                        <div className="right_information">
                            <h2 className="heading_small">How I did it.</h2>
                            <div className="content" dangerouslySetInnerHTML={{ __html: project.content.html }}></div>

                            <p className='mg_top_2'>
                                <Link to={project.link} target='blank' className='under'>View project &rarr;</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='contact'> 
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

export default Project