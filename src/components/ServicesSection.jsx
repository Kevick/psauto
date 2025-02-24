import { Wrench, BarChart, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 bg-gray-900">
      <div className="container mx-auto">
        <h3 className="text-3xl text-center mb-12 text-red-500">Nossos Serviços</h3>
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
              title: "MECÂNICA",
              description: "Atendimento especializado e personalizado"
            }
          ].map((servico, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-lg text-center relative cursor-pointer"
              whileHover={{ scale: 1.1 }} // Faz o card aumentar no hover
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <motion.div
                className="flex justify-center mb-6 relative"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute w-16 h-16 bg-red-500 opacity-30 blur-lg rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
                <servico.icon size={50} className="text-red-500 relative" />
              </motion.div>
              <h4 className="text-2xl font-bold mb-4">{servico.title}</h4>
              <p className="text-gray-400">{servico.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
