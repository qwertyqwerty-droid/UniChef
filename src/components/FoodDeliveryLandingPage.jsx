 
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-light min-vh-100">
      <header className="bg-success text-white py-4 shadow">
        <div className="container text-center">
          <h1 className="display-4">Order Food!</h1>
          <p className="lead">Your favorite meals delivered to your doorstep.</p>
        </div>
      </header>

      <main className="container my-5">
        <section className="favorites mb-5">
          <h2 className="text-center mb-4">Your Favorites</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img src="path_to_image/rice_with_beans.jpg" className="card-img-top" alt="Rice with Beans" />
                <div className="card-body">
                  <h5 className="card-title">Rice with Beans</h5>
                  <p className="card-text">Delicious rice with your choice of beans.</p>
                  <Link to="/order/rice-with-beans" className="btn btn-primary">Order Now</Link>
                </div>
              </div>
            </div>
            {/* Repeat similar blocks for other favorite meals */}
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img src="path_to_image/chicken_biryani.jpg" className="card-img-top" alt="Chicken Biryani" />
                <div className="card-body">
                  <h5 className="card-title">Chicken Biryani</h5>
                  <p className="card-text">Aromatic chicken biryani with spices.</p>
                  <Link to="/order/chicken-biryani" className="btn btn-primary">Order Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img src="path_to_image/pasta.jpg" className="card-img-top" alt="Pasta" />
                <div className="card-body">
                  <h5 className="card-title">Creamy Pasta</h5>
                  <p className="card-text">Rich and creamy pasta with your choice of sauce.</p>
                  <Link to="/order/pasta" className="btn btn-primary">Order Now</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="subscription text-center mb-5">
          <h2>Subscribe for Exclusive Deals!</h2>
          <div className="countdown mb-3">
            <h5>Subscription Ends In:</h5>
            <div className="badge badge-danger">02:15:45</div> {/* Countdown Timer Placeholder */}
          </div>
          <p>Join our subscription service for exclusive meal discounts and offers.</p>
          <Link to="/subscribe" className="btn btn-warning">Subscribe</Link>
          <Link to="/renew" className="btn btn-secondary ml-3">Renew Subscription</Link>
          <div className="subscription-info mt-4">
            <h5>Benefits:</h5>
            <ul className="list-unstyled">
              <li>Discounted meals every week</li>
              <li>Exclusive access to new menu items</li>
              <li>Free delivery on all orders</li>
            </ul>
          </div>
        </section>

        <section className="delivery-info mb-5">
          <h2 className="text-center mb-4">Delivery Information</h2>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="address">Delivery Address</label>
                <input type="text" className="form-control" id="address" placeholder="Enter your address" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="deliveryTime">Preferred Delivery Time</label>
              <select id="deliveryTime" className="form-control">
                <option>Choose...</option>
                <option>Now</option>
                <option>Later</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success">Submit Delivery Information</button>
          </form>
        </section>

        <section className="restaurant-info mb-5">
          <h2 className="text-center mb-4">Top Restaurants</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img src="path_to_image/restaurant1.jpg" className="card-img-top" alt="Restaurant 1" />
                <div className="card-body">
                  <h5 className="card-title">Spicy Kitchen</h5>
                  <p className="card-text">Authentic spicy dishes from around the world.</p>
                  <Link to="/restaurants/spicy-kitchen" className="btn btn-primary">View Menu</Link>
                </div>
              </div>
            </div>
            {/* Repeat similar blocks for other top restaurants */}
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img src="path_to_image/vegan_bistro.jpg" className="card-img-top" alt="Vegan Bistro" />
                <div className="card-body">
                  <h5 className="card-title">Vegan Bistro</h5>
                  <p className="card-text">Delicious vegan meals made with fresh ingredients.</p>
                  <Link to="/restaurants/vegan-bistro" className="btn btn-primary">View Menu</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img src="path_to_image/sushi_place.jpg" className="card-img-top" alt="Sushi Place" />
                <div className="card-body">
                  <h5 className="card-title">Sushi Place</h5>
                  <p className="card-text">Fresh sushi rolls made to perfection.</p>
                  <Link to="/restaurants/sushi-place" className="btn btn-primary">View Menu</Link>
                </div>
              </div>
            </div>
          </div>
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

export default LandingPage;
