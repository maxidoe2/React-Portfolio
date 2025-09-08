import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// Importar iconos de tecnologías
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPython, 
  FaGitAlt,
  FaBootstrap,
  FaServer,
  FaGlobe,
  FaExpand,
  FaTimes
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiFirebase, 
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiTelegram,
  SiI18Next
} from 'react-icons/si';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Projects = () => {
  const { t } = useTranslation();
  const [currentProject, setCurrentProject] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [imageViewer, setImageViewer] = useState({
    isOpen: false,
    image: '',
    alt: ''
  });

  // Mapeo de tecnologías a iconos
  const techIcons = {
    'React': <FaReact color="#61DAFB" />,
    'Node.js': <FaNodeJs color="#339933" />,
    'MongoDB': <SiMongodb color="#47A248" />,
    'Express': <SiExpress color="#000000" />,
    'JavaScript': <FaJs color="#F7DF1E" />,
    'HTML5': <FaHtml5 color="#E34F26" />,
    'CSS3': <FaCss3Alt color="#1572B6" />,
    'Firebase': <SiFirebase color="#FFCA28" />,
    'TypeScript': <SiTypescript color="#3178C6" />,
    'Next.js': <SiNextdotjs color="#000000" />,
    'Python': <FaPython color="#3776AB" />,
    'Bootstrap': <FaBootstrap color="#7952B3" />,
    'Tailwind': <SiTailwindcss color="#06B6D4" />,
    'PostgreSQL': <SiPostgresql color="#336791" />,
    'MySQL': <SiMysql color="#4479A1" />,
    'Git': <FaGitAlt color="#F05032" />,
    'API': <FaServer color="#6A737D" />,
    'i18next': <SiI18Next color="#26A69A" />,
    'Telegram': <SiTelegram color="#26A5E4" />,
    'Web': <FaGlobe color="#4285F4" />
  };

  // Función para verificar si un proyecto tiene demo disponible
  const hasDemo = (demoUrl) => {
    return demoUrl && demoUrl !== '#';
  };

  // Proyectos con tecnologías basadas en las descripciones
  const projects = [
    {
      id: 1,
      titleKey: "projects.project1.title",
      descriptionKey: "projects.project1.description",
      technologies: ["React", "Firebase", "Express", "API"],
      github: "https://github.com/maxidoe2/ytaku",
      demo: t('projects.project1.demoUrl'),
      image: "/images/projects/project1.png",
      imageAlt: "YTAKU website screenshot"
    },
    {
      id: 2,
      titleKey: "projects.project2.title",
      descriptionKey: "projects.project2.description",
      technologies: ["React", "Node.js", "Firebase", "i18next"],
      github: "https://github.com/maxidoe2/andenblitze",
      demo: t('projects.project2.demoUrl'),
      image: "/images/projects/project2.png",
      imageAlt: "ANDENBLITZE website screenshot"
    },
    {
      id: 3,
      titleKey: "projects.project3.title",
      descriptionKey: "projects.project3.description",
      technologies: ["React", "JavaScript", "Node.js", "Firebase"],
      github: "https://github.com/maxidoe2/starlinkmaracaibo",
      demo: t('projects.project3.demoUrl'),
      image: "/images/projects/project3.png",
      imageAlt: "Starlinkmaracaibo website screenshot"
    },
    {
      id: 4,
      titleKey: "projects.project4.title",
      descriptionKey: "projects.project4.description",
      technologies: ["Python", "Telegram", "API"],
      github: "https://github.com/maxidoe2/Python-Bot-Telegram",
      demo: t('projects.project4.demoUrl'),
      image: "/images/projects/project4.png",
      imageAlt: "Telegram Bot screenshot"
    },
    {
      id: 5,
      titleKey: "projects.project5.title",
      descriptionKey: "projects.project5.description",
      technologies: ["Python", "JavaScript"],
      github: "https://github.com/maxidoe2",
      demo: t('projects.project5.demoUrl'),
      image: "/images/projects/project4.png",
      imageAlt: "Seed Phrase Generator screenshot"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Abrir visor de imágenes
  const openImageViewer = (image, alt) => {
    setImageViewer({
      isOpen: true,
      image,
      alt
    });
    // Deshabilitar scroll cuando el visor está abierto
    document.body.style.overflow = 'hidden';
  };

  // Cerrar visor de imágenes
  const closeImageViewer = () => {
    setImageViewer({
      isOpen: false,
      image: '',
      alt: ''
    });
    // Restaurar scroll
    document.body.style.overflow = 'auto';
  };

  // Auto-play del carrusel (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!imageViewer.isOpen) { // Solo avanzar si el visor de imágenes está cerrado
        nextProject();
      }
    }, 6000); // Cambia cada 6 segundos

    return () => clearInterval(interval);
  }, [imageViewer.isOpen]);

  // Obtener proyectos visibles (mostrar 2 a la vez en desktop, 1 en móvil)
  const getVisibleProjects = () => {
    const visibleCount = isMobile ? 1 : 2;
    const visible = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentProject + i) % projects.length;
      visible.push(projects[index]);
    }
    
    return visible;
  };

  const [visibleProjects, setVisibleProjects] = useState(getVisibleProjects());

  useEffect(() => {
    setVisibleProjects(getVisibleProjects());
  }, [currentProject, isMobile]);

  // Actualizar proyectos visibles al cambiar el tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cerrar el visor de imágenes con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && imageViewer.isOpen) {
        closeImageViewer();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imageViewer.isOpen]);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{t('projects.title')}</h2>
        
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevProject} aria-label="Previous project">
            <IoChevronBack />
          </button>
          
          <div className="projects-carousel">
            <div 
              className="projects-track" 
              style={{ 
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem'
              }}
            >
              {visibleProjects.map((project, index) => (
                <div 
                  key={`${project.id}-${index}`} 
                  className="project-card"
                  style={{
                    width: isMobile ? '100%' : 'calc(50% - 1rem)',
                    flex: isMobile ? '0 0 100%' : '0 0 calc(50% - 1rem)'
                  }}
                >
                  <div className="project-image">
                    <img 
                      src={project.image} 
                      alt={project.imageAlt}
                      className="project-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="image-placeholder" style={{display: 'none'}}>
                      {t('projects.image.alt')}
                    </div>
                    <div className="project-overlay">
                      <div className="overlay-content">
                        <h4>{t(project.titleKey)}</h4>
                        <div className="overlay-links">
                          <button 
                            className="overlay-btn expand-btn"
                            onClick={() => openImageViewer(project.image, project.imageAlt)}
                            aria-label="View full image"
                          >
                            <FaExpand />
                          </button>
                          <a href={project.github} className="overlay-btn" target="_blank" rel="noopener noreferrer">
                            {t('projects.github')}
                          </a>
                          {hasDemo(project.demo) && (
                            <a href={project.demo} className="overlay-btn" target="_blank" rel="noopener noreferrer">
                              {t('projects.demo')}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{t(project.titleKey)}</h3>
                    <p>{t(project.descriptionKey)}</p>
                    <div className="technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="tech-item">
                          <span className="tech-icon">
                            {techIcons[tech] || <FaJs color="#F7DF1E" />}
                          </span>
                          <span className="tech-name">{tech}</span>
                        </div>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.github} className="btn secondary" target="_blank" rel="noopener noreferrer">
                        {t('projects.github')}
                      </a>
                      {hasDemo(project.demo) && (
                        <a href={project.demo} className="btn primary" target="_blank" rel="noopener noreferrer">
                          {t('projects.demo')}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-btn next" onClick={nextProject} aria-label="Next project">
            <IoChevronForward />
          </button>
        </div>

        {/* Indicadores del carrusel - Uno por cada proyecto */}
        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentProject || (index === (currentProject + 1) % projects.length && !isMobile) ? 'active' : ''}`}
              onClick={() => setCurrentProject(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Visor de imágenes a pantalla completa */}
      {imageViewer.isOpen && (
        <div className="image-viewer-overlay" onClick={closeImageViewer}>
          <div className="image-viewer-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-viewer" onClick={closeImageViewer}>
              <FaTimes />
            </button>
            <img 
              src={imageViewer.image} 
              alt={imageViewer.alt} 
              className="fullscreen-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
