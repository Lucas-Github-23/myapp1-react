import React from 'react';
import { Link } from 'react-router-dom';
import './Games.css'; 
const Games = () => {
 
  const gamesList = [
    { id: 1, title: 'Pixel Adventure', description: 'Um jogo incrível de aventura.' },
    { id: 2, title: 'Jogo de Geografia', description: 'Pequeno projeto de geografia sobre sustentabilidade' },
    { id: 3, title: 'Caça Palavras', description: '' },
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
