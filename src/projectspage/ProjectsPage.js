// Filename: src/projectspage/ProjectsPage.js
import React from 'react';
import './ProjectsPage.css';

// --- Reusable Project Card Component ---
const ProjectCard = ({ title, description, techStack, dashboardLink, demoLink }) => (
  <div className="project-card">
    <h3 className="project-title">{title}</h3>
    <p className="project-description">{description}</p>
    <div className="project-tech-stack">
      {techStack.map((tech, index) => (
        <span key={index} className="tech-tag">{tech}</span>
      ))}
    </div>
    <div className="project-actions">
        <a href={dashboardLink} target="_blank" rel="noopener noreferrer" className="project-button primary">
            Live Dashboard
        </a>
        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-button secondary">
            View Simulation
        </a>
    </div>
  </div>
);

const ProjectsPage = () => {
  // Project data updated to match your resume
  const projects = [
    {
      title: 'RailGuard',
      description: 'Developed a real-time IoT-based railway gate automation and alert system using an ESP32 microcontroller. Implemented Firebase cloud integration for live data logging and a mobile-responsive web dashboard for real-time alerts.',
      techStack: ['Firebase', 'HTML', 'CSS', 'JavaScript', 'MicroPython', 'IoT'],
      dashboardLink: 'https://railguard-dashboard.onrender.com/',
      demoLink: 'https://wokwi.com/projects/430589393822123009',
    },
    // You can add more projects here as you complete them
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h2>My <span className="highlight">Projects</span></h2>
        <p>A selection of my work, showcasing my skills in web development and problem-solving.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            dashboardLink={project.dashboardLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;