import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ ...status, submitting: true });

    // Tus valores reales de EmailJS
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;


    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        setStatus({
          submitting: false,
          submitted: true,
          success: true,
          message: t('contact.form.success')
        });
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setStatus({
          submitting: false,
          submitted: true,
          success: false,
          message: t('contact.form.error')
        });
        console.error('Email error:', error);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{t('contact.subtitle')}</h3>
            <p>{t('contact.description')}</p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope />
                <div>
                  <strong>{t('contact.email')}</strong> maximoestudillolaboral@gmail.com
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <div>
                  <strong>{t('contact.location')}</strong> {t('contact.location.value')}
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/maxidoe2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/maxidoe24/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com/maxidoe2" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
          
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            {status.submitted && (
              <div className={`form-message ${status.success ? 'success' : 'error'}`}>
                <p>{status.message}</p>
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">{t('contact.form.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status.submitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{t('contact.form.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status.submitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">{t('contact.form.message')}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status.submitting}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn primary"
              disabled={status.submitting}
            >
              {status.submitting ? t('contact.form.sending') : t('contact.form.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
