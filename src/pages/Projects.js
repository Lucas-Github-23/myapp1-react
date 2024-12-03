import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; 

const Projects = () => {
  const projectsList = [
    { id: 1, title: 'Química', description: 'Nesse site foram usadas fontes diretamente do google fonts', githubLink: 'https://lucas-github-23.github.io/fontes_do_google_quimica/' },
    { id: 2, title: 'Agrinho', description: '', githubLink: 'https://lucas-github-23.github.io/Agrinho-2024/' },
  ];

  return (
    <div className="projects-container">
      <h1>Nossos Projetos</h1>
      <ul className="projects-list">
        {projectsList.map((project) => (
          <li key={project.id}>
            <Link to={`/project/${project.id}`} className="project-link">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
