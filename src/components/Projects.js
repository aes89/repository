import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div>
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
            <a href="https://bulb-hackathon.netlify.app/">Plantr.</a>:
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
