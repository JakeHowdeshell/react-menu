import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import developers from "../../public/developer.json";

const About = () => {
  console.log(developers);
  return (
    <div className="col justify-content-md-center">
      <div className="d-flex justify-content-md-center align-content-between flex-wrap">
        <h1 className="page-header border-bottom border-dark">About Us</h1>
        <hr></hr>
      </div>
      <div className="flexContainer">
        <p className="text-center description">
          <h2>🌮 Sabor Mexicano Food Truck 🚚</h2>
          Welcome to Sabor Mexicano, where we invite you to embark on a culinary
          journey that transports you straight to the heart of Mexico. We're not
          just a food truck; we're a celebration of flavors, a mobile fiesta
          that brings the vibrant tastes of Mexico to your doorstep.
        </p>
      </div>
      <div className="d-flex justify-content-md-center align-content-between flex-wrap">
        {developers.map((developer) => (
          <div className="card" key={developer.name}>
            <Link to={developer.linkedIn} style={{ textDecoration: "none" }}>
              <img src={developer.image} className="card-image"></img>
              <div className="title">{developer.name}</div>
            </Link>
            <div className="heading" style={{ fontSize: "25px" }}>
              {developer.title}
            </div>
            <div className="cardActions">
              <h2 className="h2Custom">
                <a href={developer.linkedIn}>
                  <FontAwesomeIcon icon={faLinkedinIn} flip />
                </a>
              </h2>
              <a href={developer.email}>
                <FontAwesomeIcon icon={faEnvelope} bounce size="2xl" />
              </a>
              <a href={developer.github}>
                <FontAwesomeIcon icon={faGithub} fade size="2xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
