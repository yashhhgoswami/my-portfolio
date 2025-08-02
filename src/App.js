// Filename: src/App.js
import React, { useState, useRef, useEffect } from 'react';
import './App.css';

// --- Import all page components and assets ---
import AboutPage from './aboutpage/AboutPage';
import ExperiencePage from './experiencepage/ExperiencePage';
import ProjectsPage from './projectspage/ProjectsPage';
import ContactPage from './contactpage/ContactPage';
import TermsPage from './termspage/TermsPage';
import PrivacyPage from './privacypage/PrivacyPage';
import profileImage from './assets/meb.png';
import circleBgImage from './assets/gola.png';
import logoImage from './assets/logoport.png';

// SVG Icon for the star (Unchanged)
const StarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

// --- Home Page Component ---
const HomePage = ({ onNavClick }) => {
  const [activeButton, setActiveButton] = useState('Projects');
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const gliderRef = useRef(null);

  useEffect(() => {
    const targetButton = activeButton === 'Projects' ? projectsRef.current : contactRef.current;
    if (targetButton && gliderRef.current) {
      gliderRef.current.style.width = `${targetButton.offsetWidth}px`;
      gliderRef.current.style.transform = `translateX(${targetButton.offsetLeft}px)`;
    }
  }, [activeButton]);

  return (
    <>
      <main className="new-hero-section">
        <div className="hero-top-content">
            <div className="hero-heading-block">
                <div className="hello-box">Hello!</div>
                <h1>I'm <span className="highlight">Yash</span>,</h1>
            </div>
        </div>
        <div className="hero-bottom-content">
            <div className="hero-middle-block">
                <div className="side-info left-quote">
                    <span className="quote-marks">“</span>
                    <p>A final-year undergraduate enthusiastic about applying full-stack skills to contribute to impactful projects in an innovative workspace.</p>
                </div>
                <div className="main-image-spacer"></div>
                <div className="side-info right-experience">
                    <div className="star-rating"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
                    <p className="experience-text"><strong>2+ Roles</strong>Leadership</p>
                </div>
            </div>
            <div className="hero-actions-block">
              <div className="action-button-group">
                <a 
                  ref={projectsRef} 
                  href="#projects" 
                  className={activeButton === 'Projects' ? 'active' : ''} 
                  onMouseEnter={() => setActiveButton('Projects')}
                  onClick={(e) => { e.preventDefault(); onNavClick('Project'); }}
                >
                  Projects
                </a>
                <a 
                  ref={contactRef} 
                  href="#contact" 
                  className={activeButton === 'Contact' ? 'active' : ''} 
                  onMouseEnter={() => setActiveButton('Contact')}
                  onClick={(e) => { e.preventDefault(); onNavClick('Contact'); }}
                >
                  Contact me
                </a>
                <div ref={gliderRef} className="glider"></div>
              </div>
            </div>
        </div>
      </main>
      <h2 className="hero-subtitle">Full Stack Developer</h2>
      <div className="layered-image-container">
        <img src={circleBgImage} alt="Background circle" className="background-circle-img" />
        <img src={profileImage} alt="Profile of Yash" className="profile-img" />
      </div>
    </>
  );
};


// --- Main App Component (Router) ---
function App() {
  const [activeNav, setActiveNav] = useState('Home');

  const NavLink = ({ name, isExternal = false, href = '#' }) => {
    if (isExternal) {
      return (
        <li>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </li>
      );
    }
    return (
      <li>
        <a href={href} className={activeNav === name ? 'active-link' : ''} onClick={(e) => {
          e.preventDefault();
          setActiveNav(name);
        }}>
          {name}
        </a>
      </li>
    );
  };

  const renderPage = () => {
    switch (activeNav) {
      case 'Home':
        return <HomePage onNavClick={setActiveNav} />;
      case 'About':
        return <AboutPage />;
      case 'Experience':
        return <ExperiencePage />;
      case 'Project':
        return <ProjectsPage />;
      case 'Contact':
        return <ContactPage onNavClick={setActiveNav} />;
      case 'Terms':
        return <TermsPage />;
      case 'Privacy':
        return <PrivacyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="portfolio-app">
      <header className="portfolio-header">
        <nav className="main-nav">
          <ul>
            <NavLink name="Home" />
            <NavLink name="About" />
            <NavLink name="Resume" isExternal={true} href="https://drive.google.com/file/d/1XuqjeIxz0L7wj9zY88hexjSmb73xjzMp/view?usp=sharing" />
            <li className="logo-placeholder">
              <img src={logoImage} alt="Yash Goswami Logo" className="nav-logo" />
            </li>
            <NavLink name="Experience" />
            <NavLink name="Project" />
            <NavLink name="Contact" />
          </ul>
        </nav>
      </header>
      
      {renderPage()}
    </div>
  );
}

export default App;
