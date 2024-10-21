import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="video-container">
          <video 
            className="about-video" 
            controls 
            muted 
            onClick={(e) => e.target.paused ? e.target.play() : e.target.pause()} // Toggle play/pause on click
            src="./video.mp4" // Update this to your video file location
          >
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="about-content">
          <h2 className="section-title">Sharad Patil</h2>
          <p className="about-description">
            I'm <strong>Sharad Patil</strong>, a creative and passionate web developer with a deep interest in crafting visually stunning and highly functional websites.
          </p>
          <p className="about-description">
            With Good in <strong>React, Node.js, MongoDB</strong>, and other modern technologies, I aim to deliver top-tier solutions that not only work seamlessly but also stand out in terms of design.
          </p>
          <div className="skills-container">
            <div className="skill-item">
              <i className="fas fa-code skill-icon"></i>
              <p>Full-Stack Development</p>
            </div>
            <div className="skill-item">
              <i className="fas fa-pencil-ruler skill-icon"></i>
              <p>Java Programming</p>
            </div>
            <div className="skill-item">
              <i className="fas fa-database skill-icon"></i>
              <p>Database Management</p>
            </div>
          </div>
          <a href="#contact" className="about-btn">Let's Connect</a>
          <a 
            href="resume.pdf" // Update this path to your actual PDF location
            download 
            className="download-btn"
          >
            <i className="fas fa-download"></i> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
