import React from 'react';
import { Gauge } from 'lucide-react';

const Header = () => (
  <header className="bg-black/70 fixed w-full z-50 top-0">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <Gauge size={40} className="text-yellow-500 mr-3" />
        <h1 className="text-2xl font-bold">Psauto Performance</h1>
      </div>
      <nav className="space-x-4">
        <a href="#inicio" className="hover:text-yellow-500">Início</a>
        <a href="#servicos" className="hover:text-yellow-500">Serviços</a>
        <a href="#contato" className="hover:text-yellow-500">Contato</a>
      </nav>
    </div>
  </header>
);

export default Header;
