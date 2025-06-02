import React, { useState, useEffect } from "react";
import "./NewCars.css";
import car1 from "../../assets/featured cars/car1.jpeg";
import car2 from "../../assets/featured cars/car3.jpeg";
import car3 from "../../assets/featured cars/car2.jpg.jpg";
import car4 from "../../assets/featured cars/car 4.jpeg";

const NewCars = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Function to show a specific slide
  const showSlide = (n) => {
    setCurrentSlide(n);
  };

  // Automatic slideshow logic
  useEffect(() => {
    const slides = document.getElementsByClassName('car-slide');
    const dots = document.getElementsByClassName('dot');

    // Hide all slides and reset dots
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      dots[i].className = dots[i].className.replace(' active', '');
    }

    // Ensure currentSlide stays within bounds
    let adjustedSlide = currentSlide;
    if (currentSlide > slides.length) {
      adjustedSlide = 1;
      setCurrentSlide(1);
    } else if (currentSlide < 1) {
      adjustedSlide = slides.length;
      setCurrentSlide(slides.length);
    }

    // Show current slide and activate dot
    slides[adjustedSlide - 1].style.display = 'block';
    dots[adjustedSlide - 1].className += ' active';

    // Automatic slide change every 3 seconds
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev >= slides.length ? 1 : prev + 1));
    }, 3000);

    // Cleanup timer on component unmount or slide change
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div id="new-cars-container">
      <div className="new-cars-header">
        <h5>Checkout the Latest Cars</h5>
        <h2>Newest Cars</h2>
      </div>
      <div className="slideshow-container">
        <div className={`car-slide fade ${currentSlide === 1 ? 'active' : ''}`}>
          <img src={car1} alt="Ferrari 488 Superfast" className="car-image" />
          <div className="car-info">
            <h2>Ferrari 488 Superfast</h2>
            <p>
              The Ferrari 488 is a high-performance sports car produced by the
              Italian luxury car manufacturer Ferrari. It was introduced in 2015.
            </p>
            <p>The Ferrari 812 Superfast, which has a V12 engine.</p>
            <a href="#" className="view-details">
              View Details
            </a>
          </div>
        </div>
        <div className={`car-slide fade ${currentSlide === 2 ? 'active' : ''}`}>
          <img src={car2} alt="Porsche 911 Turbo" className="car-image" />
          <div className="car-info">
            <h2>Porsche 911 Turbo</h2>
            <p>
              The Porsche 911 Turbo is a high-performance sports car known for
              its twin-turbocharged flat-six engine and all-wheel drive.
            </p>
            <p>
              The top speed exceeds 320 km/h (200 mph), offering both track
              performance and daily drivability.
            </p>
            <a href="#" className="view-details">
              View Details
            </a>
          </div>
        </div>
        <div className={`car-slide fade ${currentSlide === 3 ? 'active' : ''}`}>
          <img src={car3} alt="Lamborghini Huracan" className="car-image" />
          <div className="car-info">
            <h2>Lamborghini Huracan</h2>
            <p>
              The Lamborghini Huracán is a high-performance V10-powered supercar
              introduced in 2014, succeeding the Gallardo.
            </p>
            <p>
              It features a 5.2-liter naturally aspirated V10 engine, producing
              up to 640 hp in the Huracán EVO and Huracán STO versions.
            </p>
            <a href="#" className="view-details">
              View Details
            </a>
          </div>
        </div>
        <div className={`car-slide fade ${currentSlide === 4 ? 'active' : ''}`}>
          <img src={car4} alt="McLaren 720S" className="car-image" />
          <div className="car-info">
            <h2>McLaren 720S</h2>
            <p>
              The McLaren 720S is a high-performance supercar introduced in 2017,
              succeeding the 650S.
            </p>
            <p>
              The 720S Spider version adds an open-top experience with the same
              thrilling performance.
            </p>
            <a href="#" className="view-details">
              View Details
            </a>
          </div>
        </div>
      </div>
      <div className="dots-container">
        <span
          className={`dot ${currentSlide === 1 ? 'active' : ''}`}
          onClick={() => showSlide(1)}
        />
        <span
          className={`dot ${currentSlide === 2 ? 'active' : ''}`}
          onClick={() => showSlide(2)}
        />
        <span
          className={`dot ${currentSlide === 3 ? 'active' : ''}`}
          onClick={() => showSlide(3)}
        />
        <span
          className={`dot ${currentSlide === 4 ? 'active' : ''}`}
          onClick={() => showSlide(4)}
        />
      </div>
    </div>
  );
};

export default NewCars;