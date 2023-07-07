// App.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  // Your existing App component content here

  return (
    <div className="App">
      <h1>Ticket Management System</h1>
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Ticket List</Link>
            </li>
            {/* Add any other navigation links here */}
          </ul>
        </nav>

        {/* Rest of your App component content */}
      </div>
    </div>
  );
}

export default App;
