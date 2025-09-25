import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Hello from React + Laravel + Sail 🚀</h1>;
}

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

