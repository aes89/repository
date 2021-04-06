import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Projects extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Projects!</title>
          <meta property="og:title" content="Adrienne Smith - Projects" />
          <meta
            property="og:description"
            content="Check out Adrienne's past projects! She completed assignments using Ruby, Ruby on Rails, React and MERN stack."
          />
          <meta
            property="og:url"
            content="https://adriennesmith-portfolio.netlify.app/#/Projects"
            data-react-helmet="true"
          />
          <meta property="og:site_name" content="Adrienne Smith - Projects" />
        </Helmet>
        <h2>Projects:</h2>
        <ul>
          <li>
            <a href="https://fridgemate.netlify.app/ ">FridgeMate</a>: Final
            MERN stack project, completed with one other student.
          </li>
          <li>
            <a href="https://blog-hackathon.herokuapp.com/">Blog</a>: hackathon
            project with one other student, using react.
          </li>
          <li>
            <a href="https://bulb-hackathon.netlify.app/">Bulb</a>: hackathon
            project with one other student, using plain JavaScript.
          </li>
          <li>
            <a href="https://damp-anchorage-55875.herokuapp.com/">Plantr.</a>:
            marketplace app built Ruby on Rails, styling was not required.
          </li>
          <li>
            <a href="https://aes89.github.io/">Portfolio</a>: portfolio built
            using only HTML and CSS.
          </li>
        </ul>
      </div>
    );
  }
}

export default Projects;
