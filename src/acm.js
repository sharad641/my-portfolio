import React from 'react';
import './acm.css';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>

        {/* Achievements Table */}
        <table className="achievements-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2022</td>
              <td>Best Developer Award</td>
              <td>Received the best developer award for outstanding contributions in web development.</td>
            </tr>
            <tr>
              <td>2021</td>
              <td>Hackathon Winner</td>
              <td>Won the national-level hackathon by creating an innovative solution for smart cities.</td>
            </tr>
            <tr>
              <td>2020</td>
              <td>Top Contributor</td>
              <td>Acknowledged as a top contributor in open-source projects on GitHub.</td>
            </tr>
          </tbody>
        </table>

        {/* Example Achievement Card */}
        <div className="achievements-card">
          <h3>2021 Hackathon Champion</h3>
          <p>Led a team to win the annual hackathon, developing a full-stack application that focused on smart home automation.</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
