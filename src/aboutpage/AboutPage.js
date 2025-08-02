// Filename: src/aboutpage/AboutPage.js
import React from 'react';
import './AboutPage.css';

// --- Import your new profile image ---
import cvImage from '../assets/cvimg.jpg';

// --- Social Media Icons (as SVG components) ---
const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const InstagramIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);


// --- Reusable Skill Bar Component ---
const SkillBar = ({ skill, percentage }) => (
  <div className="skill-bar">
    <span className="skill-name">{skill}</span>
    <div className="bar-container">
      <div className="bar-progress" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const AboutPage = () => {
  // Skills data extracted from your resume
  const skills = [
    { name: 'React', level: 95 },
    { name: 'Node.js & Express.js', level: 90 },
    { name: 'JavaScript & Python', level: 92 },
    { name: 'MongoDB & MySQL', level: 85 },
    { name: 'HTML & CSS', level: 98 },
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        {/* Left Column: Image and Social Icons */}
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

        {/* Right Column: Details */}
        <div className="about-details-column">
          <h1 className="about-me-title">About Me</h1>
          <p className="about-me-text">
            As a final year undergraduate passionate about Full-Stack Web Development, I am seeking opportunities to apply my skills, contribute to impactful projects, and gain hands-on experience in a fast-paced, innovative workspace.
          </p>
          
          <div className="skills-container">
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} percentage={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;