import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importando as páginas
import Home from './pages/Home';
import Games from './pages/Games';
import GamePage from './pages/GamePage';
import Projects from './pages/Projects';
import ProjectPage from './pages/ProjectPage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

// Configuração das rotas usando <Routes>
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/game/:id" element={<GamePage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project/:id" element={<ProjectPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
