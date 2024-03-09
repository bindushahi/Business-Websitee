import React from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faTasks, faCubes } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";

const Statistics = () => {
  return (
    <section className="statistics" id="statistics">
      <div className="container">
        <h2>Numbers Are Talking</h2>
        <p>Let’s Check Our Business Growth and Success Story</p>

        <div className="stats-item">
          <div className="stat">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h3>Customer Served</h3>
            <p>
              {" "}
              <CountUp end={100} duration={2} />
            </p>
          </div>

          <div className="stat">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faTasks} />
            </div>
            <h3>Project Completed</h3>
            <p>
              <CountUp end={70} duration={2} />
            </p>
          </div>

          <div className="stat">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faCubes} />
            </div>
            <h3>Number of Products</h3>
            <p>
              <CountUp end={150} duration={2} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
