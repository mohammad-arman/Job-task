import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../Images/footer-logo.png";
import './Footer.css'

function Footer() {
  return (
    <div className="footer__area py-5">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <div className="contact__part">
              <h2>Contact</h2>
              <p>info@framefitness.com</p>
            </div>
            <div className="address__part">
              <p>
                Frame Innovative Technologies Corp.<br/>
                265 S. Western Avenue P.O. Box #741940 Los Angeles, CA
                90004-9998
              </p>
            </div>
            <div className="footer__social__icon text-start">
              <ul>
                <li>
                  <i className="fab fa-facebook"></i>
                </li>
                <li>
                  <i className="fab fa-twitter"></i>
                </li>
                <li>
                  <i className="fab fa-instagram"></i>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <img className="mt-5" src={logo} alt="" />
          </Col>
          <Col md={4}>
            <div className="footer__text">
              <div className="d-flex justify-content-end">
                <p>Terms & Condition</p>
              </div>
              <div>
                <p className="d-flex justify-content-end"> ©Copyright 2021 <span>Frame is patent pending</span></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
