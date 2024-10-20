import React from 'react';
import './About.css'; // Make sure this is your correct CSS file path

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-video-container">
          <video
            className="about-video"
            src="path_to_your_video.mp4"
            type="video/mp4"
            controls // Adds play/pause controls to the video
            autoPlay
            muted // Ensure auto-play works by muting it (required by browsers)
            loop
          />
        </div>
        <div className="about-content">
          <h2 className="section-title">Who Am I?</h2>
          <p className="about-description">
            I'm <strong>[Your Name]</strong>, a creative and passionate web developer...
          </p>
          {/* Other content */}
        </div>
      </div>
    </section>
  );
};

export default About;
