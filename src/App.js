import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginRegister from "./LoginRegister";
import AdminDashboard from "./AdminDashboard";
import WelcomeUser from "./WelcomeUser";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Login/Register */}
          <Route path="/" element={<LoginRegister />} />
          
          {/* Route for Admin Dashboard */}
          <Route path="/dashboard" element={<AdminDashboard />} />
          
          {/* Route for Welcome User Page */}
          <Route path="/welcome-user" element={<WelcomeUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
