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
              <p>In Government School Nandgur, I had 9 of my songs selected and published in the book "ANKURA." Overall, I have written a total of 35 songs, And several stories.</p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="content">
              <h3>2020</h3>
              <p>"I achieved the distinction of being the 2nd topper in the SSLC examinations with a score of 90.24%. This accomplishment was particularly challenging as I studied in a government school."</p>
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
