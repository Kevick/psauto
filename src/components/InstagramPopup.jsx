import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, Instagram } from 'lucide-react';

const InstagramPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay/Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-lg bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-2xl border border-gray-800 mx-4"
          >
            <div className="relative p-6">
              {/* Rest of your modal content */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Instagram size={24} className="text-red-500" />
                  <h3 className="text-xl font-bold text-white">
                  Ajude-nos a ser a Melhor Oficina do Ano 🏆
                  </h3>
                </div>

                <div className="mb-6 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.instagram.com/p/DHMWF-mutqT/embed"
                    className="w-full aspect-square"G
                    frameBorder="0"
                    scrolling="no"
                    allowtransparency="true"
                    title="Instagram post"
                  ></iframe>
                </div>

                <motion.a
                  href="https://www.instagram.com/p/DHMWF-mutqT/?comment=@mcar.solucoes.automotivas%20Vocês%20merecem%20o%20prêmio!%20🏆"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-red-500 to-rose-500 text-white font-bold px-8 py-3 rounded-full hover:from-red-600 hover:to-rose-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver no Instagram
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default InstagramPopup;
