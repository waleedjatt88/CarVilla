import React from 'react';
import './FeaturedCars.css';

const FeaturedCars = () => {
  return (
    
    <div id="Featured-Cars-Container">
      <div className="featured-cars-header">
        <h3>Checkout the Latest Cars</h3>
        <h2>Featured Cars</h2>
        <p style={{ fontWeight: 700 }}>________</p>
      </div>
      <div id="featured-cars-cards">
        <div id="f-cards-container">
          <div id="featured-cars-card">
            <img
              src="https://di-uploads-pod7.dealerinspire.com/mercedesbenzofsandiegoredesign/uploads/2018/04/2018-Mercedes-Benz-C-Class-C-300-hub.png"
              alt="Mercedes-Benz E-Class"
            />
            <hr />
            <p className="car-spec">Model: 2024 | 0 mi | 255–375 HP | Automatic</p>
          </div>
          <div className="card-description">
            <h2>Mercedes-Benz E-Class</h2>
            <h4>$62,450</h4>
            <p>A luxury sedan offering advanced features, premium comfort, and a powerful engine for a smooth driving experience.</p>
          </div>
        </div>
        <div id="f-cards-container">
          <div id="featured-cars-card">
            <img src="https://www.pngplay.com/wp-content/uploads/15/Camry-Toyota-Transparent-PNG.png" alt="Toyota Camry" />
            <hr />
            <p className="car-spec">Model: 2024 | 0 mi | 203–301 HP | Automatic</p>
          </div>
          <div className="card-description">
            <h2>Toyota Camry</h2>
            <h4>$29,495</h4>
            <p>A reliable and fuel-efficient sedan, perfect for daily commutes and long drives with a stylish design.</p>
          </div>
        </div>
        <div id="f-cards-container">
          <div id="featured-cars-card">
            <img
              src="https://pictures.dealer.com/l/livermorehonda/0793/5be48bbca961897596cd28bfe999eec5x.jpg?impolicy=downsize_bkpt&w=396"
              alt="Honda Accord"
            />
            <hr />
            <p className="car-spec">Model: 2024 | 0 mi | 192–204 HP | Automatic</p>
          </div>
          <div className="card-description">
            <h2>Honda Accord</h2>
            <h4>$27,895</h4>
            <p>A spacious and stylish sedan equipped with cutting-edge technology and excellent performance.</p>
          </div>
        </div>
        <div id="f-cards-container">
          <div id="featured-cars-card">
            <img
              src="https://cache.easifleet.com.au/http/tesla-model-3.png/d8c74f6584f524a5f1d9ec879877bfe1/tesla-model-3.webp"
              alt="Tesla Model 3"
            />
            <hr />
            <p className="car-spec">Model: 2024 | 0 mi | 255–382 HP | Automatic (Electric)</p>
          </div>
          <div className="card-description">
            <h2>Tesla Model 3</h2>
            <h4>$38,990</h4>
            <p>A high-performance electric vehicle with impressive range, innovative features, and eco-friendly design.</p>
          </div>
        </div>
        <div id="f-cards-container">
          <div id="featured-cars-card">
            <img src="https://bmw-laxmi.com.np/assets/frontend/images/all-models/3-series/inform/cosySec1.png" alt="BMW 3 Series" />
            <hr />
            <p className="car-spec">Model: 2024 | 0 mi | 255–382 HP | Automatic</p>
          </div>
          <div className="card-description">
            <h2>BMW 3 Series</h2>
            <h4>$43,800</h4>
            <p>A sporty and elegant sedan with dynamic driving capabilities and a luxurious interior.</p>
          </div>
        </div>
        <div id="f-cards-container">
          <div id="featured-cars-card">
            <img
              src="https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2022.rav4.awd.xle.premium-lrg.png"
              alt="Toyota RAV4"
            />
            <hr />
            <p className="car-spec">Model: 2024 | 0 mi | 203–219 HP | Automatic</p>
          </div>
          <div className="card-description">
            <h2>Toyota RAV4</h2>
            <h4>$28,475</h4>
            <p>A versatile SUV designed for both off-road adventures and city driving, offering comfort and reliability.</p>
          </div>
        </div>
        <div id="f-cards-container">
          <div id="featured-cars-card">
            <img src="https://pngimg.com/d/mazda_PNG63.png" alt="Mazda CX-5" />
            <hr />
            <p className="car-spec">Model: 2024 | 0 mi | 187–256 HP | Automatic</p>
          </div>
          <div className="card-description">
            <h2>Mazda CX-5</h2>
            <h4>$26,700</h4>
            <p>A compact SUV with a sleek design, responsive handling, and a comfortable interior for families.</p>
          </div>
        </div>
        <div id="f-cards-container">
          <div id="featured-cars-card">
            <img
              src="https://dealerimages.dealereprocess.com/image/upload/c_limit,f_auto,fl_lossy,w_600/v1/svp/dep/22hyundaiioniq5/hyunda_22ioniq5_angularfront_atlaswhite"
              alt="Hyundai Ioniq 5"
            />
            <hr />
            <p className="car-spec">Model: 2024 | 0 mi | 168–320 HP | Automatic (Electric)</p>
          </div>
          <div className="card-description">
            <h2>Hyundai Ioniq 5</h2>
            <h4>$41,450</h4>
            <p>A futuristic electric SUV with innovative features, great efficiency, and a bold design.</p>
          </div>
        </div>
        <div id="f-cards-container">
          <div id="featured-cars-card">
            <img src="https://www.pngplay.com/wp-content/uploads/13/Kia-Telluride-Download-Free-PNG.png" alt="Kia Telluride" />
            <hr />
            <p className="car-spec">Model: 2024 | 0 mi | 291 HP | Automatic</p>
          </div>
          <div className="card-description">
            <h2>Kia Telluride</h2>
            <h4>$35,690</h4>
            <p>A spacious and family-friendly SUV with a bold exterior, advanced safety features, and a comfortable ride.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;