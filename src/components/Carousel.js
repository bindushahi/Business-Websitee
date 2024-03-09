import React from "react";
import Slider from "react-slick";
import "../styles/styles.css";

const Carousel = () => {
  const settings = {
    // dots: true, //visiblity ko lagi
    infinite: true, //slide garda first-last and last-first
    speed: 90000, //dherai value slow transition
    slidesToShow: 2, //kati ota dekhaune 
    slidesToScroll: 2, //no.of slide to scroll
    autoplay: true, 
    autoplaySpeed: 0, //won't stop even got to last slide 
    cssEase: "linear", 
    pauseOnHover: false, 
  };

// Adjust settings for responsive design
  const responsiveSettings = [
    {
      breakpoint: 992, // screen width 992px and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // screen width 768px and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  Object.assign(settings, { responsive: responsiveSettings });


  return (
    <div className="custom-carousel">
      <Slider {...settings}>
        <div className="item">
          <img src="./assets/work.jpg" alt="Image 1" />
          <div className="carousel-content">
            <h2>Welcome to Our Business</h2>
            <p>Discover Excellence in Every Detail</p>
            <button className="btn-trans">Explore Now</button>
          </div>
        </div>

        <div className="item">
          <img src="./assets/buu.jpg" alt="Image 2" />
          <div className="carousel-content">
            <h2>Your Success, Our Priority</h2>
            <p>Unlocking Potential, Delivering Results</p>
            <button className="btn-trans">Get Started</button>
          </div>
        </div>
        
      
      </Slider>
    </div>
  );
};

export default Carousel;
