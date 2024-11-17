import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPage.css';  // Importação dos estilos específicos para a página de projeto

const ProjectPage = () => {
  const { id } = useParams();

  // Conteúdo fictício para os projetos (substitua com dados reais conforme necessário)
  const projectData = {
    1: { title: 'Projeto 1', description: 'Um projeto inovador sobre tecnologia.', githubLink: 'https://github.com/example/projeto1' },
    2: { title: 'Projeto 2', description: 'Explorando novas formas de energia sustentável.', githubLink: 'https://github.com/example/projeto2' },
    3: { title: 'Projeto 3', description: 'Soluções de software para pequenas empresas.', githubLink: 'https://github.com/example/projeto3' },
    4: { title: 'Projeto 4', description: 'Soluções de software para pequenas empresas.', githubLink: 'https://github.com/example/projeto4' }
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
