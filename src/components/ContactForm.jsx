import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = ({ formData, handleInputChange, handleSubmit }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  const contacts = [
    { name: 'Marinho', phone: '(24) 99965-5734' },
    { name: 'Juninho', phone: '(24) 99294-7272' },
    { name: 'Julio', phone: '(24) 98838-1435' },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleSendToContact = () => {
    if (selectedContact) {
      handleSubmit(selectedContact); // Passa o contato selecionado
      setShowModal(false);
    }
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-2xl px-4">
        <h3 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
            Solicite seu Orçamento
          </span>
        </h3>
        <form onSubmit={handleFormSubmit} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700/30">
          {/* Form inputs with improved styling */}
          <div className="grid md:grid-cols-2 gap-4">
            <input 
              type="text"
              name="nome"
              placeholder="Nome Completo"
              value={formData.nome}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
            />
            <input 
              type="tel"
              name="telefone"
              placeholder="Telefone (WhatsApp)"
              value={formData.telefone}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
            />
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <input 
              type="text"
              name="marca"
              placeholder="Marca do Veículo"
              value={formData.marca}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
            />
            <input 
              type="text"
              name="modelo"
              placeholder="Modelo do Veículo"
              value={formData.modelo}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
            />
            <input 
              type="number"
              name="ano"
              placeholder="Ano do Veículo"
              value={formData.ano}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
            />
            <select
                name="servico"
                value={formData.servico}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
              >
                <option value="" disabled>Selecione o Serviço Desejado</option>
                <option value="Remap/Chip">Remap/Chip</option>
                <option value="Calibração de Motores">Calibração de Motores</option>
                <option value="Dinamômetro">Dinamômetro</option>
                <option value="Manutenção Mecânica">Manutenção Mecânica</option>
                <option value="Manutenção Elétrica em Geral">Manutenção Elétrica em Geral</option>
                <option value="Instalação e Diagnóstico de Injeções Programáveis">Instalação e Diagnóstico de Injeções Programáveis</option>
              </select>
          </div>
          <div className="mt-4">
            <textarea 
              name="observacoes"
              placeholder="Observações"
              value={formData.observacoes}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
            />
          </div>
          <button 
            type="submit"
            className="w-full mt-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 flex justify-center items-center shadow-lg"
          >
            <Send size={20} className="mr-3" />
            Enviar Solicitação
          </button>
        </form>

        {/* Modal with improved styling */}
        {showModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-8 rounded-xl shadow-lg border border-gray-700/30 text-center max-w-sm w-full mx-4">
              <h4 className="text-xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                  Selecione um Contato
                </span>
              </h4>
              <ul className="mb-6 space-y-2">
                {contacts.map((contact) => (
                  <li
                    key={contact.phone}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedContact?.phone === contact.phone 
                        ? 'bg-red-500/10 border border-red-500/30' 
                        : 'hover:bg-gray-800/50'
                    }`}
                    onClick={() => setSelectedContact(contact)}
                  >
                    {contact.name} - {contact.phone}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleSendToContact}
                disabled={!selectedContact}
                className={`w-full py-3 rounded-lg transition-all duration-300 ${
                  selectedContact 
                    ? 'bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white' 
                    : 'bg-gray-700/50 cursor-not-allowed text-gray-400'
                }`}
              >
                Confirmar Envio
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
