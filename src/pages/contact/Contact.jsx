import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./contact.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
const Contact = () => {
  return (
    <div className="page-contact py-5" id="contact">
      <Container>
        <h1 className="text-center title mb-4">Contact Me</h1>
        <Row className=" justify-content-evenly">
          <Col md={5} className="mb-4">
            <form className="vg-contact-form">
              <div className="row">
                <div className="col-12 mt-3 ">
                  <input
                    className="form-control"
                    type="text"
                    name="Name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-6 mt-3 ">
                  <input
                    className="form-control"
                    type="text"
                    name="Email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-6 mt-3 w">
                  <input
                    className="form-control"
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-12 mt-3">
                  <textarea
                    className="form-control"
                    name="Message"
                    rows="6"
                    placeholder="Enter message here.."
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="btn form-button  mt-3 ">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </Col>
          <Col md={5}>
            <div className="contant">
              <h5>Email</h5>
              <a href="mailto:moataznayel458@gmail.com">
                moataznayel458@gmail.com
              </a>
              <h5 className="mt-4">Phone</h5>
              <a href="tel:+201033340665">01033340665</a>
              <h5 className="mt-4">Follow Me</h5>
              <div className="icons">
                <div className="wrap-icon">
                  <a
                    href="https://www.linkedin.com/in/moataz-nayel-07b001255/"
                    target="blank"
                  >
                    <AiFillLinkedin />
                  </a>
                </div>
                <div className="wrap-icon">
                  <a
                    href="https://github.com/moataznayel?tab=repositories"
                    target="blank"
                  >
                    <AiFillGithub />
                  </a>
                </div>
                <div className="wrap-icon">
                  <a
                    href="https://www.facebook.com/profile.php?id=100008998596462&mibextid=ZbWKwL"
                    target={"blank"}
                  >
                    <BiLogoFacebook />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
