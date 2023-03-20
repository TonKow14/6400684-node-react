import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/users`)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='Userlist'>
      <h1 className='head'>User List</h1>
      <div className='title'>
        <ul>
        {users.map(user => (
          <li key={user.id}>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  );
}

export default App;
