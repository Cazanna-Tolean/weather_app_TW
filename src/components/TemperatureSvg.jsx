import React, { Component } from "react";

export default class TemperatureSvg extends Component {
  render() {
    return (
      <div>
        <svg className="temsvg">
          <circle cx="10" cy="60" r="3"></circle>
          <text x="10" y="30">
            15°C
          </text>
          <circle cx="70" cy="60" r="3"></circle>
          <text x="70" y="30">
            15°C
          </text>
          <circle cx="140" cy="40" r="3"></circle>
          <text x="140" y="10">
            18°C
          </text>
          <circle cx="210" cy="30" r="3"></circle>
          <text x="210" y="10">
            20°C
          </text>
          <circle cx="280" cy="10" r="3"></circle>
          <text x="280" y="10">
            22°C
          </text>
          <circle cx="350" cy="30" r="3"></circle>
          <text x="350" y="30">
            21°C
          </text>
          <circle cx="420" cy="30" r="3"></circle>
          <text x="420" y="30">
            21°C
          </text>
          <polyline points="0 60 70 60 140 40 210 30 280 10 350 30 420 30"></polyline>
        </svg>
      </div>
    );
  }
}
