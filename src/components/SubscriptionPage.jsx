import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SubscriptionPage = () => {
  const [name, setName] = useState('');
  const [subscriptionMonth, setSubscriptionMonth] = useState('');
  const [mealPlan, setMealPlan] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [preferences, setPreferences] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the subscription logic here (e.g., API call)
  };

  return (
    <div>
      <header className="bg-light py-3">
        <h1 className="text-center">Subscribe to Unichef</h1>
      </header>

      <main className="container my-5">
        <form onSubmit={handleSubmit} className="subscription-form">
          <h3 className="mb-4">Join Our Subscription Service!</h3>
          
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subscriptionMonth" className="form-label">Select Subscription Month</label>
            <select
              id="subscriptionMonth"
              className="form-select"
              value={subscriptionMonth}
              onChange={(e) => setSubscriptionMonth(e.target.value)}
              required
            >
              <option value="" disabled>Select Month</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
              {/* Add more months as needed */}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="mealPlan" className="form-label">Select Meal Plan</label>
            <select
              id="mealPlan"
              className="form-select"
              value={mealPlan}
              onChange={(e) => setMealPlan(e.target.value)}
              required
            >
              <option value="" disabled>Select Plan</option>
              <option value="Weekly">Weekly</option>
              <option value="Bi-Weekly">Bi-Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Delivery Address</label>
            <input
              type="text"
              id="address"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="preferences" className="form-label">Meal Preferences (Allergies, Dietary Restrictions)</label>
            <textarea
              id="preferences"
              className="form-control"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-danger btn-lg">Proceed to Payment</button>
        </form>

        {/* Terms and Conditions */}
        <section className="mt-5">
          <h4>Terms and Conditions</h4>
          <p>Please read our terms and conditions carefully before subscribing.</p>
          {/* Add detailed terms and conditions here */}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Unichef. All Rights Reserved.</p>
          <Link to="/privacy-policy" className="text-white">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default SubscriptionPage;

