import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Importação dos estilos específicos para a página inicial

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Nosso Site</h1>
      <p>
        Explore nossos projetos incríveis e jogue nossos jogos desenvolvidos para
        proporcionar uma experiência única. Sinta-se à vontade para explorar cada
        seção e descobrir mais sobre o que fazemos!
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
