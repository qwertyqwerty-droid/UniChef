import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RestaurantPortal from './components/RestaurantPortal'; // Import the RestaurantPortal component
import SignUpForm from './components/SignUpForm'; // Import the SignUpForm component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS (with Popper)
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Landing page route */}
          <Route path="/restaurants" element={<RestaurantPortal />} /> {/* Restaurant portal route */}
          <Route path="/signup" element={<SignUpForm />} /> {/* SignUp form route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
