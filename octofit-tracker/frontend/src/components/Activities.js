import React, { useEffect, useState } from 'react';
import API_BASE_URL from '../apiConfig';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/activities/`)
      .then(response => response.json())
      .then(data => setActivities(Array.isArray(data) ? data : data.results || []))
      .catch(err => {
        console.error('Error fetching activities:', err);
        setError('Could not load activities.');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="octofit-fade-up">
      <h1 className="octofit-page-title">Activities</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="card octofit-card">
          <div className="card-header">Logged Activities</div>
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th scope="col">User</th>
                <th scope="col">Activity Type</th>
                <th scope="col">Duration</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity._id}>
                  <td>{activity.user}</td>
                  <td><span className="badge text-bg-info">{activity.activity_type}</span></td>
                  <td>{activity.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Activities;
