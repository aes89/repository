import React, { Component } from "react";
import { Twitter } from "react-social-sharing";

class Home extends Component {
  render() {
    return (
      <div>
        <h2 class="homeSummary">Summary</h2>
        <br />
        <p class="homeSummary">
          Adrienne has a previous career in Speech Pathology in early
          intervention and disability services. She has found the shift from
          play-based therapy to the precision, logic-focused world of
          programming a welcome challenge. Her projects have included HTML, CSS,
          Ruby, Ruby on Rails, Javascript, Express and React. Adrienne adores
          the outdoors, her pets and plants and looks forward to telling you the
          latest way she has disappointed her bonsais.
        </p>
        <br />
        <p class="homeSummary">
          Adrienne is open to hearing about employment opportunities!
        </p>
        <p class="homeSummary">
          <Twitter
            link="http://adriennesmith-portfolio.netlify.app/"
            // label={(serviceName) => localise("share_label", { serviceName })}
          />
        </p>
      </div>
    );
  }
}

export default Home;
