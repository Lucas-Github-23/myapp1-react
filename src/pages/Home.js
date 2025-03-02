import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Explore Nossos Projetos e Jogos!</h1>
      <p>
        Este site reúne uma coleção de projetos e jogos desenvolvidos pelos alunos do curso técnico em
        Desenvolvimento de Sistemas do Colégio Santa Maria Goretti. Aqui, você encontrará iniciativas que
        combinam criatividade, inovação e tecnologia para resolver problemas e explorar novas ideias.
      </p>
      
      <div className="home-buttons">
        <Link to="/games" className="home-button">Jogos</Link>
        <Link to="/projects" className="home-button">Projetos</Link>
      </div>
    </div>
  );
};

export default Home;
