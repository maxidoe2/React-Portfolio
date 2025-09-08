import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h2>Maximo Estudillo</h2>
        </div>
        
        {isMobile && (
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
        
        <ul className={`nav-links ${isMobile ? (mobileMenuOpen ? 'mobile-visible' : 'mobile-hidden') : ''}`}>
          <li><a href="#about" onClick={closeMobileMenu}>{t('nav.about')}</a></li>
          <li><a href="#projects" onClick={closeMobileMenu}>{t('nav.projects')}</a></li>
          <li><a href="#skills" onClick={closeMobileMenu}>{t('nav.skills')}</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>{t('nav.contact')}</a></li>
        </ul>
        
        <LanguageSelector />
      </nav>
    </header>
  );
};

export default Header;
