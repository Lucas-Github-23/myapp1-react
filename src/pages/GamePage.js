import React from 'react';
import { useParams } from 'react-router-dom';
import './GamePage.css';  // Importação dos estilos específicos para a página de jogo

const GamePage = () => {
  const { id } = useParams();

  // Conteúdo fictício para os jogos (substitua com dados reais conforme necessário)
  const gameData = {
    1: { title: 'Jogo 1', description: 'Um jogo incrível de aventura.', url: 'https://natsu-infinito.github.io/Pixel-Adventure-Agrinho/' },
    2: { title: 'Jogo 2', description: 'Aprenda pobre preservação do meio ambiente atraves desse jogo.', url: 'https://lucas-github-23.github.io/projeto-geografia/' },
    3: { title: 'Jogo 3', description: 'Desafios de lógica e estratégia.', url: 'https://example.com/game3' }
  };

  const game = gameData[id];

  if (!game) {
    return <div className="game-page-container"><p>Jogo não encontrado.</p></div>;
  }

  return (
    <div className="game-page-container">
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <div className="iframe-container">
        <iframe
          src={game.url}
          title={game.title}
          width="100%"
          height="500px"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default GamePage;
