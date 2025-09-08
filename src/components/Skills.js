import React from 'react';
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
  FaDatabase,
  FaServer,
  FaCode,
  FaLaptopCode,
  FaMobile,
  FaShieldAlt,
  FaDocker,
  FaTools
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiFirebase, 
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiPostgresql,
  SiMysql,
  SiFigma,
  SiJest,
  SiCypress,
  SiReactnative
} from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import { GiArtificialIntelligence } from 'react-icons/gi';
import { TbBrandReactNative } from 'react-icons/tb';

const Skills = () => {
  const { t } = useTranslation();

  // Mapeo de habilidades a iconos
  const skillIcons = {
    // Lenguajes
    'JavaScript': <FaJs color="#F7DF1E" />,
    'Python': <FaPython color="#3776AB" />,
    'HTML5': <FaHtml5 color="#E34F26" />,
    'CSS3': <FaCss3Alt color="#1572B6" />,
    'SQL': <FaDatabase color="#336791" />,
    'TypeScript': <SiTypescript color="#3178C6" />,
    
    // Frameworks y librerías
    'React': <FaReact color="#61DAFB" />,
    'Node.js': <FaNodeJs color="#339933" />,
    'Express': <SiExpress color="#000000" />,
    'Bootstrap': <FaBootstrap color="#7952B3" />,
    'Next.js': <SiNextdotjs color="#000000" />,
    'GraphQL': <SiGraphql color="#E10098" />,
    'Firebase': <SiFirebase color="#FFCA28" />,
    'React Native': <TbBrandReactNative color="#61DAFB" />,
    
    // Herramientas
    'Git': <FaGitAlt color="#F05032" />,
    'VS Code': <BiLogoVisualStudio color="#007ACC" />,
    'MongoDB': <SiMongodb color="#47A248" />,
    'PostgreSQL': <SiPostgresql color="#336791" />,
    'MySQL': <SiMysql color="#4479A1" />,
    'Figma': <SiFigma color="#F24E1E" />,
    'Docker': <FaDocker color="#2496ED" />,
    
    // Aprendiendo
    'Testing QA': <SiJest color="#C21325" />,
    'Ethical Hacking': <FaShieldAlt color="#4CAF50" />,
    'Cypress': <SiCypress color="#17202C" />,
    'AI': <GiArtificialIntelligence color="#9C27B0" />
  };

  const skills = {
    languages: ["JavaScript", "Python", "HTML5", "CSS3", "SQL", "TypeScript"],
    frameworks: ["React", "Node.js", "Express", "Bootstrap", "Firebase", "Next.js"],
    tools: ["Git", "VS Code", "MongoDB", "PostgreSQL", "Figma", "Docker"]
  };

  const certificationKeys = [
    "skills.cert1",
    "skills.cert2",
    "skills.cert3",
    "skills.cert4"
  ];

  const learning = [
    "Testing QA",
    "Ethical Hacking",
    "React Native",
    "GraphQL"
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">{t('skills.title')}</h2>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3>{t('skills.languages')}</h3>
            <div className="skill-list">
              {skills.languages.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-icon">{skillIcons[skill]}</span>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>{t('skills.frameworks')}</h3>
            <div className="skill-list">
              {skills.frameworks.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-icon">{skillIcons[skill]}</span>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>{t('skills.tools')}</h3>
            <div className="skill-list">
              {skills.tools.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-icon">{skillIcons[skill]}</span>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="additional-info">
          <div className="info-section">
            <h3>{t('skills.certifications')}</h3>
            <ul className="cert-list">
              {certificationKeys.map((certKey, index) => (
                <li key={index}>
                  <div className="cert-item">
                    <span className="cert-icon">
                      {/* Simplificado para usar FaLaptopCode con diferentes colores según el índice */}
                      <FaLaptopCode color={
                        index === 0 ? "#61DAFB" : // Azul (React)
                        index === 1 ? "#F7DF1E" : // Amarillo (JavaScript)
                        index === 2 ? "#E34F26" : // Naranja (HTML)
                        "#F24E1E"                 // Rojo (Figma)
                      } />
                    </span>
                    <span>{t(certKey)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>


          <div className="info-section">
            <h3>{t('skills.learning')}</h3>
            <div className="learning-list">
              {learning.map((item, index) => (
                <div key={index} className="learning-item">
                  <span className="learning-icon">{skillIcons[item]}</span>
                  <span className="learning-name">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
