// Filename: src/experiencepage/ExperiencePage.js (No Changes)
import React from 'react';
import './ExperiencePage.css';

const ExperiencePage = () => {
  // Experience data extracted and summarized from your resume
  const experiences = [
    {
      company: 'Teachrity',
      duration: 'July 2025 - Present',
      role: 'Frontend Developer',
      description: 'Developing and maintaining responsive user interfaces using React, ensuring high performance and a seamless user experience across all devices.'
    },
    {
      company: 'Defence Research and Development Organisation (DRDO), India',
      duration: 'May 2025 - July 2025',
      role: 'Quantum Computing Intern',
      description: 'Focused on photonic quantum computing, simulating key quantum algorithms like QFT and Bernstein-Vazirani using the Perceval framework and Python-based tools.'
    },
    {
      company: 'IIITians Network',
      duration: 'June 2024 - Feb 2025',
      role: 'Content Team Lead',
      description: 'Led a team of 8 content writers, coordinating weekly content strategy and enhancing article quality to contribute to the platform\'s steady growth.'
    }
  ];

  return (
    <div className="experience-page-v2">
      <div className="experience-header">
        <h2>My Work <span className="highlight">Experience</span></h2>
      </div>
      <div className="experience-timeline-container">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-left">
              <h3>{exp.company}</h3>
              <p>{exp.duration}</p>
            </div>
            <div className="timeline-connector">
              <div className={`timeline-dot ${index % 2 === 0 ? 'dot-orange' : 'dot-dark'}`}></div>
            </div>
            <div className="experience-right">
              <h4>{exp.role}</h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;