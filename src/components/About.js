import React from "react";
import me from "../images/me.jpg";
import about from "../images/about4.jpg";
import Navbar from "./Navbar";
import FormInput from "./Form";
import Footer from "./Footer";
import { lightSpeedIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

const About = () => {
  const myStyle = {
    backgroundImage: `url(${about})`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    overflow: "scroll"
  };

  const styles = {
    lightSpeedIn: {
      animation: "x 2s",
      animationName: Radium.keyframes(lightSpeedIn, "lightSpeedIn")
    }
  };

  return (
    <StyleRoot>
      <div className="test" style={styles.lightSpeedIn}>
        <div className="about" style={myStyle}>
          <Navbar />
          <div className="LRWrapper" id="about">
            <div className="left">
              <div className="picture z-depth-5">
                <img src={me} alt="display" />
              </div>
            </div>
            <div className="right text-center">
              <div className="bg-dark text-white w-100 pt-3 pb-3 z-depth-5">
                <h2>Who's this guy?</h2>
                <p className="ml-4 mr-4">
                  I'm Olamilekan Jamiu. I'm a passionate full-stack developer.
                  I'm proficient in developing back-end apps and also have
                  proficiency in building/designing fully responsive and highly
                  mobile friendly website. In balancing demanding requirements
                  as a web developer, I take steps to fully understand what is
                  expected of me, prioritize my tasks and keep an open line of
                  communication with the clients.
                </p>
                <a
                  class="btn waves-effect pulse waves-light pt-1 text-white"
                  href="#navSection"
                >
                  Contact <i className="fas fa-arrow-circle-down" />
                </a>
              </div>
            </div>
          </div>
          <div className="navSection" id="navSection">
            <div className="contact">
              <h1 className="text-white text-center mb-4">Contact</h1>
              <p className="text-center font-weight-bold">
                Have a Project to work on or have a question?
              </p>
              <FormInput />
            </div>
            <p className="text-center mb-0">
              <a
                class="btn-floating btn-large waves-effect pulse waves-light teal z-depth-5"
                href="#about"
              >
                <i class="fas fa-angle-double-up" />
              </a>
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </StyleRoot>
  );
};

export default About;
