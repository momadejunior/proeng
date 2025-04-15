import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from '../context/TranslationContext';

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ow7nj7r',
        'template_8dyr5no', // Substituir pelo ID real
        e.target,
        'OAXV_TY-Aek8NjEhS'
      )
      .then(
        (result) => {
          alert(t.successMessage);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert(t.errorMessage);
          console.error(error);
        }
      );
  };

  return (
    <div className="page">
      <div className="portfolio-page">
        <h2>{t.contactTitle}</h2>
        <div className="small-description">
          <div>
            <p className="email">info@proeng.co.mz</p>
            <p className="cell">(+258) 84 000 0000</p>
            <p className="location address">{t.address}</p>
            <p className="location">{t.cityCountry}</p>
          </div>
        </div>
      </div>

      <div className="main">
        <img className="img-fluid img-project" src="contact.jpg" alt="contact" />
      </div>

      <div className="portfolio-page contact-container">
        <h2>{t.writeUs}</h2>

        <form onSubmit={handleSubmit} className="small-description col-contact">
          <input
            type="text"
            name="name"
            className="input-field"
            placeholder={t.name}
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            className="input-field"
            placeholder={t.email}
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            className="input-field"
            placeholder={t.message}
            value={formData.message}
            onChange={handleInputChange}
          />
          <input
            type="submit"
            className="input-field"
            value={t.sendMessage}
          />
        </form>
      </div>
    </div>
  );
}
