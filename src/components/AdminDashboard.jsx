 
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="bg-light min-vh-100">
      <header className="bg-primary text-white py-4 shadow">
        <h1 className="text-center">Eatury Page (Admin)</h1>
        <h2 className="text-center">X-Restaurant</h2>
      </header>

      <main className="container my-5">
        <section className="metrics text-center mb-5">
          <h3 className="mb-4">Key Metrics</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="metric card shadow-sm">
                <div className="card-body">
                  <h4>Followers</h4>
                  <p className="h5">5.1k</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="metric card shadow-sm">
                <div className="card-body">
                  <h4>Engagement</h4>
                  <p className="h5">2.9k</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="metric card shadow-sm">
                <div className="card-body">
                  <h4>Orders</h4>
                  <p className="h5">2.9k</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <nav className="d-flex justify-content-around my-4">
          <Link to="/menu" className="btn btn-success">Menu</Link>
          <Link to="/services" className="btn btn-success">Services</Link>
          <Link to="/book-online" className="btn btn-success">Book Online</Link>
          <Link to="/payment" className="btn btn-success">Payment</Link>
          <Link to="/admin" className="btn btn-success">Admin</Link>
        </nav>

        <section className="admin-settings my-5">
          <h3>Admin Settings</h3>
          <ul className="list-group">
            {[
              { path: "/edit-profile", label: "Edit Profile" },
              { path: "/charge-rates", label: "Charge Rates" },
              { path: "/terms-offer", label: "Terms Offer" },
              { path: "/privacy-policy", label: "Privacy Policy" },
              { path: "/domain-policy", label: "Domain Policy" },
              { path: "/advertise-now", label: "Advertise Now" },
            ].map((item, index) => (
              <li key={index} className="list-group-item">
                <Link to={item.path} className="text-dark">{item.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Eatury. All Rights Reserved.</p>
          <Link to="/help" className="text-white">Help Center</Link>
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboard;
