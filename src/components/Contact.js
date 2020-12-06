import React, { Component } from "react";
import github from "../resources/githublogo.png";
import twitter from "../resources/twitterlogo.png";
import linkedin from "../resources/linkedinlogo.png";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Connect with Adrienne:</h2>
        <div class="contact_parts">
          <a
            href="https://www.linkedin.com/in/asmith-webdev/"
            alt="Linked In Icon Link to Adrienne's profile."
          >
            <img className="social_logo" src={linkedin} />
          </a>
          <a
            href="https://github.com/aes89"
            alt="GitHub Icon Link to Adrienne's profile."
          >
            <img className="social_logo" src={github} />
          </a>
          <a
            href="https://twitter.com/Adrienne_es"
            alt="Twitter Icon Link to Adrienne's profile."
          >
            <img className="social_logo" src={twitter} />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
