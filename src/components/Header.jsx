import React, { useState } from 'react';
import { Gauge, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", text: "Início", hoverColor: "hover:text-red-500" },
    { href: "#nosso-trabalho", text: "Nossos Trabalhos", hoverColor: "hover:text-orange-600" },
    { href: "#servicos", text: "Serviços", hoverColor: "hover:text-rose-500" },
    { href: "#contato", text: "Contato", hoverColor: "hover:text-red-600" }
  ];

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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={smoothScroll}
              className={`font-bold transition-colors duration-300 ${link.hoverColor}`}
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Botão do menu hambúrguer para mobile */}
        <button 
          className="md:hidden text-white hover:text-orange-600 transition-colors duration-300" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu móvel */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/90">
            <nav className="flex flex-col items-center py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={smoothScroll}
                  className={`block py-2 font-bold transition-colors duration-300 ${link.hoverColor}`}
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;