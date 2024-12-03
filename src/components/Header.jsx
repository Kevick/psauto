import { Gauge } from 'lucide-react';

const Header = () => {
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
  };

  return (
    <header className="bg-black/70 fixed w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Gauge size={40} className="text-red-500 mr-3" />
          <h1 className="text-2xl font-bold">MCAR SOLUÇÕES AUTOMOTIVAS</h1>
        </div>
        <nav className="space-x-4">
          <a href="#inicio" onClick={smoothScroll} className="hover:text-red-500">Início</a>
          <a href="#nosso-trabalho" onClick={smoothScroll} className="hover:text-red-500">Nossos Trabalhos</a>
          <a href="#servicos" onClick={smoothScroll} className="hover:text-red-500">Serviços</a>
          <a href="#contato" onClick={smoothScroll} className="hover:text-red-500">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
