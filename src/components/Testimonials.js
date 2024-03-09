import React from "react";
import "../styles/styles.css";

const Testimonials = () => {
  return (
    <div>
      <section className="testimonials">
        <div className="container">
          <h2>Testimonials</h2>
          <div className="testimonial-container">
            <div className="testimonial-item">
              <img src="/assets/em1.jpg" alt="Testimonial 2 Image" />
              <h3>Rory Gilmore</h3>
              <p>
                Thrilled to share my experience – working with this team has
                been nothing short of amazing! Their expertise and commitment
                have truly made a positive impact, delivering exceptional
                results that exceeded my expectations.
              </p>
            </div>
            <div className="testimonial-item">
              <img src="/assets/em2.jpg" alt="Testimonial 1 Image" />
              <h3>Dean Green</h3>
              <p>
                Thrilled to share my experience – working with this team has
                been nothing short of amazing! Their expertise and commitment
                have truly made a positive impact, delivering exceptional
                results that exceeded my expectations.
              </p>
            </div>
            <div className="testimonial-item">
              <img src="/assets/em3.jpg" alt="Testimonial 3 Image" />
              <h3>Steve Doyne</h3>
              <p>
                Thrilled to share my experience – working with this team has
                been nothing short of amazing! Their expertise and commitment
                have truly made a positive impact, delivering exceptional
                results that exceeded my expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;