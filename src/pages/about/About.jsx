import React from "react";
import myPhoto from "../../images/my photo.jpg";
import "./about.css";
import { Col, Container, Row } from "react-bootstrap";
import { BiCircle } from "react-icons/bi";
import { Fade, Slide } from "react-awesome-reveal";
const About = () => {
  return (
    <div className=" page-about" id="about">
      <Container>
        <Row>
          <Col lg={5} className="mb-4">
            <Slide direction="up" duration={"1000"} triggerOnce={true}>
              <div className="wrap-img m-auto">
                <img src={myPhoto} alt="not img" className="w-100 " />
              </div>
            </Slide>
          </Col>
          <Col lg={6}>
            <Slide direction="right" duration={"1000"} triggerOnce={true}>
              <>
                <div className="wrap-content">
                  <h1>AlMoataz Bellah Nayel Ahmed</h1>
                  <h5 className="position">
                    Front End & Cross Platform Mobile Development
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati laboriosam non debitis natus officiis rerum ea,
                    vero, sapiente at iusto odit autem est aut maiores velit a
                    accusantium modi ipsam?
                  </p>
                </div>
                <ul className="theme-list">
                  <li>
                    <b>From:</b> Assuit, Egypt
                  </li>
                  <li>
                    <b>Lives In:</b> Assuit, Egypt
                  </li>
                  <li>
                    <b>Age:</b> 25
                  </li>
                  <li>
                    <b>Gender:</b> Male
                  </li>
                </ul>
              </>
            </Slide>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
