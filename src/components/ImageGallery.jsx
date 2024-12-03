import React from 'react';

// Importa dinamicamente todas as imagens na pasta src/imgs
const importarImagens = (caminho) => {
  let imagens = {};
  caminho.keys().forEach((item, index) => {
    imagens[item.replace('./', '')] = caminho(item);
  });
  return imagens;
};

const imagens = importarImagens(require.context('../img', false, /\.(png|jpe?g|svg)$/));

const ImageGallery = () => {
  return (
    <section id='nosso-trabalho' className="py-16 bg-gray-800">
      <div className="container mx-auto">
        <h3 className="text-3xl text-center mb-12 text-red-500">Nosso Trabalho</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(imagens).map(([nome, caminho], index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img 
                src={caminho} 
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

export default ImageGallery;
