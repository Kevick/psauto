import React from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';

const ImageGallery = () => {
  return (
    <section id="nosso-trabalho" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="mt-12">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              Nossos Trabalhos
            </span>
          </h3>
          <div className="elfsight-widget rounded-lg" 
               style={{ width: '100%', height: 'auto' }}>
            <ElfsightWidget widgetID="7f6d9182-bb2f-425d-a7cb-695d39328658" />
          </div>     
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
