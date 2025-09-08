import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            Máximo <span>Estudillo</span>
          </div>
          
          <nav className="footer-nav">
            <a href="#about">{t('nav.about')}</a>
            <a href="#projects">{t('nav.projects')}</a>
            <a href="#skills">{t('nav.skills')}</a>
            <a href="#contact">{t('nav.contact')}</a>
          </nav>
          
          <div className="footer-social">
            <a href="https://github.com/maxidoe2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/maxidoe24/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://x.com/maxidoe2" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
          <div className="footer-bottom">
            <p>© {currentYear} Máximo Estudillo. {t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
