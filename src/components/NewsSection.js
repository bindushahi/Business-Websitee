import React from "react";
import "../styles/styles.css";

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="container">
        <h2>Latest News</h2>

        <div className="news-item">
          <img src="assets/nee.jpg" alt="News Image 1" />
          <div className="news-details">
            <h3>News Title 1</h3>
            <p className="news-date">March 15, 2024</p>
            <p className="news-description">
              This is a brief description of the exciting news. Click the button
              below to read more.
            </p>
            <a href="/" className="news-link">
              Read more
            </a>
          </div>
          <div className="read-more">
            <a
              href="https://www.youtube.com/watch?v=JeU_EYFH1Jk"
              className="news-video-link"
            >
              Watch Video
            </a>
          </div>
        </div>

        <div className="news-item">
          <img src="assets/news.jpg" alt="News Image 2" />
          <div className="news-details">
            <h3>News Title 2</h3>
            <p className="news-date">March 14, 2024</p>
            <p className="news-description">
              This is a brief description of the breaking news. Click the button
              below to read more.
            </p>
            <a href="/" className="news-link">
              Read more
            </a>
          </div>
          <div className="read-more">
            <a
              href="https://www.youtube.com/watch?v=JeU_EYFH1Jk"
              className="news-video-link"
            >
              Watch Video
            </a>
          </div>
        </div>

        <div className="news-item">
          <img src="assets/ne.jpg" alt="News Image 3" />
          <div className="news-details">
            <h3>News Title 3</h3>
            <p className="news-date">March 13, 2024</p>
            <p className="news-description">
              This is a brief description of the important news. Click the
              button below to read more.
            </p>
            <a href="/" className="news-link">
              Read more
            </a>
          </div>
          <div className="read-more">
            <a
              href="https://www.youtube.com/watch?v=JeU_EYFH1Jk"
              className="news-video-link"
            >
              Watch Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
