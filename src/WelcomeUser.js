import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WelcomeUser.css"; // For any additional custom styles

const WelcomeUser = () => {
  return (
    <div className="welcome-user-container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card text-center shadow-sm" style={{ width: "350px", borderRadius: "10px" }}>
        <div className="card-body">
          <div className="text-success mb-4">
            <i className="bi bi-check-circle-fill" style={{ fontSize: "3rem" }}></i>
          </div>
          <h2 className="fw-semibold">Welcome, User!</h2>
          <p className="text-muted">
            You have successfully logged in. Enjoy exploring your personalized page!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeUser;
