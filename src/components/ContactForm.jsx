import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const contacts = [
    { name: "Marinho", phone: "(24) 99965-5734" },
    { name: "Juninho", phone: "(24) 99294-7272" },
    { name: "Júlio", phone: "(24) 98838-1435" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupVisible(true);
  };

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    setPopupVisible(false);
    alert(
      `Mensagem enviada para ${contact.name} (${contact.phone})!\n\nDetalhes:\n${JSON.stringify(
        formData,
        null,
        2
      )}`
    );
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "1rem", backgroundColor: "#f5f5f5", borderRadius: "10px" }}>
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Nome</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Mensagem</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required style={{ width: "100%", padding: "0.5rem" }}></textarea>
        </div>
        <button type="submit" style={{ padding: "0.5rem 1rem", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Enviar
        </button>
      </form>

      {isPopupVisible && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ background: "#fff", padding: "1rem", borderRadius: "10px", textAlign: "center" }}>
            <h3>Escolha o contato do WhatsApp:</h3>
            {contacts.map((contact, index) => (
              <button
                key={index}
                onClick={() => handleContactSelect(contact)}
                style={{
                  display: "block",
                  width: "100%",
                  margin: "0.5rem 0",
                  padding: "0.5rem",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {contact.name} ({contact.phone})
              </button>
            ))}
            <button
              onClick={() => setPopupVisible(false)}
              style={{ marginTop: "1rem", padding: "0.5rem", backgroundColor: "#dc3545", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
