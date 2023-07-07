import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [property, setProperty] = useState('');
  const [issue, setIssue] = useState('');

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get('http://localhost:5500/tickets');
      setTickets(response.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const handleCreateTicket = async () => {
    try {
      await axios.post('http://localhost:5500/tickets', {
        property,
        issue,
      });
      setProperty('');
      setIssue('');
      fetchTickets();
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  return (
    <div>
      <h1>Ticket Management System</h1>
      <div>
        <h2>Create New Ticket</h2>
        <div>
          <label htmlFor="property">Property:</label>
          <input
            type="text"
            id="property"
            value={property}
            onChange={(e) => setProperty(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="issue">Issue:</label>
          <input
            type="text"
            id="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          />
        </div>
        <button onClick={handleCreateTicket}>Create Ticket</button>
      </div>
      <div>
        <h2>All Tickets</h2>
        <ul>
          {tickets.map((ticket) => (
            <li key={ticket._id}>
              <strong>Property:</strong> {ticket.property},{' '}
              <strong>Issue:</strong> {ticket.issue},{' '}
              <strong>Status:</strong> {ticket.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
