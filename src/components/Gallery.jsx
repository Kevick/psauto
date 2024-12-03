import React from 'react';

const Gallery = () => {
  const imagensPreparo = [
    'https://via.placeholder.com/150', // Substitua com URLs reais
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto">
        <h3 className="text-3xl text-center mb-12 text-yellow-500">Nosso Trabalho</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {imagensPreparo.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={img}
                alt={`Preparação ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
