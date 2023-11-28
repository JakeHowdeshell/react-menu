/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerWrapper">
      <div className="description">
        <p>
          Come join us on a culinary journey through Mexico – where every dish
          is a celebration of flavor, and every bite is a taste of tradition.
          Sabor Mexicano, where the heart of Mexico meets the streets of Austin!
        </p>
      </div>
      <div className="contact">
        <p>
          For catering inquiries, reach out to us at through{" "}
          <a href="#">
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
          </a>{" "}
          or{" "}
          <a href="#">
            <FontAwesomeIcon icon={faPhone} size="xl" />
            (512)-GR8-TACO
          </a>
          .
        </p>
      </div>
      <div className="social-media">
        <p>
          Ready to spice up your day? Follow us on{" "}
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>{" "}
          or{" "}
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} size="xl" />
          </a>{" "}
          for the latest updates on our location and menu.
        </p>
      </div>
      </div>
    </footer>
  );
}
