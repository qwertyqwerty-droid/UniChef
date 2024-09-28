import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';
import LandingPicture1 from '../assets/LandingPicture1.jpg';
import LandingPicture2 from '../assets/LandingPicture2.jpg';
import LandingPicture3 from '../assets/LandingPicture3.jpg';

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName] = useState('John Doe');

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = document.querySelector('#landingCarousel');
      if (carousel) {
        const carouselInstance = bootstrap.Carousel.getInstance(carousel);
        if (carouselInstance) {
          carouselInstance.next(); // Move to next item
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <header className="bg-light py-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h2 className="text-center d-none d-md-block">Unichef</h2>
          <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/restaurants">Restaurants</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="d-flex">
              {isLoggedIn ? (
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    {userName} <i className="bi bi-person"></i>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#" onClick={toggleLogin}>Logout</a></li>
                  </ul>
                </div>
              ) : (
                <div>
                  <button className="btn btn-danger me-2" onClick={toggleLogin}>Log In</button>
                  <Link to="/signup">
                    <button className="btn btn-outline-success">Sign Up</button> {/* Link to the signup form */}
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
        <h2 className="text-center d-md-none">Unichef</h2>
      </header>

      <main className="container-fluid my-5">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <div style={{ position: 'relative' }}>
              <div id="landingCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={LandingPicture1} alt="Hero 1" className="img-fluid rounded" />
                  </div>
                  <div className="carousel-item">
                    <img src={LandingPicture2} alt="Hero 2" className="img-fluid rounded" />
                  </div>
                  <div className="carousel-item">
                    <img src={LandingPicture3} alt="Hero 3" className="img-fluid rounded" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#landingCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#landingCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="mb-4" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
                <Link to="/restaurants">
                  <button className="btn btn-danger btn-lg" style={{ fontSize: '1.8rem', padding: '20px 40px', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>Order Now</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="sidebar">
              <h4>Welcome, Students!!</h4>
              <p className="student-message">
                Say goodbye to long queues and hello to convenience! With just a few clicks, you can browse menus, place orders, and have your favorite meals delivered straight to your doorstep. Plus, our monthly subscription service ensures you enjoy exclusive deals and discounts tailored just for you.
              </p>
            </div>
          </div>
        </div>

        {/* Restaurants Portal */}
        <section className="restaurants-portal mt-5">
          <h3>Available Restaurants</h3>
          <div className="restaurant-list">
            <Link to="/restaurants" className="restaurant-item border p-3 mb-3 d-block text-decoration-none text-dark">
              <h5>Restaurant 1</h5>
              <p>Cuisine: Italian</p>
            </Link>
            <Link to="/restaurants" className="restaurant-item border p-3 mb-3 d-block text-decoration-none text-dark">
              <h5>Restaurant 2</h5>
              <p>Cuisine: Indian</p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Information</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">About Us</a></li>
                <li><a href="#" className="text-white">Terms of Service</a></li>
                <li><a href="#" className="text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-white">Domain Policy</a></li>
              </ul>
            </div>

            <div className="col-md-6 text-md-right">
              <h5>Contact Us</h5>
              <p>Email: contact@unichef.com</p>
              <p>Phone: +123 456 789</p>
              <div>
                <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white me-3"><i className="bi bi-whatsapp"></i></a>
                <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
