import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Header
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.contact": "Contact",

      // About Section
      "about.greeting": "Hi, I'm",
      "about.role": "Full Stack Developer",
      "about.description": "I'm a passionate developer who loves creating reliable web applications. I enjoy learning new technologies and solving complex problems.",
      "about.cta.contact": "Get In Touch",
      "about.cta.work": "View My Work",
      "about.photo.alt": "Your Photo",

      // Projects Section
      "projects.title": "My Projects",

      "projects.project1.title": "YTAKU",
      "projects.project1.description": "Catalog/commerce web app built with React + Firebase, with admin, auth and contact API via Express.",
      "projects.project1.demoUrl": "https://ytakucba.web.app",

      "projects.project2.title": "ANDENBLITZE",
      "projects.project2.description": "Multilingual travel site (i18next) with dynamic content, filters and basic admin panel (React + Node/Firebase).",
      "projects.project2.demoUrl": "https://andenblitze.com",

      "projects.project3.title": "Starlink Maracaibo DOE",
      "projects.project3.description": "Landing/service portal prototype for connectivity service (React) with forms and basic integrations.",
      "projects.project3.demoUrl": "https://starlinkmaracaibodoe.web.app",

      "projects.project4.title": "Telegram Bot (Python)",
      "projects.project4.description": "Utility bot built with python-telegram-bot: commands, handlers, and simple automations.",
      "projects.project4.demoUrl": "#",

      "projects.project5.title": "Seed Phrase Generator",
      "projects.project5.description": "Python tool that generates 16-word seed phrases (for educational/demo purposes only).",
      "projects.project5.demoUrl": "#",

      "projects.github": "GitHub",
      "projects.demo": "Live Demo",
      "projects.image.alt": "Project Image",

      // Skills Section
      "skills.title": "Skills & Knowledge",
      "skills.languages": "Languages",
      "skills.frameworks": "Frameworks & Libraries",
      "skills.tools": "Tools & Technologies",
      "skills.certifications": "Certifications",
      "skills.learning": "Currently Learning",
      "skills.cert1": "Computer Hardware Basics - Cisco",
      "skills.cert2": "Fundamentals of Data Analysis  - IBM",
      "skills.cert3": "Introduction to cybersecurity - Movistar",
      "skills.cert4": "Fullstack Java Developer - EGG",

      // Contact Section
      "contact.title": "Get In Touch",
      "contact.subtitle": "Let's work together!",
      "contact.description": "I'm always interested in new opportunities and exciting projects. Feel free to reach out!",
      "contact.email": "Email:",
      "contact.location": "Location:",
      "contact.form.name": "Name",
      "contact.form.email": "Email",
      "contact.form.message": "Message",
      "contact.form.send": "Send Message",
      "contact.form.success": "Thank you! I'll get back to you soon.",
      "contact.location.value": "Mendoza, Argentina",
      "contact.form.sending": "Sending...",
      "contact.form.success": "Thank you! Your message has been sent successfully.",
      "contact.form.error": "Oops! Something went wrong. Please try again later.",

      // Footer
      "footer.rights": "All rights reserved.",

      // Language Selector
      "language.selector": "Language"
    }
  },
  es: {
    translation: {
      // Header
      "nav.about": "Acerca de",
      "nav.projects": "Proyectos",
      "nav.skills": "Habilidades",
      "nav.contact": "Contacto",

      // About Section
      "about.greeting": "Hola, soy",
      "about.role": "Desarrollador Full Stack",
      "about.description": "Desarrollador apasionado por crear aplicaciones web confiables. Me gusta aprender tecnologías nuevas y resolver problemas complejos.",
      "about.cta.contact": "Contáctame",
      "about.cta.work": "Ver mi trabajo",
      "about.photo.alt": "Tu Foto",

      // Projects Section
      "projects.title": "Mis Proyectos",

      "projects.project1.title": "YTAKU",
      "projects.project1.description": "App de catálogo/e-commerce con React + Firebase, panel admin, autenticación y API de contacto con Express.",
      "projects.project1.demoUrl": "https://ytakucba.web.app",

      "projects.project2.title": "ANDENBLITZE",
      "projects.project2.description": "Sitio turístico multilingüe (i18next) con contenido dinámico, filtros y panel básico (React + Node/Firebase).",
      "projects.project2.demoUrl": "https://andenblitze.com",

      "projects.project3.title": "Starlink Maracaibo DOE",
      "projects.project3.description": "Landing/portal de servicio (React) con formularios e integraciones básicas.",
      "projects.project3.demoUrl": "https://starlinkmaracaibodoe.web.app",

      "projects.project4.title": "Bot de Telegram (Python)",
      "projects.project4.description": "Bot de utilidades con python-telegram-bot: comandos, handlers y automatizaciones simples.",
      "projects.project4.demoUrl": "#",

      "projects.project5.title": "Generador de Frases Semilla",
      "projects.project5.description": "Herramienta en Python que genera frases semilla de 16 palabras (solo con fines educativos/demos).",
      "projects.project5.demoUrl": "#",

      "projects.github": "GitHub",
      "projects.demo": "Demo en vivo",
      "projects.image.alt": "Imagen del proyecto",

      // Skills Section
      "skills.title": "Habilidades y Conocimientos",
      "skills.languages": "Lenguajes",
      "skills.frameworks": "Frameworks y Librerías",
      "skills.tools": "Herramientas y Tecnologías",
      "skills.certifications": "Certificaciones",
      "skills.learning": "Aprendiendo actualmente",
      "skills.cert1": "Hardware Basico de las Computadoras - Cisco",
      "skills.cert2": "Fundamentos del Analisis de Datos - IBM",
      "skills.cert3": "Introduccion a la Ciberseguridad - Movistar",
      "skills.cert4": "Desarrollador Java Fullstack - EGG",

      // Contact Section
      "contact.title": "Ponte en contacto",
      "contact.subtitle": "¡Trabajemos juntos!",
      "contact.description": "Siempre abierto a nuevas oportunidades y proyectos. ¡Escribime si querés colaborar!",
      "contact.email": "Email:",
      "contact.location": "Ubicación:",
      "contact.form.name": "Nombre",
      "contact.form.email": "Email",
      "contact.form.message": "Mensaje",
      "contact.form.send": "Enviar",
      "contact.form.success": "¡Gracias! Te responderé pronto.",
      "contact.location.value": "Mendoza, Argentina",
      "contact.form.sending": "Enviando...",
      "contact.form.success": "¡Gracias! Tu mensaje ha sido enviado con éxito.",
      "contact.form.error": "¡Ups! Algo salió mal. Por favor, inténtalo de nuevo más tarde.",
      // Footer
      "footer.rights": "Todos los derechos reservados.",

      // Language Selector
      "language.selector": "Idioma"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
