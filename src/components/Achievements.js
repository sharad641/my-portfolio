import React, { useEffect } from 'react';
import './Achievements.css';

const Achievements = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      observer.observe(item);
    });
  }, []);

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title">Achievements Timeline</h2>

        <div className="timeline">
          <div className="timeline-item left">
            <div className="content">
              <h3>2018</h3>
              <p>In Government School Nandgur, my 9 songs were selected and published in the book "ANKURA"</p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="content">
              <h3>2020</h3>
              <p>"School 2nd topper in SSLC examinations with 90.24%"</p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="content">
              <h3>2021</h3>
              <p>Awarded by the Kannada Parishat for scoring 124 out of 125 marks in Kannada SSLC board examinations, securing Bangalore South 3rd rank.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
