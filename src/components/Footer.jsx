import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    flexWrap: 'wrap',
  };

  const sectionStyle = {
    flex: 1,
    padding: '10px',
    minWidth: '250px',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  const subheadingStyle = {
    fontSize: '18px',
    marginBottom: '10px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const listItemStyle = {
    marginBottom: '8px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
  };

  const linkHoverStyle = {
    color: '#3498db',
  };

  const bottomStyle = {
    textAlign: 'center',
    padding: '20px 0',
    backgroundColor: '#34495e',
    fontSize: '14px',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Mcar Soluções Automotivas</h3>
          <p>Transformando a performance do seu veículo.</p>
        </div>
        <div style={sectionStyle}>
          <h4 style={subheadingStyle}>Links Úteis</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}><a style={linkStyle} href="#home">Início</a></li>
            <li style={listItemStyle}><a style={linkStyle} href="#services">Serviços</a></li>
            <li style={listItemStyle}><a style={linkStyle} href="#gallery">Galeria</a></li>
            <li style={listItemStyle}><a style={linkStyle} href="#contact">Contato</a></li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h4 style={subheadingStyle}>Contatos</h4>
          <p><strong>Marinho:</strong> (24) 99965-5734</p>
          <p><strong>Juninho:</strong> (24) 99294-7272</p>
          <p><strong>Júlio:</strong> (24) 98838-1435</p>
        </div>
      </div>
      <div style={bottomStyle}>
        <p>© 2024 Mcar Soluções Automotivas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
