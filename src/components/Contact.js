import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <footer id="contact" className="contact-section"> {/* Added id="contact" for redirection */}
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-info">Email: <a href="mailto:sharadpatilrocks42@gmail.com" className="contact-link">sharadpatilrocks42@gmail.com</a></p>
        <p className="contact-info">Phone: <span className="contact-number">+91 6364060716</span></p>
        <p className="footer-info">Sharad | Dayanand Sagar Academy of Technology and Management</p>
        <div className="social-links">
          <a href="https://linkedin.com/in/sharad-patil-691902259" className="social-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/sharad641" className="social-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
