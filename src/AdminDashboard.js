import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  // Updated admin credentials
  const admins = [
    { username: "Admin1", password: "Admin@123" },
    { username: "Admin2", password: "Admin@1234" }
  ];

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  // Password validation function
  const isValidPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,}$/;
    return regex.test(password);
  };

  // Add a new user
  const addUser = () => {
    if (!newUsername || !newPassword) {
      alert("Both fields are required.");
      return;
    }

    if (!isValidPassword(newPassword)) {
      alert("Password must contain at least 6 characters, one uppercase letter, one lowercase letter, and one special character.");
      return;
    }

    const userExists = users.find(user => user.username === newUsername) || admins.find(admin => admin.username === newUsername);

    if (userExists) {
      alert("Username already exists.");
      return;
    }

    const updatedUsers = [...users, { username: newUsername, password: newPassword }];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setNewUsername("");
    setNewPassword("");
    alert("User added successfully!");
  };

  // Delete a user
  const deleteUser = (username) => {
    const updatedUsers = users.filter(user => user.username !== username);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("User deleted successfully!");
  };

  // Logout handler
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Admin Dashboard</h1>
      <button className="btn btn-danger mb-4" onClick={handleLogout}>
        Logout
      </button>

      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="New username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addUser}>
          Add User
        </button>
      </div>

      <h3>Manage Users</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.username)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
