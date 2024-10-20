// src/components/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    { id: 1, title: "Project 1", description: "Description for project 1" },
    { id: 2, title: "Project 2", description: "Description for project 2" }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-4" key={project.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href="#" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
