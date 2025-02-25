import { Wrench, BarChart, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-red-700">
            Nossos Serviços
          </span>
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Wrench,
              title: "Reprogramação ECU",
              description: "Otimização eletrônica para máximo desempenho"
            },
            {
              icon: BarChart,
              title: "Diagnóstico",
              description: "Análise completa dos sistemas do veículo"
            },
            {
              icon: CheckCircle,
              title: "Mecânica Especializada",
              description: "Atendimento especializado e personalizado"
            }
          ].map((servico, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700/30 text-center relative cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <motion.div
                className="flex justify-center mb-6 relative"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute w-16 h-16 bg-gradient-to-r from-red-500/20 to-rose-500/20 blur-xl rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
                <servico.icon size={50} className="text-red-500 group-hover:text-rose-500 transition-colors relative z-10" />
              </motion.div>
              <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
                {servico.title}
              </h4>
              <p className="text-gray-300">{servico.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
