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

// --- Icon Components ---
const StarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);
const MenuIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);
const CloseIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);
const SunIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
);
const MoonIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);

// --- Theme Toggler Component ---
const ThemeToggler = ({ theme, setTheme }) => {
  const [hoveredTheme, setHoveredTheme] = useState(theme);

  // When the actual theme changes (on click), sync the hover state
  useEffect(() => {
    setHoveredTheme(theme);
  }, [theme]);

  return (
    <div 
      className="theme-toggler-group"
      onMouseLeave={() => setHoveredTheme(theme)} // On mouse leave, glider returns to active theme
    >
      <div className={`glider ${hoveredTheme === 'dark' ? 'dark-active' : ''}`}></div>
      <button 
        className={hoveredTheme === 'light' ? 'light-active' : ''} 
        onClick={() => setTheme('light')} 
        onMouseEnter={() => setHoveredTheme('light')}
        aria-label="Switch to light theme"
      >
        <SunIcon /> Light
      </button>
      <button 
        className={theme === 'dark' ? 'active' : ''} 
        onClick={() => setTheme('dark')}
        onMouseEnter={() => setHoveredTheme('dark')}
        aria-label="Switch to dark theme"
      >
        <MoonIcon /> Dark
      </button>
    </div>
  );
};

// --- Home Page Component ---
const HomePage = ({ onNavClick, theme, setTheme }) => {
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
            <h2 className="hero-subtitle">Full Stack Developer</h2>
          </div>
        </div>
        <div className="layered-image-container">
          <img src={circleBgImage} alt="Background circle" className="background-circle-img" />
          <img src={profileImage} alt="Profile of Yash" className="profile-img" />
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
            <ThemeToggler theme={theme} setTheme={setTheme} />
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
    </>
  );
};


// --- Main App Component (Router) ---
function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleNavClick = (page) => {
    setActiveNav(page);
    setMobileMenuOpen(false);
  };

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
          handleNavClick(name);
        }}>
          {name}
        </a>
      </li>
    );
  };

  const renderPage = () => {
    switch (activeNav) {
      case 'Home':
        return <HomePage onNavClick={handleNavClick} theme={theme} setTheme={setTheme} />;
      case 'About':
        return <AboutPage />;
      case 'Experience':
        return <ExperiencePage />;
      case 'Project':
        return <ProjectsPage />;
      case 'Contact':
        return <ContactPage onNavClick={handleNavClick} />;
      case 'Terms':
        return <TermsPage />;
      case 'Privacy':
        return <PrivacyPage />;
      default:
        return <HomePage onNavClick={handleNavClick} theme={theme} setTheme={setTheme} />;
    }
  };

  return (
    <div className="portfolio-app">
      <header className="portfolio-header">
        <nav className="main-nav desktop-nav">
          <ul>
            <NavLink name="Home" />
            <NavLink name="About" />
            <NavLink name="Resume" isExternal={true} href="https://drive.google.com/file/d/1AnJPyMQOsfs13sds8PfUZ3z_ojquHOp8/view?usp=drive_link" />
            <li className="logo-placeholder" onClick={() => handleNavClick('Home')}>
              <img src={logoImage} alt="Yash Goswami Logo" className="nav-logo" />
            </li>
            <NavLink name="Experience" />
            <NavLink name="Project" />
            <NavLink name="Contact" />
          </ul>
        </nav>
        <div className="mobile-nav-header">
            <img src={logoImage} alt="Yash Goswami Logo" className="mobile-logo" onClick={() => handleNavClick('Home')} />
            <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
        </div>
      </header>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <nav>
          <ul>
            <NavLink name="Home" />
            <NavLink name="About" />
            <NavLink name="Experience" />
            <NavLink name="Project" />
            <NavLink name="Contact" />
            <NavLink name="Resume" isExternal={true} href="https://drive.google.com/file/d/1AnJPyMQOsfs13sds8PfUZ3z_ojquHOp8/view?usp=drive_link" />
          </ul>
        </nav>
      </div>
      {renderPage()}
    </div>
  );
}

export default App;
