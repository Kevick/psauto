import React, { useState } from 'react';
import { motion } from 'framer-motion';  // Importando o framer-motion
import Header from '../components/Header';
import Hero from '../components/Hero';
import ImageGallery from '../components/ImageGallery';
import ServicesSection from '../components/ServicesSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

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

    window.open(`https://wa.me/5524993210516?text=${mensagem}`, '_blank');
  };

  return (
    <div 
      id="inicio" 
      className="bg-gray-900 text-white min-h-screen"
      style={{ scrollBehavior: 'smooth' }} // Scroll suave inline
    >
        <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ImageGallery />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ServicesSection />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ContactForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      </motion.div>

      <Footer />
    </div>
  );
};

export default PsautoWebsite;
