// src/components/MainContent.jsx
import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const MainContent = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <div className="graphics-bar" style={{ height: '300px', background: '#e9ecef' }}>
            <h2 className="text-center my-5">Graphics / Hero Image</h2>
          </div>
          <Button variant="primary" className="my-3">Order Now</Button>
          <div className="restaurant-portal my-3 p-3" style={{ border: '1px solid #ddd', borderRadius: '5px' }}>
            <h3>Restaurants Portal</h3>
            {/* Add restaurant listings here */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
