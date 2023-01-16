import React from "react";
import barGraph from "../assets/images/bar-graph.svg";
import waveGraph from "../assets/images/wave-graph.svg";
import pieGraph from "../assets/images/pie-graph.svg";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      {" "}
      <main>
        <aside>
          <div class="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </aside>
        <div class="container">
          <div class="nav">
            <div class="sign-in">
              <Link to="/sign-in">
                <a href="#">Sign In</a>
              </Link>
            </div>
            <div class="sign-up">
              <Link to="/sign-up">
                <a href="#">Sign Up</a>
              </Link>
            </div>
          </div>
          <div class="welcome">
            <div class="welcome-text">
              <h1>Welcome</h1>
              <h3>
                Sign up and Manage <br />
                Your Budget
              </h3>
              <p>
                Note down your expenditure and income, <br />
                then check your balance everyday
              </p>
              <div class="bar-graph">
                <img src={barGraph} alt="bar-grpah" />
              </div>
            </div>
            <div class="profile-summary">
              <div class="wave-image">
                <img src={waveGraph} alt="wave-graph" />
              </div>
              <div class="pie-image">
                <img src={pieGraph} alt="pie-graph" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
