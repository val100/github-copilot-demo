import React, { useEffect, useState } from 'react';
import API_BASE_URL from '../apiConfig';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/teams/`)
      .then(response => response.json())
      .then(data => setTeams(Array.isArray(data) ? data : data.results || []))
      .catch(err => {
        console.error('Error fetching teams:', err);
        setError('Could not load teams.');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="octofit-fade-up">
      <h1 className="octofit-page-title">Teams</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="card octofit-card">
          <div className="card-header">School Teams</div>
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(team => (
                <tr key={team._id}>
                  <td>{team.name}</td>
                  <td>
                    {(team.members || []).map(member => (
                      <span className="badge text-bg-secondary me-1" key={member._id}>
                        {member.username}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Teams;
