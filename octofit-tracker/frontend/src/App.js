import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import logo from './octofitapp-small.png';
import './App.css';

const features = [
  { to: '/activities', title: 'Activities', text: 'Log workouts and track every session.' },
  { to: '/leaderboard', title: 'Leaderboard', text: 'Climb the ranks with friendly competition.' },
  { to: '/teams', title: 'Teams', text: 'Join forces and win together.' },
];

function Home() {
  return (
    <div className="octofit-hero text-center octofit-fade-up">
      <h1 className="display-4 fw-bold">Welcome to OctoFit Tracker</h1>
      <p className="lead mt-3">
        Mergington High School fitness tracking: log activities, join teams,
        climb the leaderboard, and get personalized workouts.
      </p>
      <div className="d-flex justify-content-center gap-2 mt-4">
        <Link className="btn btn-octofit btn-lg" to="/activities">Get Started</Link>
        <Link className="btn btn-outline-primary btn-lg" to="/leaderboard">View Leaderboard</Link>
      </div>
      <div className="row g-4 mt-4">
        {features.map(feature => (
          <div className="col-12 col-md-4 octofit-fade-up" key={feature.to}>
            <div className="card octofit-card h-100">
              <div className="card-header">{feature.title}</div>
              <div className="card-body d-flex flex-column">
                <p className="card-text">{feature.text}</p>
                <Link className="btn btn-octofit mt-auto align-self-center" to={feature.to}>
                  Open {feature.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark octofit-navbar sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="OctoFit Tracker logo" className="octofit-logo me-2" />
            OctoFit Tracker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4 mb-5">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
