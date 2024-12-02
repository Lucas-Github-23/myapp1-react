import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome!</h1>
      <p>
        Este site foi desenvolvido para apresentar uma coleção de projetos e jogos criados pelos
        alunos do curso técnico em Desenvolvimento de Sistemas do Colégio Santa Maria Goretti.
        Aqui, você encontrará diversas iniciativas que combinam criatividade, inovação e os conhecimentos
        adquiridos durante o curso, refletindo o compromisso dos alunos em aplicar a tecnologia para
        resolver problemas e explorar novas ideias.
      </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="home-buttons">
        <Link to="/games" className="home-button">
          Jogos
        </Link>
        <Link to="/projects" className="home-button">
          Projetos
        </Link>
      </div>
    </div>
  );
};

export default Home;
