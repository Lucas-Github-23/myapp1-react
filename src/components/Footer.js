import React from 'react';
import './Footer.css';  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
        <ul className="footer-links">
          <li><a href="https://github.com/lucas-github-23/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/lucas-gabriel-521082279/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="/contact">Contato</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
