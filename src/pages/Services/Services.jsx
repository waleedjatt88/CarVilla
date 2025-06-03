import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="content-section64">
      <h2 style={{ color: 'black' }}>SERVICES</h2>
      <div className="cards65">
        <div className="card66">
          <img
            src="https://t4.ftcdn.net/jpg/06/92/61/21/360_F_692612180_XAUFLe7Mw3Vvef8H33QudG16RWh9H0d1.jpg"
            alt="Dealership of cars"
          />
          <div className="card66-overlay">
            <h3>Dealership of Cars</h3>
          </div>
          <div className="card66-body">
            <h3>The largest car dealership with the best selection and unbeatable deals.</h3>
          </div>
        </div>
        <div className="card66">
          <img
            src="https://www.shutterstock.com/image-photo/hand-mechanic-holding-car-service-600nw-2340377479.jpg"
            alt="Unlimited repair warranty"
          />
          <div className="card66-overlay">
            <h3>Unlimited Repair Warranty</h3>
          </div>
          <div className="card66-body">
            <h3>Enjoy peace of mind with our unlimited repair warranty—coverage you can count on.</h3>
          </div>
        </div>
        <div className="card66">
          <img
            src="https://static.vecteezy.com/system/resources/previews/025/074/876/non_2x/protection-and-insurance-concept-car-home-and-health-preventing-and-evaluating-potential-business-investment-benefits-life-insurance-protect-your-family-and-loved-ones-from-accidents-free-photo.jpg"
            alt="Insurance Policy"
          />
          <div className="card66-overlay">
            <h3>Insurance Policy</h3>
          </div>
          <div className="card66-body">
            <h3>Comprehensive insurance coverage tailored to protect what matters most.</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;