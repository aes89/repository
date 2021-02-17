import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Adrienne from "./resources/Adrienne.jpeg";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="flexContainer">
          <div className="col1">
            <div className="image">
              <img
                className="Adrienne"
                alt="Adrienne is smiling in front of a monitor, her girthy ginger cat and a snake plant, looking exceptionally hirable."
                src={Adrienne}
              />
            </div>
            <h1 class="name">Adrienne Smith</h1>
          </div>
          <div className="col2">
            <ul className="header">
              <li>
                <h2>
                  <NavLink to="/">Home</NavLink>
                </h2>
              </li>
              <li>
                <h2>
                  <NavLink to="/Projects">Projects</NavLink>
                </h2>
              </li>
              <li>
                <h2>
                  <NavLink to="/contact">Contact</NavLink>
                </h2>
              </li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
