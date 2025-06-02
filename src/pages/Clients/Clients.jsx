import React from 'react';
import './Clients.css';

const Clients = () => {
  return (
    <div id="Clients">
      <div className="clients-header">
        <h3>What Our Clients Say</h3>
        <p>We are honored to have served a wide range of clients who trust us for their car needs. Here's what they have to say about CarVilla.</p>
      </div>
      <div className="testimonials-container">
        <div className="testimonial">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1tcZ9AWzzwu277kA0NAaGBdohRFmt-r59Q&s" alt="Liam Carter" />
          <h4>Liam Carter</h4>
          <p>"CarVilla made my car-buying experience seamless and enjoyable. Their team was professional, and I found the perfect car within my budget."</p>
        </div>
        <div className="testimonial">
          <img src="https://c8.alamy.com/comp/JBEFBR/confident-happy-business-woman-posing-isolated-on-a-white-background-JBEFBR.jpg" alt="Sophia Bennett" />
          <h4>Sophia Bennett</h4>
          <p>"I was impressed by the wide selection of cars and the excellent customer service. CarVilla truly exceeded my expectations."</p>
        </div>
        <div className="testimonial">
          <img src="https://st.depositphotos.com/1743476/1276/i/950/depositphotos_12765264-stock-photo-smiling-business-man.jpg" alt="Ethan Rivera" />
          <h4>Ethan Rivera</h4>
          <p>"The team at CarVilla helped me find my dream car. Their expertise and dedication made the process stress-free and enjoyable."</p>
        </div>
      </div>
      <div className="clients-logos">
        <h3>Trusted By</h3>
        <div className="logos-container">
          <img src="https://images.squarespace-cdn.com/content/v1/54a8956de4b00fb49e1c9675/1553724256165-4BY0JHG0HYKP3E4WM2HW/CARFAX+Brand+Header.png" alt="Client 1" />
          <img src="https://carfax.world/static/assets/img/AutoCheck.jpg" alt="Client 2" />
          <img src="https://vectorseek.com/wp-content/uploads/2023/08/Bosch-Automotive-Logo-Vector.svg-.png" alt="Client 3" />
          <img src="https://cdn.entergynewsroom.com/userfiles/TX%20Advocate%20Power/JD%20Power.png" alt="Client 4" />
          <img src="https://i.pinimg.com/736x/87/00/88/870088d039540e5ce066ff5b17d8fdf9.jpg" alt="Client 5" />
        </div>
      </div>
    </div>
  );
};

export default Clients;