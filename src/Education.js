import React, { useEffect } from 'react';
import './Education.css';

const Education = () => {
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
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education Timeline</h2>

        <div className="timeline">
          {/* Schooling from 1st to 8th Grade */}
          <div className="timeline-item left">
            <div className="content">
              <h3>2010-2018</h3>
              <p>Government High School Nandgur Aland (TQ)</p>
              <p>Completed schooling from 1st to 8th grade.</p>
            </div>
          </div>

          {/* High School (9th - 10th Grade) */}
          <div className="timeline-item right">
            <div className="content">
              <h3>2019-2020</h3>
              <p>Bangalore High School Hoodi</p>
              <p>High school education completed with a result of 90.24%.</p>
            </div>
          </div>

          {/* Higher Secondary (11th - 12th Grade) */}
          <div className="timeline-item left">
            <div className="content">
              <h3>2021-2022</h3>
              <p>Morarji Desai Residential PU Science College Jadagenhalli</p>
              <p>Completed higher secondary with a result of 92.33%.</p>
            </div>
          </div>

          {/* Current Education - Engineering */}
          <div className="timeline-item right">
            <div className="content">
              <h3>2023-2026</h3>
              <p>Dayanand Sagar Academy of Technology and Management Studies, Bangalore</p>
              <p>Currently pursuing Bachelor of Engineering in Computer Science, with a CGPA of 7.45.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
