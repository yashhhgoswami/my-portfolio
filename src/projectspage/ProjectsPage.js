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
      description: 'Built an IoT-based railway gate automation system using an ESP32 microcontroller and multi-sensor inputs. Integrated Firebase for live data logging, event tracking, and remote monitoring, and developed a mobile-responsive web dashboard for real-time train alerts.',
      techStack: ['Firebase', 'HTML', 'CSS', 'JavaScript', 'MicroPython', 'ESP32'],
      links: {
        dashboard: 'https://railguard-dashboard.onrender.com/',
        simulation: 'https://wokwi.com/projects/430589393822123009'
      }
    },
    {
      title: 'YG Motors',
      description: 'Designed and developed a responsive luxury car sales platform with advanced filtering and search. Implemented a component-based architecture in React.js, styled with Tailwind CSS, and integrated Firebase for authentication and real-time database updates.',
      techStack: ['React.js', 'Tailwind CSS', 'Firebase', 'Node.js'],
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