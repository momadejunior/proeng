import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace 'your_service_id', 'your_template_id', and 'your_user_id' with your actual EmailJS keys
    emailjs
      .sendForm(
        'service_g6999ia',
        'your_template_id',
        e.target,
        'service_g6999ia'
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('There was an error sending your message. Please try again.');
          console.error(error);
        }
      );
  };

  return (
    <>
      <div className="page">
        <div className="portfolio-page">
          <h2>CONTACTA-NOS</h2>
          <div className="small-description">
            <div>
              <p className="email">info@proeng.co.mz</p>
              <p className="cell">(+258) 84 000 0000</p>
              <p className="location address">Av. Informacao por inserir</p>
              <p className="location">Maputo - Moçambique</p>
            </div>
          </div>
        </div>

        <div className="main">
          <img className="img-fluid img-project" src="contact.jpg" alt="teste" />
        </div>

        <div className="portfolio-page contact-container">
          <h2>ESCREVE-NOS</h2>

          <form onSubmit={handleSubmit} className="small-description col-contact">
            <input
              type="text"
              name="name"
              className="input-field"
              placeholder="Nome"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              className="input-field"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              className="input-field"
              placeholder="Sua mensagem"
              value={formData.message}
              onChange={handleInputChange}
            />
            <input
              type="submit"
              className="input-field"
              value="Enviar Mensagem"
            />
          </form>
        </div>
      </div>
    </>
  );
}
