import React from "react";
import background from "../images/home.jpg";
import { NavLink } from "react-router-dom";
import { rotateIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

const Home = () => {
  const homeStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: "0.9"
  };

  const styles = {
    rotateIn: {
      animation: "x 2s",
      animationName: Radium.keyframes(rotateIn, "rotateIn")
    }
  };

  return (
    <StyleRoot>
      <div className="test" style={styles.rotateIn}>
        <div style={homeStyle}>
          <div className="text-center">
            <h1 className="text-white greeting">Hi! Nice to meet you</h1>

            <h2 className="text-white name">I'm Orpcy.</h2>
            <p className="text-white job">Web Developer | Web Designer</p>
            <NavLink
              className="btn-floating btn-large pulse #ff8a65 deep-orange lighten-2 text-white more"
              to="/about"
            >
              more
            </NavLink>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
};

export default Home;
