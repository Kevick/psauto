import React, { useState } from 'react';
import {Gauge, Car, Send, CheckCircle, Wrench, BarChart } from 'lucide-react';

const PsautoWebsite = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    modelo: '',
    ano: '',
    observacoes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Formatar mensagem para WhatsApp
    const mensagem = `Olá, gostaria de um orçamento de remap!\n
*Dados do Cliente:*
- Nome: ${formData.nome}
- Telefone: ${formData.telefone}
- Email: ${formData.email}

*Dados do Veículo:*
- Modelo: ${formData.modelo}
- Ano: ${formData.ano}

*Observações:*
${formData.observacoes}

Aguardo retorno!`.replace(/\s+/g, '%20');

    // Enviar para WhatsApp
    window.open(`https://wa.me/5524993210516?text=${mensagem}`, '_blank');
  };

  // Imagens de preparação (URLs de exemplo)
  const imagensPreparo = [
    'https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2luc3RhZ3JhbS5mb2dsMS0xLmZuYS5mYmNkbi5uZXQvdi90NTEuMjkzNTAtMTUvNDEyNDI0OTY5XzY3MjI5MzYzMTQ1NDUxMF82MDIzOTgyNDQ3MzU2ODM4Mjg1X24uanBnP3N0cD1kc3QtanBnX2UxNV90dDYmX25jX2h0PWluc3RhZ3JhbS5mb2dsMS0xLmZuYS5mYmNkbi5uZXQmX25jX2NhdD0xMTAmX25jX29oYz0welpTcGVaNHY1WVE3a052Z0ZCdHFLZCZfbmNfZ2lkPWMwNzc2YTBhOTA2ODQxZTU4MGE3NWZmYjZiZDc2ZGYzJmVkbT1BUHMxN0NVQkFBQUEmY2NiPTctNSZvaD0wMF9BWUJ6TkNpY1MybmNmY2t1Ui1ZOVdSQm5nanRDUXdqVjc4cjBkTnBnbEl1V1pnJm9lPTY3NEY5MDNGJl9uY19zaWQ9MTBkMTNiIiwiZmlsZW5hbWUiOiJTbmFwaW5zdGEuYXBwX3RodW1iXzQxMjQyNDk2OV82NzIyOTM2MzE0NTQ1MTBfNjAyMzk4MjQ0NzM1NjgzODI4NV9uLmpwZyJ9.qbB7PecPAVo-4NYAcQ6dfEE626IsX3N6f2gQfNJmPJc',
    'https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjkzNTAtMTUvNDY3ODAzMTEwXzU2NzY2NzEzMjY4NjA2OV83NzA2NjA3NTU5OTk1OTc3NTQ2X24uanBnP3N0cD1kc3QtanBnX2UzNV9zNjQweDY0MF9zaDAuMDgmZWZnPWV5SjJaVzVqYjJSbFgzUmhaeUk2SW1sdFlXZGxYM1Z5YkdkbGJpNHhORFF3ZURFME5EQXVjMlJ5TG1ZeU9UTTFNQzVrWldaaGRXeDBYMmx0WVdkbEluMCZfbmNfaHQ9c2NvbnRlbnQuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTEwOSZfbmNfb2hjPVFtdzd6WVhqZG44UTdrTnZnSGFKSE0zJl9uY19naWQ9ODQ1Yjk1ZTI2NDczNDI5Yzk4M2VjMTU4YzgzMWFmYjYmZWRtPUFQczE3Q1VCQUFBQSZjY2I9Ny01Jm9oPTAwX0FZQWxPV013ZjlvNVpuMFRucllGaVcyb1BweEFfYkxPRWNiMHJCcUFITW5JNXcmb2U9Njc0Rjg4NDQmX25jX3NpZD0xMGQxM2IiLCJmaWxlbmFtZSI6IlNuYXBpbnN0YS5hcHBfdGh1bWJfNDY3ODAzMTEwXzU2NzY2NzEzMjY4NjA2OV83NzA2NjA3NTU5OTk1OTc3NTQ2X24uanBnIn0.f3JbbVZDFBo8E-pYdpJdWVuMBsTnxNrKLO_8K3fr2j0',
    'https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjkzNTAtMTUvNDY3OTcxNDAzXzEzMTk0Nzg1NTYwOTA4MjNfODgxMDE0MjU5NTc1NjMyODY1MV9uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfczY0MHg2NDBfc2gwLjA4X3R0NiZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJbWx0WVdkbFgzVnliR2RsYmk0eE5EUXdlREUwTXprdWMyUnlMbVl5T1RNMU1DNWtaV1poZFd4MFgybHRZV2RsSW4wJl9uY19odD1zY29udGVudC5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTExJl9uY19vaGM9a0E4bFZZZ2E4Qk1RN2tOdmdHZDZiaTcmX25jX2dpZD04NDViOTVlMjY0NzM0MjljOTgzZWMxNThjODMxYWZiNiZlZG09QVBzMTdDVUJBQUFBJmNjYj03LTUmb2g9MDBfQVlDVXNibU9iWlo1aTZvZUtid3NFZFlvM1dpdEpTWnNkZDQwM2pkQURfMlIyZyZvZT02NzRGQTZEMCZfbmNfc2lkPTEwZDEzYiIsImZpbGVuYW1lIjoiU25hcGluc3RhLmFwcF90aHVtYl80Njc5NzE0MDNfMTMxOTQ3ODU1NjA5MDgyM184ODEwMTQyNTk1NzU2MzI4NjUxX24uanBnIn0.baEiXvKmCIqzyAQU3QWsRCi_wOG9m_QSoJmHqGgQFUQ',
    'https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjkzNTAtMTUvNDY3OTYyMjY3XzEwODIzODQxMzY0NjIyOTJfNTkzODA3ODY2NzAzNTQ4MDEyMV9uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfczY0MHg2NDBfc2gwLjA4JmVmZz1leUoyWlc1amIyUmxYM1JoWnlJNkltbHRZV2RsWDNWeWJHZGxiaTR4TkRRd2VERTBOREF1YzJSeUxtWXlPVE0xTUM1a1pXWmhkV3gwWDJsdFlXZGxJbjAmX25jX2h0PXNjb250ZW50LmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDQmX25jX29oYz1vN2NESFQ4aXhWTVE3a052Z0c5TWgyYyZfbmNfZ2lkPTg0NWI5NWUyNjQ3MzQyOWM5ODNlYzE1OGM4MzFhZmI2JmVkbT1BUHMxN0NVQkFBQUEmY2NiPTctNSZvaD0wMF9BWUFmU1A0a2FxM3d0R2t1NG5kWHhTeUdxYzZaNGRneVk0bVV5MnpRbk9xMGJBJm9lPTY3NEY5MjJBJl9uY19zaWQ9MTBkMTNiIiwiZmlsZW5hbWUiOiJTbmFwaW5zdGEuYXBwX3RodW1iXzQ2Nzk2MjI2N18xMDgyMzg0MTM2NDYyMjkyXzU5MzgwNzg2NjcwMzU0ODAxMjFfbi5qcGcifQ.iFidzz7Vzx7tSSMIiMlQeD3ifqenvRYG5U0G7fCFFAA',
    'https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjkzNTAtMTUvNDY3OTEwMjM2XzQzNjYxMjk4NTk1ODEwNV80NTAyMzQ5MjUzMzk2ODgxMTkxX24uanBnP3N0cD1kc3QtanBnX2UzNV9zNjQweDY0MF9zaDAuMDgmZWZnPWV5SjJaVzVqYjJSbFgzUmhaeUk2SW1sdFlXZGxYM1Z5YkdkbGJpNHhORFF3ZURFME5EQXVjMlJ5TG1ZeU9UTTFNQzVrWldaaGRXeDBYMmx0WVdkbEluMCZfbmNfaHQ9c2NvbnRlbnQuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTEwOSZfbmNfb2hjPUd1a01VRGpNNkxzUTdrTnZnRWJudFgyJl9uY19naWQ9ODQ1Yjk1ZTI2NDczNDI5Yzk4M2VjMTU4YzgzMWFmYjYmZWRtPUFQczE3Q1VCQUFBQSZjY2I9Ny01Jm9oPTAwX0FZQVFvcThjSmF6dm5kcGpGdnlpQVZwT1N3MVlBSERxZUt0ZldxbUhGSUdPQ0Emb2U9Njc0Rjg1RUQmX25jX3NpZD0xMGQxM2IiLCJmaWxlbmFtZSI6IlNuYXBpbnN0YS5hcHBfdGh1bWJfNDY3OTEwMjM2XzQzNjYxMjk4NTk1ODEwNV80NTAyMzQ5MjUzMzk2ODgxMTkxX24uanBnIn0.Vym1bn8bsGZ6jYhx7lq4mKR2QqPLLOez3FOmgeTl_PE',

  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Cabeçalho */}
      <header className="bg-black/70 fixed w-full z-50 top-0">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <Gauge size={40} className="text-yellow-500 mr-3" />

            <h1 className="text-2xl font-bold">Psauto Performance</h1>
          </div>
          <nav className="space-x-4">
            <a href="#servicos" className="hover:text-yellow-500">Serviços</a>
            <a href="#contato" className="hover:text-yellow-500">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
