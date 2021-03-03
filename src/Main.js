import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Doodles from "./components/doodles/Doodles";

import Adrienne from "./resources/Adrienne.jpeg";
import logo from "./resources/logotransp.png";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="flexContainer">
          <div className="col1">
            <div className="image">
              <img
                className="Adrienne"
                alt="Adrienne is smiling in front of a monitor, her girthy ginger cat and a snake plant. She is looking exceptionally hirable."
                src={Adrienne}
              />
            </div>
            <h1 class="name">Adrienne Smith</h1>
            <img
              className="logoLargeScreen"
              alt="Adrienne's logo. A drawn wreath circles Adrienne's initials (AES) and a simple icon of a webpage underneath the initials."
              src={logo}
            />
          </div>
          <div className="col2">
            <ul className="header">
              <li class="navCol1">
                <h2>
                  <NavLink to="/">Home</NavLink>
                </h2>
              </li>
              <li class="navCol1">
                <h2>
                  <NavLink to="/Projects">Projects</NavLink>
                </h2>
              </li>

              <li class="navCol2">
                <h2>
                  <NavLink to="/contact">Contact</NavLink>
                </h2>
              </li>
              <li class="navCol2">
                <h2>
                  <NavLink to="/doodles">Doodles</NavLink>
                </h2>
              </li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="/doodles" component={Doodles} />
            </div>
          </div>
          <img
            className="logoSmallScreen"
            alt="Adrienne's logo. A drawn wreath circles Adrienne's initials (AES) and a simple icon of a webpage underneath the initials."
            src={logo}
          />
        </div>
      </HashRouter>
    );
  }
}

export default Main;
