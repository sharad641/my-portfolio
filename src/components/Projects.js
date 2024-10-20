import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <h3 className="project-title">VTU-NOTES</h3>
            <p className="project-tech">Technologies Used: React,Express,Node.js,Google Drive,Firebase</p>
            <p className="project-description">
            VTU-Notes is a web platform designed to provide engineering students under Visvesvaraya Technological University (VTU) easy access to study materials and notes for different branches, semesters, and subjects. The platform allows users to upload, view, and download notes, organized based on various subjects and modules. It simplifies note sharing and retrieval for students.
            </p>
            <a
              href="https://github.com/yourusername/smart-parking-system"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3 className="project-title">E-Commerce Website</h3>
            <p className="project-tech">Technologies Used: React, Node.js, Google Drive, Css</p>
            <p className="project-description">
              Built a full-stack e-commerce application with user authentication, product catalog, and integrated payment gateway. Focused on responsive design and optimized performance.
            </p>
            <a
              href="https://github.com/yourusername/e-commerce-website"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <h3 className="project-title">Personal Portfolio</h3>
            <p className="project-tech">Technologies Used: React, CSS, JavaScript</p>
            <p className="project-description">
              Designed a personal portfolio to showcase projects and skills. Used modern web design techniques like glassmorphism and subtle animations to create an engaging UI.
            </p>
            <a
              href="https://github.com/yourusername/personal-portfolio"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
