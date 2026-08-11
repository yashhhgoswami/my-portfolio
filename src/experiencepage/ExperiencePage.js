// Filename: src/experiencepage/ExperiencePage.js
import React from 'react';
import './ExperiencePage.css';

// SVG Icons
const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

const ExperiencePage = () => {
  const experiences = [
    {
      company: 'Teachrity',
      location: 'Remote',
      duration: 'July 2025 – Present',
      role: 'Software Developer',
      techStack: ['React.js', 'NestJS', 'MongoDB', 'WebRTC', 'Tailwind CSS', 'Docker', 'Nginx'],
      points: [
        'Architected and deployed a full-stack AI-powered classroom simulation platform using React.js, NestJS, and MongoDB, enabling real-time teacher training scenarios.',
        'Engineered a WebRTC-based voice communication system integrating OpenAI\'s Realtime API with custom audio buffer management, voice activity detection, and bi-directional audio streaming for low-latency interactions.',
        'Developed a complex multi-step wizard interface (22 configurable parameters) with responsive design using Tailwind CSS and SCSS modules.',
        'Built a comprehensive reporting system with circular progress indicators, data visualization, and performance analytics, including automated PDF generation capabilities.',
        'Implemented a secure authentication system with multi-mode routing, JWT token management, and role-based access control.',
        'Optimized frontend rendering performance through lazy loading and code splitting, deploying with Docker and Nginx.'
      ]
    },
    {
      company: 'Defence Research and Development Organisation (DRDO)',
      location: 'Onsite',
      duration: 'May 2025 – July 2025',
      role: 'Quantum Computing Intern (Photonic QC)',
      techStack: ['Photonic Quantum', 'Python', 'Perceval Framework', 'Quantum Algorithms'],
      points: [
        'Focused on photonic quantum computing, studying fundamental concepts and simulating key quantum algorithms.',
        'Implemented algorithms such as the Quantum Fourier Transform, Bernstein-Vazirani, and basic logic gates using the Perceval framework.'
      ]
    },
    {
      company: 'IIITians Network',
      location: 'Remote',
      duration: 'June 2024 – Feb 2025',
      role: 'Content Team Lead',
      techStack: ['Team Leadership', 'Content Strategy', 'Editorial Quality'],
      points: [
        'Led the content team at IIITians Network for 6 months, managing planning, editorial quality, and coordinating weekly content strategy.'
      ]
    }
  ];

  return (
    <div className="experience-page-v3">
      <div className="experience-header">
        <span className="exp-badge">CAREER TIMELINE</span>
        <h2>My Work <span className="highlight">Experience</span></h2>
        <p className="exp-subtitle">A detailed track record of my engineering roles, key projects, and professional contributions.</p>
      </div>

      <div className="experience-cards-timeline">
        {experiences.map((exp, index) => (
          <div className="exp-timeline-item" key={index}>
            {/* Left Axis Node */}
            <div className="exp-node-container">
              <div className="exp-node-icon">
                <BriefcaseIcon />
              </div>
              {index !== experiences.length - 1 && <div className="exp-timeline-line"></div>}
            </div>

            {/* Experience Card */}
            <div className="exp-card">
              <div className="exp-card-header">
                <div className="exp-title-block">
                  <h3 className="exp-role">{exp.role}</h3>
                  <h4 className="exp-company">{exp.company}</h4>
                </div>
                <div className="exp-meta-block">
                  <span className="exp-duration-badge">
                    <CalendarIcon /> {exp.duration}
                  </span>
                  <span className="exp-location-badge">
                    <MapPinIcon /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Tech Stack Pills */}
              {exp.techStack && (
                <div className="exp-tech-row">
                  {exp.techStack.map((tech, i) => (
                    <span className="exp-tech-pill" key={i}>{tech}</span>
                  ))}
                </div>
              )}

              {/* Achievements Bullet Points */}
              <ul className="exp-points-list">
                {exp.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;