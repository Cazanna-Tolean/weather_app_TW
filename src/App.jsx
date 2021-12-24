import React, { Component } from "react";
import store from "./redux/store";
import { wInfoAPI, Region } from "./api/api";
import "./App.css";
import { ReactComponent as CloudyPic } from "./weatherPic/cloudy.svg";

export default class App extends Component {
  /* input region call api */
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
    this.refreshInfo();
  }

  retrieveRegion = () => {
    const { value } = this.selectedRegion;
    return value;
  };

  refreshInfo = async () => {
    const { value } = this.selectedRegion;
    const wResponseInfo = await wInfoAPI(value);
  };

  render() {
    const { temperature, humid, locationName, obsDate, obsHrMin } =
      store.getState();

    return (
      <div className="daybox">
        <label>
          <input id="switch_night" type="checkbox" />
          <div className="top">
            <CloudyPic className="weatherType" />
            <div>
              <svg className="temsvg">
                <circle cx="10" cy="60" r="3"></circle>
                <text x="10" y="60">
                  15°C
                </text>
                <circle cx="70" cy="60" r="3"></circle>
                <text x="70" y="60">
                  15°C
                </text>
                <circle cx="140" cy="40" r="3"></circle>
                <text x="140" y="40">
                  18°C
                </text>
                <circle cx="210" cy="30" r="3"></circle>
                <text x="210" y="30">
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

            {/* <object className="weatherType" type="image/svg+xml" data="./weatherPic/cloudy.svg"></object> */}

            <div className="text-area">
              <div className="temperature">{temperature}°C</div>
              <div className="address">地區:&nbsp;{locationName}</div>
              <div className="infos">
                <div className="humidity">濕度:&nbsp;{humid}</div>
                <div className="time">日期&emsp;{obsDate}</div>
                <div>觀測時間&emsp;{obsHrMin}</div>
              </div>
            </div>
          </div>
          <div className="choose-area">
            <text>選擇地區</text>
            <select ref={(cNode) => (this.selectedRegion = cNode)}>
              <optgroup label="北部"></optgroup>
              <option value={Region.TAIPEI}>{Region.TAIPEI}</option>
              <optgroup label="中部"></optgroup>
              <option value={Region.TAICHUNG}>{Region.TAICHUNG}</option>
              <optgroup label="南部"></optgroup>
              <option value={Region.KOAHSIUNG}>{Region.KOAHSIUNG}</option>
            </select>
            <button onClick={this.refreshInfo}>刷新</button>
          </div>
          <div className="bottom">
            <div className="dayweather">
              <h3>Mon</h3>
              <svg viewBox="-50 -50 100 100">
                <circle className="sun" cx="0" cy="0" r="20"></circle>
              </svg>
            </div>
            <div className="dayweather">
              <h3>Tue</h3>
              <svg viewBox="-50 -50 100 100">
                <circle className="sun" cx="0" cy="0" r="20"></circle>
              </svg>
            </div>
            <div className="dayweather">
              <h3>Wed</h3>
              <svg viewBox="-50 -50 100 100">
                <circle className="sun" cx="0" cy="0" r="20"></circle>
                <circle className="cloud" cx="0" cy="25" r="20"></circle>
                <circle className="cloud" cx="-15" cy="25" r="20"></circle>
                <circle className="cloud" cx="-30" cy="25" r="20"></circle>
                <circle className="cloud" cx="-25" cy="5" r="15"></circle>
                <circle className="cloud" cx="-7" cy="10" r="15"></circle>
              </svg>
            </div>
            <div className="dayweather">
              <h3>Thu</h3>
              <svg viewBox="-50 -50 100 100">
                <circle className="sun" cx="0" cy="0" r="20"></circle>
                <circle className="cloud" cx="0" cy="25" r="20"></circle>
                <circle className="cloud" cx="-15" cy="25" r="20"></circle>
                <circle className="cloud" cx="-30" cy="25" r="20"></circle>
                <circle className="cloud" cx="-25" cy="5" r="15"></circle>
                <circle className="cloud" cx="-7" cy="10" r="15"></circle>
              </svg>
            </div>
            <div className="dayweather">
              <h3>Fri</h3>
              <svg viewBox="-63 -30 100 100">
                <line className="rain" x1="-25" y1="15" x2="-25" y2="35"></line>
                <line className="rain" x1="-14" y1="5" x2="-14" y2="25"></line>
                <line className="rain" x1="-5" y1="20" x2="-5" y2="45"></line>
                <circle className="cloud" cx="0" cy="30" r="20"></circle>
                <circle className="cloud" cx="-15" cy="30" r="20"></circle>
                <circle className="cloud" cx="-30" cy="30" r="20"></circle>
                <circle className="cloud" cx="-25" cy="10" r="15"></circle>
                <circle className="cloud" cx="-7" cy="15" r="15"></circle>
              </svg>
            </div>
            <div className="dayweather">
              <h3>Sat</h3>
              <svg viewBox="-63 -30 100 100">
                <line className="rain" x1="-25" y1="15" x2="-25" y2="35"></line>
                <line className="rain" x1="-14" y1="5" x2="-14" y2="25"></line>
                <line className="rain" x1="-5" y1="20" x2="-5" y2="45"></line>
                <circle className="cloud" cx="0" cy="30" r="20"></circle>
                <circle className="cloud" cx="-15" cy="30" r="20"></circle>
                <circle className="cloud" cx="-30" cy="30" r="20"></circle>
                <circle className="cloud" cx="-25" cy="10" r="15"></circle>
                <circle className="cloud" cx="-7" cy="15" r="15"></circle>
              </svg>
            </div>
            <div className="dayweather">
              <h3>Sun</h3>
              <svg viewBox="-63 -30 100 100">
                <line className="rain" x1="-25" y1="15" x2="-25" y2="35"></line>
                <line className="rain" x1="-14" y1="5" x2="-14" y2="25"></line>
                <line className="rain" x1="-5" y1="20" x2="-5" y2="45"></line>
                <circle className="cloud" cx="0" cy="30" r="20"></circle>
                <circle className="cloud" cx="-15" cy="30" r="20"></circle>
                <circle className="cloud" cx="-30" cy="30" r="20"></circle>
                <circle className="cloud" cx="-25" cy="10" r="15"></circle>
                <circle className="cloud" cx="-7" cy="15" r="15"></circle>
              </svg>
            </div>
          </div>
        </label>
      </div>
    );
  }
}
