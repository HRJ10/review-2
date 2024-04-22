// App.js
import React, { useState } from 'react';
import './App.css';
import './index.css';
import Login from './Login';
import AdminDashboard from './AdminDashboard'; // Import AdminDashboard component
import UserDashboard from './UserDashboard';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    // Perform authentication logic here, set user state accordingly
    setUser(userData);
  };

  return (
    <div>
      {user ? (
        user.role === 'admin' ? <AdminDashboard /> : <UserDashboard />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
