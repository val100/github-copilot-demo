import React, { useEffect, useState } from 'react';
import API_BASE_URL from '../apiConfig';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/leaderboard/`)
      .then(response => response.json())
      .then(data => {
        const entries = Array.isArray(data) ? data : data.results || [];
        // Rank by score, highest first
        setLeaderboard([...entries].sort((a, b) => b.score - a.score));
      })
      .catch(err => {
        console.error('Error fetching leaderboard:', err);
        setError('Could not load leaderboard.');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="octofit-fade-up">
      <h1 className="octofit-page-title">Leaderboard</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="card octofit-card">
          <div className="card-header">Top Performers</div>
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Username</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, index) => (
                <tr key={entry._id}>
                  <td>
                    <span className={`badge ${index === 0 ? 'text-bg-warning' : index < 3 ? 'text-bg-secondary' : 'text-bg-light'}`}>
                      #{index + 1}
                    </span>
                  </td>
                  <td>{entry.user && entry.user.username}</td>
                  <td><span className="badge text-bg-primary">{entry.score}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
