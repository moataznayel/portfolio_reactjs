import React from "react";
import "./skills.css";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

const Skills = () => {
  return (
    <div className="page-skills  py-5">
      <Container>
        <h1 className="text-center title">My Skills</h1>
        <Row className="mt-5 justify-content-around">
          <Col md={5}>
            <Slide direction="left" triggerOnce={true}>
              <h5 className="ms-1 ">Html & css</h5>
              <ProgressBar now={95} label={`${95}%`} />
            </Slide>
            <Slide direction="left" delay={"10"} triggerOnce={true}>
              <h5 className="ms-1 mb-1">Bootstrap</h5>
              <ProgressBar now={90} label={`${90}%`} />
            </Slide>
            <Slide direction="left" delay={"20"} triggerOnce={true}>
              <h5 className="ms-1 ">JavaScript</h5>
              <ProgressBar now={85} label={`${85}%`} />
            </Slide>
            <Slide direction="left" delay={"30"} triggerOnce={true}>
              <h5 className="ms-1 mb-1">TypeScript</h5>
              <ProgressBar now={75} label={`${75}%`} />
            </Slide>
          </Col>
          <Col md={5}>
            <Slide direction="right" triggerOnce={true}>
              <h5 className="ms-1 ">ReactJs</h5>
              <ProgressBar now={90} label={`${90}%`} />
            </Slide>
            <Slide direction="right" delay={"10"} triggerOnce={true}>
              <h5 className="ms-1 mb-1">ReactNative</h5>
              <ProgressBar now={80} label={`${80}%`} />
            </Slide>
            <Slide direction="right" delay={"20"} triggerOnce={true}>
              <h5 className="ms-1 ">Redux</h5>
              <ProgressBar now={95} label={`${95}%`} />
            </Slide>
            <Slide direction="right" delay={"30"} triggerOnce={true}>
              <h5 className="ms-1 mb-1">Redux Toolkit</h5>
              <ProgressBar now={95} label={`${95}%`} />
            </Slide>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
