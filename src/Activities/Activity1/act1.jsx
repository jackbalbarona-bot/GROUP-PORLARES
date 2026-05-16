import React from 'react';
import './act1.css';

const LandingPage = () => {
  const teamMembers = [
    "Gio Porlares",
    "Jamaica Burca",
    "Nicole Ladag",
    "Fixie Obong",
    "Jacky Balbarona",
    "Bea Badion"
  ];

  return (
    <div className="landing-container">
      <header className="hero-section">
        <h1>Group Pakakers</h1>
        <p>Hey group welcome to my guys.</p>
      </header>

      <section className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="member-card">
            <div className="avatar-placeholder">
              {member.charAt(0)}
            </div>
            <h3>{member}</h3>
            <p className="role">Team Member</p>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>&copy; 2026 Group Pakak. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;