// Filename: src/projectspage/ProjectsPage.js
import React from 'react';
import './ProjectsPage.css';

// --- Reusable Project Card Component ---
const ProjectCard = ({ project }) => {
  const { title, description, techStack, links } = project;

  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className={`project-actions ${links.visit ? 'single' : ''}`}>
        {links.visit ? (
          // Render a single button if a 'visit' link exists
          <a href={links.visit} target="_blank" rel="noopener noreferrer" className="project-button primary">
            Visit {title}
          </a>
        ) : (
          // Otherwise, render the two-button layout
          <>
            <a href={links.dashboard} target="_blank" rel="noopener noreferrer" className="project-button primary">
              Live Dashboard
            </a>
            <a href={links.simulation} target="_blank" rel="noopener noreferrer" className="project-button secondary">
              View Simulation
            </a>
          </>
        )}
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  // Project data updated with a new structure for links
  const projects = [
    {
      title: 'RailGuard',
      description: 'Developed a real-time IoT-based railway gate automation and alert system using an ESP32 microcontroller. Implemented Firebase cloud integration for live data logging and a mobile-responsive web dashboard for real-time alerts.',
      techStack: ['Firebase', 'HTML', 'CSS', 'JavaScript', 'MicroPython', 'IoT'],
      links: {
        dashboard: 'https://railguard-dashboard.onrender.com/',
        simulation: 'https://wokwi.com/projects/430589393822123009'
      }
    },
    {
      title: 'YG Motors',
      description: 'A sleek and responsive single-page concept website for a luxury car brand. Features a modern design, smooth animations, and a focus on providing a high-end user experience to showcase premium vehicles.',
      techStack: ['React', 'JavaScript', 'CSS', 'Vercel', 'Firebase', 'Node.js', 'Figma'],
      links: {
        visit: 'https://yg-motors.vercel.app/'
      }
    },
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h2>My <span className="highlight">Projects</span></h2>
        <p>A selection of my work, showcasing my skills in web development and problem-solving.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;