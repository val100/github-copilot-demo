// Base URL for the OctoFit Tracker Django REST API.
// In a GitHub Codespace the backend is exposed at
// https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev (https, port 8000 via subdomain);
// on a local machine it runs at http://localhost:8000.
const CODESPACE_NAME = 'copilot-devo-spork-g6pj46rr9hpp6x';

const API_BASE_URL = window.location.hostname.endsWith('.app.github.dev')
  ? `https://${CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000';

export default API_BASE_URL;
