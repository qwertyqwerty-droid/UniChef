// src/App.jsx
import React from "react";
import Header from "./components/Header"; // Ensure this component exists
import MainContent from "./components/MainContent"; // Ensure this component exists
import Footer from "./components/Footer"; // Ensure this component exists
import 'bootstrap/dist/css/bootstrap.min.css'; // Don't forget to import Bootstrap CSS

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
