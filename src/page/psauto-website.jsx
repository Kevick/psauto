import React, { useState } from 'react';
import { Gauge, Send, CheckCircle, Wrench, BarChart } from 'lucide-react';
import Header from '../components/Header'
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const PsautoWebsite = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default PsautoWebsite;
