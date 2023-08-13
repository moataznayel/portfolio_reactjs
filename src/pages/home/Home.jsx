import React from "react";
import Naav from "../../components/naav/Naav";
import "./home.css";
import { Fade, Slide } from "react-awesome-reveal";
const Home = () => {
  return (
    <div className="vg-page page-home" id="home">
      <Naav />
      <div className="caption-header text-center ">
        <Slide direction="down" triggerOnce={true}>
          <>
            <h5 className="fw-bolder">Welcome</h5>

            <h1 className="fw-100 text-light mb-3">
              I'm AlMoataz Bellah Nayel
            </h1>

            <h5 className="position  fw-bolder">
              Front End & Cross Platform Mobile Development
            </h5>
          </>
        </Slide>
      </div>
    </div>
  );
};

export default Home;
