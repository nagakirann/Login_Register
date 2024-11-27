import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./LoginRegister.css";

const LoginRegister = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Updated admins
  const admins = [
    { username: "Admin1", password: "Admin@123" },
    { username: "Admin2", password: "Admin@1234" }
  ];

  const isValidPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,}$/;
    return regex.test(password);
  };

  const handleLogin = () => {
    setError("");
    if (!username || !password) {
      setError("Both username and password are required.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isAdmin = admins.find(admin => admin.username === username && admin.password === password);

    if (isAdmin) {
      alert("Admin login successful!");
      navigate("/dashboard");
      return;
    }

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      //alert("User login successful!");
      navigate("/welcome-user");
    } else {
      setError("Invalid username or password.");
    }
  };

  const handleRegister = () => {
    setError("");
    if (!username || !password) {
      setError("Both username and password are required.");
      return;
    }

    if (!isValidPassword(password)) {
      setError("Password must contain at least 6 characters, one uppercase letter, one lowercase letter, and one special character.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find(u => u.username === username) || admins.find(admin => admin.username === username);

    if (userExists) {
      setError("Username already exists.");
      return;
    }

    const newUser = { username, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    //alert("Registration successful! Please log in.");
    setIsRegistering(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-register-container p-4 shadow rounded">
        <h1 className="mb-4">{isRegistering ? "Register" : "Login"}</h1>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {isRegistering ? (
          <>
            <button className="btn btn-primary w-100 mb-3" onClick={handleRegister}>
              Register
            </button>
            <button className="btn btn-link w-100" onClick={() => setIsRegistering(false)}>
              Already have an account? Login
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-success w-100 mb-3" onClick={handleLogin}>
              Login
            </button>
            <button className="btn btn-link w-100" onClick={() => setIsRegistering(true)}>
              Don't have an account? Register
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
