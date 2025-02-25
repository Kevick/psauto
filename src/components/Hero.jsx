import { motion } from 'framer-motion';
import heroVideo from '../img/hero.mp4';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Vídeo de fundo */}
      <video 
        className="absolute inset-0 w-full h-full object-cover" 
        src={heroVideo}
        autoPlay 
        loop 
        muted 
        playsInline
      />
      {/* Gradiente de sobreposição */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-transparent"></div>
      
      {/* Conteúdo do Hero */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl px-4 mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-red-500 leading-tight">
          Melhore A Performance <br className="hidden md:block" />
          do Seu Veículo
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Reprogramação de ECU com tecnologia de ponta e precisão
        </p>
        
        {/* Botões CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contato')}
            className="px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Agende Agora
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('nosso-trabalho')}
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Saiba Mais
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
