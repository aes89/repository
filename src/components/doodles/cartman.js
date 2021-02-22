import React, { Component } from "react";
import "./cartman.css";

class Cartman extends Component {
  render() {
    return (
      <div class="cartmanBox">
        <div class="cartmanHead">
          <div class="cartmanHat"></div>
          <div class="cartmanEyeLeft">
            <div class="cartmanPupilLeft"></div>
          </div>
          <div class="cartmanEyeRight">
            <div class="cartmanPupilRight"></div>
          </div>
          <div class="cartmanChin"></div>
          <div class="cartmanChin2"></div>
          <div class="cartmanMouth"></div>
          <div class="cartmanMouthOutline">
            <div class="cartmanTooth1"></div>
            <div class="cartmanTooth2"></div>
            <div class="cartmanTooth3"></div>
            <div class="cartmanTooth4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cartman;
