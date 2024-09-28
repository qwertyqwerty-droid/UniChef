import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './LandingPage.css';

const RestaurantPortal = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants] = useState([
    { name: 'CHIMA', price: '5k', image: 'path/to/chima.jpg', description: 'Delicious local dishes' },
    { name: 'LUANAR', price: '2k', image: 'path/to/luanar.jpg', description: 'Freshly made meals' },
    { name: 'CUNIMA', price: '1.5k', image: 'path/to/cunima.jpg', description: 'Exquisite international cuisine' },
    { name: 'UNIMA', price: '3k', image: 'path/to/unima.jpg', description: 'Authentic university meals' },
    { name: 'MZUWI', price: '2.5k', image: 'path/to/mzuwi.jpg', description: 'Traditional dishes from Malawi' },
    { name: 'MUBAS', price: '4k', image: 'path/to/mubas.jpg', description: 'Gourmet food experience' },
    { name: 'KUHEHI', price: '2k', image: 'path/to/kuhehi.jpg', description: 'Quick and tasty meals' },
    { name: 'Saarth', price: '5k', image: 'path/to/saarth.jpg', description: 'Spicy Indian food' },
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container-fluid">
      <header className="bg-light py-3">
        <div className="container">
          <h1 className="text-center">Restaurant Portal</h1>
          <div className="d-flex justify-content-center my-3">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search for restaurants..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn btn-primary">Search</button>
          </div>
          {/* Home Link */}
          <div className="text-center mt-3">
            <Link to="/" className="btn btn-secondary">
              Home
            </Link>
          </div>
        </div>
      </header>

      <main className="container mt-4">
        <div className="row">
          {restaurants
            .filter((restaurant) => restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((restaurant, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card">
                  <img src={restaurant.image} alt={restaurant.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{restaurant.name}</h5>
                    <p className="card-text">{restaurant.description}</p>
                    <p className="card-text"><strong>Price: {restaurant.price}</strong></p>
                    <button className="btn btn-danger">Order Now</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>

      {/* Advertisement Bar */}
      <section className="advertisement-bar bg-light text-center py-3">
        <h5>Promotions and Ads</h5>
        <p>Check out our special offers!</p>
      </section>

      <footer className="bg-dark text-white py-4">
        <div className="container">
          <h5>Contact Us</h5>
          <p>Email: contact@unichef.com</p>
          <p>Phone: +123 456 789</p>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantPortal;
