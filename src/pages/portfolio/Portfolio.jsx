import React, { useState } from "react";
import "./portfolio.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import cara from "../../images/cara.jpeg";
import cara2 from "../../images/cara2.jpeg";
import cara3 from "../../images/cara3.jpeg";
import cara4 from "../../images/cara4.jpeg";
import cara5 from "../../images/cara5.jpeg";
import klassy from "../../images/klassy1.jpeg";
import klassy2 from "../../images/klassy2.jpeg";
import klassy3 from "../../images/klassy3.jpeg";
import klassy4 from "../../images/klassy4.jpeg";
import { FaLink } from "react-icons/fa";

const Portfolio = () => {
  const [btnName, setBtnName] = useState("all");
  return (
    <div className="page-portfolio" id="porfolio">
      <h1 className="title text-center mb-4">See My Work</h1>
      <Container>
        <div className="buttons mb-4 d-flex justify-content-center">
          <button
            className={btnName === "all" ? "btn_active" : "btn_disabled"}
            onClick={(e) => setBtnName(e.target.name)}
            name="all"
          >
            All
          </button>
          <button
            className={btnName === "html" ? "btn_active" : "btn_disabled"}
            onClick={(e) => setBtnName(e.target.name)}
            name="html"
          >
            Html&Css
          </button>
          <button
            className={btnName === "js" ? "btn_active" : "btn_disabled"}
            onClick={(e) => setBtnName(e.target.name)}
            name="js"
          >
            JavaScript
          </button>
          <button
            className={btnName === "react" ? "btn_active" : "btn_disabled"}
            onClick={(e) => setBtnName(e.target.name)}
            name="react"
          >
            ReactJs
          </button>
        </div>
        <Row className="images">
          <Col className="col-12 col-sm-6  col-lg-4 mb-3">
            <div className="wrap-img">
              <img src={cara} alt="" />
              <div className="wrap-icon">
                <FaLink />
              </div>
            </div>
          </Col>
          <Col className="col-12 col-sm-6  col-lg-4 mb-2">
            <div className="wrap-img">
              <img src={klassy} alt="" />
              <div className="wrap-icon">
                <FaLink />
              </div>
            </div>
          </Col>
          <Col className="col-12 col-sm-6  col-lg-4 mb-2">
            <div className="wrap-img">
              <img src={cara3} alt="" />
              <div className="wrap-icon">
                <FaLink />
              </div>
            </div>
          </Col>
          <Col className="col-12 col-sm-6  col-lg-4 mb-2">
            <div className="wrap-img">
              <img src={cara3} alt="" />
              <div className="wrap-icon">
                <FaLink />
              </div>
            </div>
          </Col>
          <Col className="col-12 col-sm-6  col-lg-4 mb-2">
            <div className="wrap-img">
              <img src={cara3} alt="" />
              <div className="wrap-icon">
                <FaLink />
              </div>
            </div>
          </Col>
          <Col className="col-12 col-sm-6  col-lg-4 mb-2">
            <div className="wrap-img">
              <img src={cara3} alt="" />
              <div className="wrap-icon">
                <FaLink />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
