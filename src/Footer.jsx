// src/components/Footer.jsx
import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";


const Footer = () => {
  return (
    <footer className="bg-light py-3 mt-auto">
      <Header /> {/* Assuming you want to render Header here */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Information Links</h5>
            <ul className="list-unstyled">
              <li><a href="#about">About Us</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#domain-policy">Domain Policy</a></li>
            </ul>
          </div>
          <div className="col-md-6 text-end">
            <h5>Contact Information</h5>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <div>
              <a href="#facebook">Facebook</a> | <a href="#whatsapp">WhatsApp</a> | <a href="#twitter">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
