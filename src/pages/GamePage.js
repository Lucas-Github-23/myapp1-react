import React from 'react';
import { useParams } from 'react-router-dom';
import './GamePage.css'; 

const GamePage = () => {

  const { id } = useParams();
  const gameData = {
    1: { 
      title: 'Pixel Adventure', 
      description: 'Um jogo incrível de aventura. Explore cenários diversos e supere desafios emocionantes!',
      url: 'https://natsu-infinito.github.io/Pixel-Adventure-Agrinho/',
      additionalInfo: 'Este jogo foi feito em 2022 como um projeto para o programa Agrinho'
    },
    2: { 
      title: 'Projeto de Geografia', 
      description: 'Este jogo foi desenvolvido como parte de um projeto para a disciplina de Geografia pelos alunos do 2º Ano A do curso técnico em Desenvolvimento de Sistemas do Colégio Santa Maria Goretti.',
      url: 'https://lucas-github-23.github.io/projeto-geografia/',
      additionalInfo: 'Este jogo aborda o tema das queimadas nas florestas, destacando a gravidade desse problema ambiental. No entanto, as queimadas são apenas uma parte de um cenário mais amplo de desafios que enfrentamos atualmente, como o desmatamento, a poluição dos rios, a perda de biodiversidade e as mudanças climáticas. É fundamental que reflitamos sobre a importância de preservar o meio ambiente em todas as suas dimensões, buscando ações que promovam um futuro mais sustentável para o planeta.'
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
          allowFullScreen 
        ></iframe>
      </div>
      <br></br>
      <p className="additional-info">{game.additionalInfo}</p>
    </div>
  );
};

export default GamePage;
