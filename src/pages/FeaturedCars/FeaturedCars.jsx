import React, { useRef, useEffect, useState } from 'react';
import './FeaturedCars.css';

const cardsData = [
  {
    img: "https://di-uploads-pod7.dealerinspire.com/mercedesbenzofsandiegoredesign/uploads/2018/04/2018-Mercedes-Benz-C-Class-C-300-hub.png",
    alt: "Mercedes-Benz E-Class",
    model: "Model: 2024 | 0 mi | 255–375 HP | Automatic",
    title: "Mercedes-Benz E-Class",
    price: "$62,450",
    desc: "A luxury sedan offering advanced features, premium comfort, and a powerful engine for a smooth driving experience."
  },
  {
    img: "https://www.pngplay.com/wp-content/uploads/15/Camry-Toyota-Transparent-PNG.png",
    alt: "Toyota Camry",
    model: "Model: 2024 | 0 mi | 203–301 HP | Automatic",
    title: "Toyota Camry",
    price: "$29,495",
    desc: "A reliable and fuel-efficient sedan, perfect for daily commutes and long drives with a stylish design."
  },
  {
    img: "https://pictures.dealer.com/l/livermorehonda/0793/5be48bbca961897596cd28bfe999eec5x.jpg?impolicy=downsize_bkpt&w=396",
    alt: "Honda Accord",
    model: "Model: 2024 | 0 mi | 192–204 HP | Automatic",
    title: "Honda Accord",
    price: "$27,895",
    desc: "A spacious and stylish sedan equipped with cutting-edge technology and excellent performance."
  },
  {
    img: "https://cache.easifleet.com.au/http/tesla-model-3.png/d8c74f6584f524a5f1d9ec879877bfe1/tesla-model-3.webp",
    alt: "Tesla Model 3",
    model: "Model: 2024 | 0 mi | 255–382 HP | Automatic (Electric)",
    title: "Tesla Model 3",
    price: "$38,990",
    desc: "A high-performance electric vehicle with impressive range, innovative features, and eco-friendly design."
  },
  {
    img: "https://bmw-laxmi.com.np/assets/frontend/images/all-models/3-series/inform/cosySec1.png",
    alt: "BMW 3 Series",
    model: "Model: 2024 | 0 mi | 255–382 HP | Automatic",
    title: "BMW 3 Series",
    price: "$43,800",
    desc: "A sporty and elegant sedan with dynamic driving capabilities and a luxurious interior."
  },
  {
    img: "https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2022.rav4.awd.xle.premium-lrg.png",
    alt: "Toyota RAV4",
    model: "Model: 2024 | 0 mi | 203–219 HP | Automatic",
    title: "Toyota RAV4",
    price: "$28,475",
    desc: "A versatile SUV designed for both off-road adventures and city driving, offering comfort and reliability."
  },
  {
    img: "https://pngimg.com/d/mazda_PNG63.png",
    alt: "Mazda CX-5",
    model: "Model: 2024 | 0 mi | 187–256 HP | Automatic",
    title: "Mazda CX-5",
    price: "$26,700",
    desc: "A compact SUV with a sleek design, responsive handling, and a comfortable interior for families."
  },
  {
    img: "https://dealerimages.dealereprocess.com/image/upload/c_limit,f_auto,fl_lossy,w_600/v1/svp/dep/22hyundaiioniq5/hyunda_22ioniq5_angularfront_atlaswhite",
    alt: "Hyundai Ioniq 5",
    model: "Model: 2024 | 0 mi | 168–320 HP | Automatic (Electric)",
    title: "Hyundai Ioniq 5",
    price: "$41,450",
    desc: "A futuristic electric SUV with innovative features, great efficiency, and a bold design."
  },
  {
    img: "https://www.pngplay.com/wp-content/uploads/13/Kia-Telluride-Download-Free-PNG.png",
    alt: "Kia Telluride",
    model: "Model: 2024 | 0 mi | 291 HP | Automatic",
    title: "Kia Telluride",
    price: "$35,690",
    desc: "A spacious and family-friendly SUV with a bold exterior, advanced safety features, and a comfortable ride."
  }
];

const FeaturedCars = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="Featured-Cars-Container57" ref={sectionRef}>
      <div className="featured-cars-header58">
        <h3>Checkout the Latest Cars</h3>
        <h2>Featured Cars</h2>
        <p style={{ fontWeight: 700 }}>________</p>
      </div>
      <div id="featured-cars-cards59">
        {cardsData.map((car, idx) => (
         <div
  id="f-cards-container60"
  key={car.title + idx}
  className={show ? "fade-up-card" : ""}
  style={{
    animationDelay: show ? `${idx * 0.12 + 0.1}s` : "0s"
  }}
>
            <div id="featured-cars-card61">
              <img src={car.img} alt={car.alt} />
              <hr />
              <p className="car-spec62">{car.model}</p>
            </div>
            <div className="card-description63">
              <h2>{car.title}</h2>
              <h4>{car.price}</h4>
              <p>{car.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCars;