Project Overview -->
This project is a simple user authentication system built with React. It includes the following features:

1.Login/Register: Users can log in or register with a username and a strong password (validation rules apply).
2.Admin Dashboard: Admins can log in, view registered users, add new users, or delete existing users.
3.Welcome User Page: A personalized landing page for authenticated users.


Key Features:

1.Password Validation: Ensures a strong password with at least one uppercase letter, one lowercase letter, one special character, and a minimum of six characters.
2.Local Storage for User Data: User data is stored in the browser's local storage for simplicity.
3.Role-Based Access: Separate access for admins and regular users.
4.Responsive Design: Styled with Bootstrap for modern, clean UI.

Folder Structure inside the Project
src/
│   ├── LoginRegister.jsx        // Handles user login and registration.
│   ├── AdminDashboard.jsx       // Admin dashboard for managing users.
│   ├── WelcomeUser.jsx          // Welcome page for logged-in users.
│   └── App.jsx                  // Main entry point with routes.
│   ├── LoginRegister.css        // Custom styles for Login/Register page.
│   ├── WelcomeUser.css          // Custom styles for Welcome User page.
├── index.js                     // React app entry point.
├── package.json                 // Project dependencies and scripts.



Installation

Clone the Repository:
open bash/Terminal
git clone <repository_url>
cd <repository_folder>

Install Dependencies: Make sure you have Node.js installed. Then run:
open bash/Terminal
npm install


Start the Development Server:
open bash/Terminal
npm start

This will start the application on http://localhost:3000.



Dependencies
The following dependencies are required for this project:

React: JavaScript library for building user interfaces.
React Router DOM: For handling routing in the app.
Bootstrap: CSS framework for styling.
Bootstrap Icons: For adding icons to the UI.

Install them via :  npm install react react-dom react-router-dom bootstrap


Key Points
Predefined Admin Credentials:

Admin1: Admin@123
Admin2: Admin@1234
Password Validation Rule: A valid password must:

Be at least 6 characters long.
Contain at least one uppercase letter.
Contain at least one lowercase letter.
Contain at least one special character (e.g., @, #, $).
Local Storage:

User data is stored in localStorage under the key "users".

