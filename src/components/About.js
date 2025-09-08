import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1>{t('about.greeting')} <span className="highlight">Maximo Estudillo</span></h1>
            <h2>{t('about.role')}</h2>
            <div className="location">
              <img 
                src="/images/flags/argentina.webp" 
                alt="Bandera de Argentina" 
                className="country-flag"
              />
              <span>{t('contact.location.value')}</span>
            </div>
            <p>{t('about.description')}</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn primary">{t('about.cta.contact')}</a>
              <a href="#projects" className="btn secondary">{t('about.cta.work')}</a>
            </div>
          </div>
          <div className="about-image">
            <div className="profile-image-container">
              <img 
                src="/images/profile/Estudillo.png" 
                alt={t('about.photo.alt')}
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder" style={{display: 'none'}}>
                <span>{t('about.photo.alt')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
