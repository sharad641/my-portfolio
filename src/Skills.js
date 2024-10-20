import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">
          {/* Languages Section */}
          <div className="skills-category">
            <h3 className="skills-subtitle">Languages</h3>
            <ul className="skills-list">
              <li>JavaScript</li>
              <li>Java</li>
              <li>C</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          {/* Frontend Frameworks Section */}
          <div className="skills-category">
            <h3 className="skills-subtitle">Frontend Frameworks</h3>
            <ul className="skills-list">
              <li>React</li>
              <li>Bootstrap</li>
              <li></li>
            </ul>
          </div>

          {/* Backend Frameworks Section */}
          <div className="skills-category">
            <h3 className="skills-subtitle">Backend Frameworks</h3>
            <ul className="skills-list">
              <li>Express.js</li>
              <li>Node.js</li>
            </ul>
          </div>

          

          {/* Databases Section */}
          <div className="skills-category">
            <h3 className="skills-subtitle">Databases</h3>
            <ul className="skills-list">
              <li>MongoDB</li>
              <li>MySQL</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
