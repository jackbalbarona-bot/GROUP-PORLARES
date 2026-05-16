import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Activity1 from './Activities/Activity1/act1.jsx'
import Activity2 from './Activities/Activity2/act2.jsx'
import Activity3 from './Activities/Activity3/act3.jsx'
import Activity4 from './Activities/Activity4/act4.jsx';

function App() {
  const [showMembers, setShowMembers] = useState(false);

  return (
    <Router>
      <div className="app-container">
        
        {}
        <nav className="navbar">
          <div className="nav-left">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/activities" className="nav-link">ACTIVITIES</Link>
          </div>
          <button className="members-btn" onClick={() => setShowMembers(true)}>
            MEMBERS
          </button>
        </nav>

        {}
        {showMembers && (
          <div className="modal-overlay" onClick={() => setShowMembers(false)}>
            <div className="members-card" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowMembers(false)}>&times;</button>
              <h2 className="modal-title">GROUP MEMBERS:</h2>
              <div className="members-grid">
                <div className="member-item">Burca Jamaica Jean</div>
                <div className="member-item">Balbarona Jacky</div>
                <div className="member-item">Obong Fixie Louise</div>
                <div className="member-item">Ladag Nicole Jane</div>
                <div className="member-item">Badion Bea</div>
                <div className="member-item">Porlares Gio</div>
              </div>
            </div>
          </div>
        )}

        <Routes>  
          {}
          <Route path="/" element={
            <div className="hero-section">
              <h1 className="hero-title">MCO FOR ITE6</h1>
              <p className="hero-subtitle">BY GROUP BURCA</p>
              <Link to="/activities">
                <button className="btn-primary">GET STARTED</button>
              </Link>
            </div>
          } />

          {}
          <Route path="/activities" element={
            <div className="activities-section">
              <h2 className="section-title">SELECT AN ACTIVITY</h2>
              <div className="activities-grid">
                <Link to="/act1" className="activity-card">ACTIVITY 1: Team Page</Link>
                <Link to="/act2" className="activity-card">ACTIVITY 2: State Toggle</Link>
                <Link to="/act3" className="activity-card">ACTIVITY 3: Racer List</Link>
                <Link to="/act4" className="activity-card">ACTIVITY 4: Poké-Directory</Link>
              </div>
            </div>
          } />

          {}
          <Route path="/act1" element={<Activity1 />} />
          <Route path="/act2" element={<Activity2 />} />
          <Route path="/act3" element={<Activity3 />} />
          <Route path="/act4" element={<Activity4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;