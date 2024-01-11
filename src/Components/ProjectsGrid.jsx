import { GraphQLClient, gql } from 'graphql-request'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import Error from './Error'
function ProjectsGrid() {

    const ENDPOINT = import.meta.env.VITE_GRAPHCMS_ENDPOINT
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const [ projects, setProjects ] = useState([])

    const cols = ['one', 'two', 'three', 'four']

    const fetchProjects = async () => {
        try {
            const graphqlClient = new GraphQLClient(ENDPOINT)

            const fetchProjects = gql`
                query Projects {
                    projects {
                        id
                        name
                        slug
                        type
                        coverPhoto {
                        url
                        }
                        preview
                    }
                }
            `

            const response = await graphqlClient.request(fetchProjects)
            const res = await response

            if (res.projects) {
                setProjects(res.projects)
                setLoading(false)
                setError(null)
            }

        } catch (error) {
            setLoading(false)
            setError("Something went wrong while fetching projects")
        }
        
    }
    let ran = 0

    useEffect(() => {
        if (ran === 0) {
            fetchProjects()
            ran++
        }
    }, [])

    if (loading) {
        return (
            <Loader />
        )
    }
    if (error) {
        return (
            <Error type="Server error" message={"Something went wrong while fetching projects :("} />
        )
    }
  return (
    <div className="projects_container">
        { projects.map((project) => (
            <Link to={`/project/${project.slug}`}>
              <div className={'project ' + (cols[Math.floor(Math.random() * cols.length) ])}>
                <img src={ project.coverPhoto.url } alt="Cover photo"/>
                <div className="contents">
                  <span>{ project.type }</span>
                  <h4 className="heading_smaller">{ project.name }</h4>
                  <p className="paragraph">
                    { project.preview }
                  </p>
                </div>
              </div>
            </Link>
        ))}
    </div>
  )
}

export default ProjectsGrid