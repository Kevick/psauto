import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = ({ formData, handleInputChange, handleSubmit }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

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

  return (
    <section id="contato" className="py-16 bg-gray-800">
      <div className="container mx-auto max-w-2xl">
        <h3 className="text-3xl text-center mb-12 text-red-500">Solicite seu Orçamento</h3>
        <form onSubmit={handleFormSubmit} className="bg-gray-900 p-8 rounded-lg shadow-lg">
          {/* Inputs do formulário */}
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

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
              <h4 className="text-lg text-red-500 mb-4">Selecione um Contato</h4>
              <ul className="mb-6">
                {contacts.map((contact) => (
                  <li
                    key={contact.phone}
                    className={`p-3 rounded cursor-pointer hover:bg-gray-800 ${
                      selectedContact?.phone === contact.phone ? 'bg-gray-800' : ''
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
                className={`w-full py-3 rounded ${
                  selectedContact ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-700 cursor-not-allowed'
                } text-black`}
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
