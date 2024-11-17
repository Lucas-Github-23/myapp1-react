import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';  // Importação dos estilos específicos para a página de projetos

const Projects = () => {
  // Lista de projetos fictícios (substitua com dados reais ou provenientes de uma API)
  const projectsList = [
    { id: 1, title: 'Projeto 1', description: 'Um projeto inovador sobre tecnologia.', githubLink: 'https://github.com/example/projeto1' },
    { id: 2, title: 'Projeto 2', description: 'Explorando novas formas de energia sustentável.', githubLink: 'https://github.com/example/projeto2' },
    { id: 3, title: 'Projeto 3', description: 'Soluções de software para pequenas empresas.', githubLink: 'https://github.com/example/projeto3' },
    { id: 4, title: 'Projeto 3', description: 'Soluções de software para pequenas empresas.', githubLink: 'https://github.com/example/projeto3' }
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