<section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" 
  style={{ backgroundImage: "url('https://www.shutterstock.com/shutterstock/photos/2112514727/display_1500/stock-photo-car-engine-chip-tuning-ecu-remapping-for-performance-2112514727.jpg')" }}>
  
  {/* Gradiente de sobreposição */}
  <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 opacity-80"></div>
  
  {/* Conteúdo */}
  <div className="relative z-10 max-w-2xl px-4">
    <h2 className="text-5xl font-bold mb-6 text-yellow-500">
      A Performance do Seu Veículo
    </h2>
    <p className="text-xl mb-8 text-gray-300">
      Reprogramação de ECU com tecnologia de ponta e precisão
    </p>
  </div>
</section>


      {/* Galeria de Imagens */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto">
          <h3 className="text-3xl text-center mb-12 text-yellow-500">Nosso Trabalho</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {imagensPreparo.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img 
                  src={img} 
                  alt={`Preparação ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <h3 className="text-3xl text-center mb-12 text-yellow-500">Nossos Serviços</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Wrench size={50} className="text-yellow-500" />,
                title: "Reprogramação ECU",
                description: "Otimização eletrônica para máximo desempenho"
              },
              {
                icon: <BarChart size={50} className="text-yellow-500" />,
                title: "Diagnóstico",
                description: "Análise completa dos sistemas do veículo"
              },
              {
                icon: <CheckCircle size={50} className="text-yellow-500" />,
                title: "Suporte Técnico",
                description: "Atendimento especializado e personalizado"
              }
            ].map((servico, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition"
              >
                <div className="flex justify-center mb-6">{servico.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{servico.title}</h4>
                <p className="text-gray-400">{servico.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="py-16 bg-gray-800">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-3xl text-center mb-12 text-yellow-500">Solicite seu Orçamento</h3>
          <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text"
                name="nome"
                placeholder="Nome Completo"
                value={formData.nome}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-yellow-500"
              />
              <input 
                type="tel"
                name="telefone"
                placeholder="Telefone (WhatsApp)"
                value={formData.telefone}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-yellow-500"
              />
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <input 
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-yellow-500"
              />
              <input 
                type="text"
                name="modelo"
                placeholder="Modelo do Veículo"
                value={formData.modelo}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-yellow-500"
              />
            </div>
            <div className="mt-4">
              <input 
                type="text"
                name="ano"
                placeholder="Ano do Veículo"
                value={formData.ano}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-yellow-500"
              />
            </div>
            <div className="mt-4">
              <textarea 
                name="observacoes"
                placeholder="Observações adicionais"
                value={formData.observacoes}
                onChange={handleInputChange}
                rows="4"
                className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-yellow-500"
              />
            </div>
            <button 
              type="submit"
              className="w-full mt-6 bg-yellow-500 text-black p-4 rounded hover:bg-yellow-600 transition flex items-center justify-center"
            >
              <Send className="mr-2" /> Enviar Orçamento
            </button>
          </form>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-black py-8 text-center">
        <p>© 2024 Psauto Performance - Todos os direitos reservados</p>
        <div className="mt-4">
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400"
          >
            (11) 99999-9999
          </a>
        </div>
      </footer>
    </div>
  );
};

export default PsautoWebsite;
