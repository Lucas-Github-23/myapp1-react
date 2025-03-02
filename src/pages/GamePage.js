import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import './GamePage.css';

const GamePage = () => {
  const { id } = useParams();
  const iframeRef = useRef(null);  // Referência para o iframe

  const gameData = {
    1: { 
      title: 'Pixel Adventure', 
      description: 'Um jogo incrível de aventura. Explore cenários diversos e supere desafios emocionantes!',
      url: 'https://natsu-infinito.github.io/Pixel-Adventure-Agrinho/',
      additionalInfo: 'Este jogo foi feito em 2022 como um projeto para o programa Agrinho'
    },
    2: { 
      title: 'Projeto de Geografia', 
      description: 'Este jogo foi desenvolvido como parte de um projeto para a disciplina de Geografia pelos alunos do 2º Ano A do curso técnico em Desenvolvimento de Sistemas do Colégio Santa Maria Goretti. 2024',
      url: 'https://lucas-github-23.github.io/projeto-geografia/',
      additionalInfo: 'Este jogo aborda o tema das queimadas nas florestas, destacando a gravidade desse problema ambiental. No entanto, as queimadas são apenas uma parte de um cenário mais amplo de desafios que enfrentamos atualmente, como o desmatamento, a poluição dos rios, a perda de biodiversidade e as mudanças climáticas. É fundamental que reflitamos sobre a importância de preservar o meio ambiente em todas as suas dimensões, buscando ações que promovam um futuro mais sustentável para o planeta.'
    },
    3: { 
      title: 'Caça Palavras', 
      description: '',
      url: 'https://learningapps.org/watch?v=pbu2mxb6324',
      additionalInfo: ''
    },
  };

  const game = gameData[id];

  if (!game) {
    return (
      <div className="game-page-container">
        <p>Jogo não encontrado. Verifique se o ID está correto.</p>
      </div>
    );
  }

  const handleFullScreen = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari e Opera
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="game-page-container">
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <div className="iframe-container">
        <iframe
          ref={iframeRef}
          src={game.url}
          title={game.title}
          width="100%"
          height="500px"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <button className="fullscreen-btn" onClick={handleFullScreen}>
        Full Screen
      </button>
      <br />
      <p className="additional-info">{game.additionalInfo}</p>
    </div>
  );
};

export default GamePage;
