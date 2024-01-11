import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GraphQLClient, gql } from 'graphql-request'
import Loader from './Loader';

function ProjectsList() {
  const ENDPOINT = import.meta.env.VITE_GRAPHCMS_ENDPOINT;
  const [ projects, setProjects ] = useState([]);

  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  const fetchProjects = async () => {
    try {
      const graphqlClient = new GraphQLClient(ENDPOINT);

      const fetchProjects = gql`
        query GetProjects {
          projects {
            id
            name
            slug
            type
            coverPhoto {
              url
            }
            languages {
              language
              styleName
            }
            preview
          }
        }
      `;

      const response = await graphqlClient.request(fetchProjects);
      const res = await response;

      if (res.projects) {
        setProjects(res.projects);
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setError("Something went wrong while fetching projects");
      setLoading(false);
    }
  }

  let ran = 0;

  useEffect(() => {
    if ( ran === 0) {
      fetchProjects();
      ran++;
    }
  }, []);

  if (loading) {
    return (
      <Loader />
    )
  }

  if (error) {
    return "Something went wrong " + error;
  }
  return (
    <div className="projects_main">
      { projects.map((project) => (
        <div className="project_main">
          <h2 className="heading_small">
            <Link to={`/project/${project.slug}`}>{ project.name } </Link>
            <span className="type">{ project.type }</span>
          </h2>
          <p>
            { project.preview }
          </p>
          <div className="more_info">
            { project.languages.map((lang) => (
              <span className={`type ${lang.styleName}`}>{ lang.language }</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsList