import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPage.css';

const ProjectPage = () => {
  const { id } = useParams();
  const projectData = {
    1: { title: 'Química', description: 'Uma Atividade para usar o google fonts', githubLink: 'https://lucas-github-23.github.io/fontes_do_google_quimica/' },
  };

  const project = projectData[id];

  if (!project) {
    return <div className="project-page-container"><p>Projeto não encontrado.</p></div>;
  }

  return (
    <div className="project-page-container">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-button">
        Ver no GitHub
      </a>
    </div>
  );
};

export default ProjectPage;
