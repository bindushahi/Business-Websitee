import React from "react";
import "../styles/styles.css";

const AboutCompany = () => {
  return (
    <section className="about-company">
      <div className="container">
        <h2>About ABC Company</h2>
        <p>
          Welcome to ABC Company – your gateway to innovation in Nepal. We
          specialize in delivering cutting-edge solutions, ranging from bespoke
          software development to strategic IT consulting. At ABC, we believe in
          the power of technology to transform businesses. Our commitment goes
          beyond services; it's about forging lasting partnerships. With a focus
          on precision and quality, we bring a wealth of experience to every
          project. Whether you're looking to streamline operations, enhance user
          experiences, or embark on a digital transformation journey, ABC
          Company is your dedicated ally. What sets us apart is our agility and
          adaptability. In a fast-paced digital landscape, we stay ahead of the
          curve, ensuring your business is equipped for success. Join us at ABC
          Company, where innovation meets excellence.
        </p>
        <div className="company-image">
          <img src="assets/bu.jpg" alt="Company Image 1" />
        </div>

        <div className="company-image">
          <img src="assets/buu.jpg" alt="Company Image 2" />
        </div>
        <div className="company-image">
          <img src="assets/buuu.jpg" alt="Company Image 3" />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
