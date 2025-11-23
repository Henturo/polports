import React from "react";

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio built in React, Dockerized for deployment.',
    tech: ['React', 'Docker'],
    link: 'https://github.com/yourusername/portfolio'
  },
  // Add your own projects here
];

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      {projects.map((project, idx) => (
        <div key={idx} className="project-card">
          <h3 className="project-title">{project.title}</h3>
          <p>{project.description}</p>
          <div>
            {project.tech.map((t, i) => (<span key={i} className="badge">{t}</span>))}
          </div>
          {project.link && project.link !== "#" && (
            <a href={project.link} target="_blank" rel="noreferrer" className="link">
              View project
            </a>
          )}
        </div>
      ))}
    </section>
  );
}
export default Projects;
