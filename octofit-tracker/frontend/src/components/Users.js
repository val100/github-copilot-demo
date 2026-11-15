import React, { useEffect, useState } from 'react';
import API_BASE_URL from '../apiConfig';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/users/`)
      .then(response => response.json())
      .then(data => setUsers(Array.isArray(data) ? data : data.results || []))
      .catch(err => {
        console.error('Error fetching users:', err);
        setError('Could not load users.');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="octofit-fade-up">
      <h1 className="octofit-page-title">Users</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="card octofit-card">
          <div className="card-header">Registered Students</div>
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td><a href={`mailto:${user.email}`} className="link-primary">{user.email}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Users;
