import React from 'react';
import { Link } from 'react-router-dom';
import './Games.css';  // Importação dos estilos específicos para a página de jogos

const Games = () => {
  // Lista de jogos fictícios (você pode substituir por dados reais ou provenientes de uma API)
  const gamesList = [
    { id: 1, title: 'Jogo 1', description: 'Um jogo incrível de aventura.' },
    { id: 2, title: 'Jogo 2', description: 'Explore o mundo dos mistérios.' },
    { id: 3, title: 'Jogo 3', description: 'Desafios de lógica e estratégia.' }
  ];

  return (
    <div className="games-container">
      <h1>Nossos Jogos</h1>
      <ul className="games-list">
        {gamesList.map((game) => (
          <li key={game.id}>
            <Link to={`/game/${game.id}`} className="game-link">
              <h2>{game.title}</h2>
              <p>{game.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Games;
