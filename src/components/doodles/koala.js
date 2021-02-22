import React, { Component } from "react";
import "./koala.css";

class Koala extends Component {
  render() {
    return (
      <div class="koalaBox">
        <div class="koalaHead">
          <div class="koalaHeadCopy"></div>

          <div class="koalaEarLeft">
            <div class="koalaInnerEar"></div>
          </div>

          <div class="koalaEarRight">
            <div class="koalaInnerEar"></div>
          </div>

          <div class="koalaEyeLeft">
            <div class="koalaPupil"></div>
          </div>

          <div class="koalaEyeRight">
            <div class="koalaPupil"></div>
          </div>

          <div class="koalaNose"></div>

          <div class="koalaHairLeft"></div>
          <div class="koalaHairRight"></div>
        </div>
      </div>
    );
  }
}

export default Koala;
