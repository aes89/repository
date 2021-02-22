import React, { Component } from "react";
import "./koalascared.css";

class KoalaScared extends Component {
  render() {
    return (
      <div class="box">
        <div class="head">
          <div class="head-copy"></div>

          <div class="ear-left">
            <div class="inner-ear"></div>
          </div>

          <div class="ear-right">
            <div class="inner-ear"></div>
          </div>

          <div class="eye-left">
            <div class="pupil"></div>
          </div>

          <div class="eye-right">
            <div class="pupil"></div>
          </div>

          <div class="nose">
            <div class="nostril-left"></div>
            <div class="nostril-right"></div>
          </div>

          <div class="mouth">
            <div class="throat"></div>
            <div class="tongue"></div>
          </div>

          <div class="hair-left"></div>
          <div class="hair-left2"></div>
          <div class="hair-left3"></div>
          <div class="hair-right"></div>
          <div class="hair-right2"></div>
        </div>
      </div>
    );
  }
}

export default KoalaScared;
