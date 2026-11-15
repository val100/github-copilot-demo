import React, { useEffect, useState } from 'react';
import API_BASE_URL from '../apiConfig';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/workouts/`)
      .then(response => response.json())
      .then(data => setWorkouts(Array.isArray(data) ? data : data.results || []))
      .catch(err => {
        console.error('Error fetching workouts:', err);
        setError('Could not load workouts.');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="octofit-fade-up">
      <h1 className="octofit-page-title">Workouts</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {workouts.map(workout => (
            <div className="col-12 col-md-6 col-lg-4 octofit-fade-up" key={workout._id}>
              <div className="card octofit-card h-100">
                <div className="card-header">{workout.name}</div>
                <div className="card-body d-flex flex-column">
                  <p className="card-text">{workout.description}</p>
                  <button type="button" className="btn btn-octofit mt-auto align-self-center">
                    Start Workout
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Workouts;
