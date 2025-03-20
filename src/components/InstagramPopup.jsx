import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { X, Instagram, Award } from 'lucide-react';
import Confetti from 'react-confetti';
import CanvasConfetti from 'react-canvas-confetti';

const InstagramPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const confettiRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      confettiRef.current && confettiRef.current();
    }, 3000);

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const getConfettiInstance = (instance) => {
    confettiRef.current = instance;
  };

  const makeShot = (angle, originX) => {
    confettiRef.current &&
      confettiRef.current({
        particleCount: 100,
        angle,
        spread: 55,
        origin: { x: originX },
        colors: ['#bb0000', '#ffffff'],
      });
  };

  useEffect(() => {
    if (isVisible) {
      makeShot(60, 0);
      makeShot(120, 1);
    }
  }, [isVisible]);

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

          {/* Fireworks and Confetti */}
          <Confetti width={windowSize.width} height={windowSize.height} />
          <CanvasConfetti refConfetti={getConfettiInstance} className="fixed inset-0 z-50 pointer-events-none" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-lg bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-2xl border border-gray-800 mx-4"
          >
            <div className="relative p-6">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Award size={24} className="text-yellow-500" />
                  <h3 className="text-xl font-bold text-white">
                    Somos a Melhor Oficina do Ano! 🏆
                  </h3>
                </div>

                <div className="mb-6 rounded-lg overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-white text-lg"
                  >
                    Obrigado a todos que votaram e nos ajudaram a conquistar este prêmio!
                  </motion.div>
                </div>

                <div className="mb-6 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.instagram.com/p/DHbpSsfOima/embed"
                    className="w-full aspect-square"
                    frameBorder="0"
                    scrolling="no"
                    allowtransparency="true"
                    title="Instagram post"
                  ></iframe>
                </div>

                <motion.a
                  href="https://www.instagram.com/p/DHbpSsfOima/?img_index=12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-8 py-3 rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300"
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
