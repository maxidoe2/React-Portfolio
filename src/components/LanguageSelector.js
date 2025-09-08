import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <div className="language-dropdown">
        <button className="language-button">
          <img 
            src={i18n.language === 'es' ? '/images/flags/argentina.webp' : '/images/flags/usa.webp'}
            alt={i18n.language === 'es' ? 'Argentina' : 'USA'}
            className="flag-icon"
          />
          <span className="language-text">
            {i18n.language === 'es' ? 'Español' : 'English'}
          </span>
          <span className="dropdown-arrow">▼</span>
        </button>
        <div className="language-options">
          <button
            onClick={() => changeLanguage('es')}
            className={`language-option ${i18n.language === 'es' ? 'active' : ''}`}
          >
            <img 
              src="/images/flags/argentina.webp" 
              alt="Argentina"
              className="flag-icon"
            />
            <span>Español</span>
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`language-option ${i18n.language === 'en' ? 'active' : ''}`}
          >
            <img 
              src="/images/flags/usa.webp" 
              alt="USA"
              className="flag-icon"
            />
            <span>English</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
