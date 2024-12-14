import React from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';

// Importa dinamicamente todas as imagens na pasta src/imgs

const ImageGallery = () => {
  return (
    <section id="nosso-trabalho" className="py-16 bg-gray-800">
      <div className="container mx-auto">
        {/* Instagram Feed com Grid */}
        <div className="mt-12">
          <h3 className="text-3xl text-center mb-8 text-red-500">Nosso Instagram</h3>
          {/* Estilo do Grid para o Feed do Instagram */}
          <div className="elfsight-widget" style={{ width: '100%', height: 'auto' }}>
            <ElfsightWidget widgetID="7f6d9182-bb2f-425d-a7cb-695d39328658" />
          </div>     
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
