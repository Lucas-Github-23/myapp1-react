import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Importando a imagem
import logoImg from '../images/icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          {/* Usando a imagem importada */}
          <img src={logoImg} alt="Logo" className="logo-img" />
        </Link>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/">Início</Link>
        </li>
        <li className="navbar-item dropdown">
          <span className="dropdown-toggle" onClick={toggleMenu}>Menu</span>
          <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
            <li><Link to="/games">Jogos</Link></li>
            <li><Link to="/projects">Projetos</Link></li>
            <li><Link to="/about">Quem Somos</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
