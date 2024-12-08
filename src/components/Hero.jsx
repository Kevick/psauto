const Hero = () => {
    return (
      <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" 
        style={{ backgroundImage: "url('https://www.qtuningtools.co.uk/wp-content/uploads/2023/09/performance-gauge-tuning-ecu-remapping.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 opacity-80"></div>
        <div className="relative z-10 max-w-2xl px-4">
          <h2 className="text-5xl font-bold mb-6 text-red-500">
            Melhore A Performance do Seu Veículo
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Reprogramação de ECU com tecnologia de ponta e precisão
          </p>
        </div>
      </section>
    );
  };
  
  export default Hero;
  
