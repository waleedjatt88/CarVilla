import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Brands.css";

const Brands = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="brands-section47">
      <div className="brands-header48">
        <h5>EXPLORE OUR PARTNERS</h5>
        <h2>TOP BRANDS</h2>
        <p style={{ fontWeight: 700 }}>________</p>
      </div>
      <div className="brands-container49">
        <div className="brand-card50" data-aos="fade-up">
          <img
            src="https://www.carlogos.org/car-logos/bmw-logo.png"
            alt="BMW"
          />
          <h3>BMW</h3>
          <p>Luxury vehicles known for performance and innovation</p>
        </div>
        <div className="brand-card50" data-aos="fade-up" data-aos-delay="100">
          <img
            src="https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-1920x1080.png"
            alt="Mercedes-Benz"
          />
          <h3>Mercedes-Benz</h3>
          <p>Premium vehicles with cutting-edge technology</p>
        </div>
        <div className="brand-card50" data-aos="fade-up" data-aos-delay="200">
          <img
            src="https://www.carlogos.org/car-logos/audi-logo.png"
            alt="Audi"
          />
          <h3>Audi</h3>
          <p>German engineering with sophisticated design</p>
        </div>
        <div className="brand-card50" data-aos="fade-up">
          <img
            src="https://www.carlogos.org/car-logos/toyota-logo.png"
            alt="Toyota"
          />
          <h3>Toyota</h3>
          <p>Reliable and efficient vehicles for every need</p>
        </div>
        <div className="brand-card50" data-aos="fade-up">
          <img
            src="https://www.carlogos.org/logo/Ferrari-logo-2560x1440.png"
            alt="Ferrari"
          />
          <h3>Ferrari</h3>
          <p>Italian supercars with racing heritage</p>
        </div>
        <div className="brand-card50" data-aos="fade-up">
          <img
            src="https://www.carlogos.org/car-logos/porsche-logo.png"
            alt="Porsche"
          />
          <h3>Porsche</h3>
          <p>Sports cars combining luxury and performance</p>
        </div>
        <div className="brand-card50" data-aos="fade-up">
          <img
            src="https://www.carlogos.org/car-logos/tesla-logo.png"
            alt="Tesla"
          />
          <h3>Tesla</h3>
          <p>Electric vehicles pushing technological boundaries</p>
        </div>
        <div className="brand-card50" data-aos="fade-up">
          <img
            src="https://www.carlogos.org/logo/Land-Rover-logo-2011-1920x1080.png"
            alt="Land Rover"
          />
          <h3>Land Rover</h3>
          <p>Luxury SUVs with unparalleled off-road capability</p>
        </div>
      </div>
    </div>
  );
};

export default Brands;
