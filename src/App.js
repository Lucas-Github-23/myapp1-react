import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';  // Corrigido para importar corretamente como AppRoutes
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />  {/* Barra de navegação fixa no topo */}
        <AppRoutes />   {/* Conteúdo das páginas definido pelas rotas */}
        <Footer />   {/* Rodapé fixo no final da página */}
      </div>
    </BrowserRouter>
  );
};

export default App;
