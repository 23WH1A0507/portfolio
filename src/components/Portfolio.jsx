import React from "react";
import "./Portfolio.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Portfolio() {
  const projects = [
    {
      title: "Password Manager",
      description: "A Java-based password manager with encryption & Swing GUI.",
      repoLink: "https://github.com/23wh1a0507/Password-Manager",
      demoLink: "", // Add live demo link if available
      status: "Completed",
      technologies: ["Java", "Swing", "Encryption"],
    },
    {
      title: "Banking Application",
      description: "A Python-based banking system with GUI using Tkinter.",
      repoLink: "https://github.com/23wh1a0507/Banking-Application",
      demoLink: "", // Add live demo link if available
      status: "Completed",
      technologies: ["Python", "Tkinter", "SQLite"],
    },
    {
      title: "Skill Exchange Platform",
      description:
        "A web app for mentorship with real-time chat & MySQL backend.",
      repoLink: "", // No link provided
      demoLink: "", // No link provided
      status: "In Progress",
      technologies: ["React", "Node.js", "MySQL", "WebSocket"],
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio-title animate__animated animate__fadeIn">
        My Projects
      </h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card animate__animated animate__fadeInUp"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <p className={`project-status ${project.status.toLowerCase()}`}>
              {project.status}
            </p>
            <div className="project-links">
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View code on GitHub"
                >
                  <FaGithub /> Code
                </a>
              )}
              {project.demoLink ? (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View live demo"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              ) : (
                <span className="demo-coming-soon">Demo coming soon</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
