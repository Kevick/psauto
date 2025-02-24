import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header"; // Importando o Header
import Hero from "../components/Hero";
import ImageGallery from "../components/ImageGallery";
import ServicesSection from "../components/ServicesSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const PsautoWebsite = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    marca: "",
    modelo: "",
    ano: "",
    servico: "",
    observacoes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (selectedContact) => {
    const mensagem = `
    *Solicitação de Orçamento*
    
    Prezado(a),
    
    Meu nome é *${formData.nome}* e estou interessado em um orçamento para *${formData.servico}*. 
    
    Informações do Veículo:
    - Marca: ${formData.marca}
    - Modelo: ${formData.modelo}
    - Ano: ${formData.ano}
    
    *Observações:*
    ${formData.observacoes || "Sem observações adicionais."}.
    
    Aguardo seu retorno.
    
    Atenciosamente,
    ${formData.nome}`.replace(/\s+/g, "%20");
    
    const numeroWhatsApp = `55${selectedContact.phone.replace(/\D/g, "")}`;
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, "_blank");
  };

  return (
    <div
      id="inicio"
      className="bg-gray-900 text-white min-h-screen"
      style={{ scrollBehavior: "smooth" }} // Scroll suave inline
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
        <ContactForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Footer />
      </motion.div>

    </div>
  );
};

export default PsautoWebsite;
