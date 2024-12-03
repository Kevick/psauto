import { Send } from 'lucide-react';

const ContactForm = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <section id="contato" className="py-16 bg-gray-800">
      <div className="container mx-auto max-w-2xl">
        <h3 className="text-3xl text-center mb-12 text-red-500">Solicite seu Orçamento</h3>
        <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <input 
              type="text"
              name="nome"
              placeholder="Nome Completo"
              value={formData.nome}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-red-500"
            />
            <input 
              type="tel"
              name="telefone"
              placeholder="Telefone (WhatsApp)"
              value={formData.telefone}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-red-500"
            />
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <input 
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-red-500"
            />
            <input 
              type="text"
              name="modelo"
              placeholder="Modelo do Veículo"
              value={formData.modelo}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-red-500"
            />
          </div>
          <div className="mt-4">
            <textarea 
              name="observacoes"
              placeholder="Observações"
              value={formData.observacoes}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-red-500"
            />
          </div>
          <button 
            type="submit"
            className="w-full mt-6 py-3 bg-red-500 text-black rounded hover:bg-red-600 flex justify-center items-center"
          >
            <Send size={20} className="mr-3" />
            Enviar Solicitação
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
