// Filename: src/aboutpage/AboutPage.js
import React from 'react';
import './AboutPage.css';

import cvImage from '../assets/change.png';

// --- Icons ---
const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const InstagramIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const GradIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
);
const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path></svg>
);
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
const GradCapIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
);
const BriefcaseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);
const AwardIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
);

// --- Skill Bar Component ---
const SkillBar = ({ skill, percentage }) => (
  <div className="skill-bar">
    <div className="skill-info">
      <span className="skill-name">{skill}</span>
      <span className="skill-percent">{percentage}%</span>
    </div>
    <div className="bar-container">
      <div className="bar-progress" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const AboutPage = () => {
  const skills = [
    { name: 'React.js & NestJS', level: 95 },
    { name: 'JavaScript & Python', level: 92 },
    { name: 'Tailwind CSS & SCSS', level: 94 },
    { name: 'Node.js & Express.js', level: 90 },
    { name: 'MongoDB & Firebase', level: 88 },
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        {/* Top Hero Section */}
        <div className="about-hero-section">
          <div className="about-image-column">
            <div className="image-wrapper">
              <img src={cvImage} alt="Yash Goswami" />
            </div>
            <div className="social-icons-footer">
              <a href="https://github.com/yashhhgoswami" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
              <a href="https://www.linkedin.com/in/yashhhgoswami/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="https://www.instagram.com/yashhhgoswami/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            </div>
          </div>

          <div className="about-details-column">
            <span className="about-badge">SOFTWARE DEVELOPER</span>
            <h1 className="about-me-title">About <span className="highlight">Me</span></h1>
            <p className="about-me-text">
              As a dedicated Full-Stack Software Developer, I specialize in building high-performance web platforms, real-time communication systems, and modern AI-driven solutions. I bring strong engineering fundamentals and hands-on experience to build scalable, user-centric products.
            </p>
            <div className="quick-highlights">
              <span className="highlight-chip"><GradCapIcon /> B.Tech ECE @ IIIT Manipur</span>
              <span className="highlight-chip"><BriefcaseIcon /> Software Developer @ Teachrity</span>
              <span className="highlight-chip"><AwardIcon /> Placed @ Deloitte USI</span>
            </div>
          </div>
        </div>

        {/* Content Cards Grid */}
        <div className="about-cards-grid">
          {/* Technical Skills Card */}
          <div className="about-card skills-card">
            <div className="card-header">
              <CodeIcon />
              <h3>Technical Skills</h3>
            </div>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <SkillBar key={index} skill={skill.name} percentage={skill.level} />
              ))}
            </div>
          </div>

          {/* Column with Education & Achievements Cards */}
          <div className="about-right-cards">
            {/* Education Card */}
            <div className="about-card education-card">
              <div className="card-header">
                <GradIcon />
                <h3>Education</h3>
              </div>
              <div className="card-body">
                <h4 className="institution-name">Indian Institute of Information Technology, Senapati, Manipur</h4>
                <p className="degree-title">B.Tech in Electronics and Communication Engineering</p>
                <div className="meta-badge-row">
                  <span className="meta-badge">2022 – 2026</span>
                  <span className="meta-badge cpi-badge">CPI: 7.25</span>
                </div>
              </div>
            </div>

            {/* Achievements Card */}
            <div className="about-card achievements-card">
              <div className="card-header">
                <TrophyIcon />
                <h3>Achievements & Leadership</h3>
              </div>
              <div className="card-body">
                <ul className="achievements-styled-list">
                  <li>
                    <strong>Deloitte USI:</strong> Secured placement through campus drive.
                  </li>
                  <li>
                    <strong>IIITians Network:</strong> Led content team for 6 months managing strategy & quality.
                  </li>
                  <li>
                    <strong>Tech Fest Champion:</strong> 1st place in CodeHunt, CyberSleuth, and Valorant tournament.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;