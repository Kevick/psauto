import React from 'react';
import { Wrench, BarChart, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: <Wrench size={50} className="text-yellow-500" />,
    title: 'Reprogramação ECU',
    description: 'Otimização eletrônica para máximo desempenho',
  },
  {
    icon: <BarChart size={50} className="text-yellow-500" />,
    title: 'Diagnóstico',
    description: 'Análise completa dos sistemas do veículo',
  },
  {
    icon: <CheckCircle size={50} className="text-yellow-500" />,
    title: 'Suporte Técnico',
    description: 'Atendimento especializado e personalizado',
  },
];

const Services = () => (
  <section id="servicos" className="py-16 bg-gray-900">
    <div className="container mx-auto">
      <h3 className="text-3xl text-center mb-12 text-yellow-500">Nossos Serviços</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition"
          >
            <div className="flex justify-center mb-6">{service.icon}</div>
            <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
