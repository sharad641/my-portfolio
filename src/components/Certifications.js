import React from 'react';
import './Certifications.css'; // Import the CSS file

const Certifications = () => {
  return (
    <section className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-container">
        <div className="certification-item">
          <img src="certificate2.jpg" alt="Certification 1" className="certification-image" />
          <p className="certification-title">I completed a course on the "Pragmatic Approach to Cyber Security," which focused on practical strategies for mitigating risks, managing vulnerabilities, and responding to incidents effectively.</p>
        </div>
        <div className="certification-item">
          <img src="certificate1.jpg" alt="Certification 2" className="certification-image" />
          <p className="certification-title">I completed a course on "Creating Responsive Web Pages Using Bootstrap," where I learned to design adaptable layouts, ensuring websites function seamlessly across various devices and screen sizes.</p>
        </div>
        <div className="certification-item">
          <img src="/certificate3.jpg" alt="Certification 3" className="certification-image" />
          <p className="certification-title">I completed a course on "Data Visualization Using Tableau," where I learned to create interactive and insightful visualizations, enabling effective data analysis and presentation for better decision-making.</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
