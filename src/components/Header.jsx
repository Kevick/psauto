import React, { useState } from 'react';
import { Gauge, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para ativar rolagem suave ao clicar nos links
  const smoothScroll = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do link
    const targetId = e.target.getAttribute('href').substring(1); // Obtém o ID do link (por exemplo, "inicio")
    const targetElement = document.getElementById(targetId); // Encontra o elemento alvo

    // Rolagem suave para o elemento alvo
    window.scrollTo({
      top: targetElement.offsetTop - 70, // Ajuste para ficar um pouco acima do topo
      behavior: 'smooth',
    });

    // Fecha o menu móvel após a rolagem
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black/70 fixed w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo e título */}
        <div className="flex items-center">
          <Gauge size={40} className="text-red-500 mr-3" />
          <h1 className="text-2xl font-bold">MCAR SOLUÇÕES AUTOMOTIVAS</h1>
        </div>

        {/* Menu de navegação para desktop */}
        <nav className="hidden md:flex space-x-4">
          <a href="#inicio" onClick={smoothScroll} className="hover:text-red-500">Início</a>
          <a href="#nosso-trabalho" onClick={smoothScroll} className="hover:text-red-500">Nossos Trabalhos</a>
          <a href="#servicos" onClick={smoothScroll} className="hover:text-red-500">Serviços</a>
          <a href="#contato" onClick={smoothScroll} className="hover:text-red-500">Contato</a>
        </nav>

        {/* Botão do menu hambúrguer para mobile */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu móvel */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/90">
            <nav className="flex flex-col items-center py-4">
              <a href="#inicio" onClick={smoothScroll} className="block py-2 hover:text-red-500">Início</a>
              <a href="#nosso-trabalho" onClick={smoothScroll} className="block py-2 hover:text-red-500">Nossos Trabalhos</a>
              <a href="#servicos" onClick={smoothScroll} className="block py-2 hover:text-red-500">Serviços</a>
              <a href="#contato" onClick={smoothScroll} className="block py-2 hover:text-red-500">Contato</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;