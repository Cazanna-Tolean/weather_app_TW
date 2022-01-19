import React, { Component } from "react";
import store from "./redux/store";
import Buttom from "./components/Buttom";
import { wInfoDayAPI, Region } from "./api/api";
import { getDayWIcon } from "./util/getWeatherIcon";
import "./App.css";

export default class App extends Component {
  state = {
    debounceTimer: null,
  };

  componentDidMount() {
    this.refreshInfo();
    const testInfo = store.getState();
    console.log(testInfo);
  }

  /* get selected value then call api*/
  refreshInfo = async () => {
    const { value } = this.selectedRegion;
    const wResponseInfo = await wInfoDayAPI(value);
    console.log(wResponseInfo);
  };

  // 預防頻繁call api
  debounceHandler = (cb, timing) => {
    let debounceTimer = this.state.debounceTimer;
    return () => {
      if (debounceTimer !== null) {
        clearTimeout(debounceTimer);
      }
      debounceTimer = setTimeout(() => {
        cb();
        debounceTimer = null;
      }, timing);
    };
  };

  render() {
    const allInfo = store.getState();
    let wInfo = allInfo.wInfoResult;

    return (
      <div className="daybox">
        <label>
          <div className="top">
            <img
              className="weatherType"
              src={getDayWIcon(wInfo.weatherType)}
              alt={wInfo.weatherType}
            />

            <div className="text-area">
              <div className="temperature">{wInfo.temperature}°C</div>
              <div className="address">地區:&nbsp;{wInfo.locationName}</div>
              <div className="infos">
                <div className="humidity">濕度:&nbsp;{wInfo.humid}%</div>
                <div className="time">日期&emsp;{wInfo.obsDate}</div>
                <div>觀測時間&emsp;{wInfo.obsHrMin}</div>
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
              <option value={Region.CHIAYI}>{Region.CHIAYI}</option>
            </select>
            <button onClick={this.debounceHandler(this.refreshInfo, 1000)}>
              刷新
            </button>
          </div>

          <Buttom />
        </label>
      </div>
    );
  }
}
