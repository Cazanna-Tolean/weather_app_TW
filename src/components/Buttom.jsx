import React, { Component } from "react";
import store from "../redux/store";
import { handleDayIcon } from "../util/getWeatherIcon";
import "./Button.css";

export default class Buttom extends Component {
  handleWeekData = () => {
    let allwInfo = store.getState();
    let wInfoWeek = allwInfo.wInfoWeekResult;
    // console.log(wInfoWeek);
    let wInfoWeekArr = [];
    for (let i = 0; i < 7; i++) {
      wInfoWeekArr[i] = {
        date: wInfoWeek.dateWeekArr[i],
        wType: wInfoWeek.wTypeWeekArr[i],
        highestTemp: wInfoWeek.highestTempWeekArr[i],
        loweshestTemp: wInfoWeek.lowestTempWeekArr[i],
      };
    }
    return wInfoWeekArr;
  };

  handleWTypeSvg = (wType) => {
    if (wType === "晴") {
      return (
        <svg viewBox="-50 -50 100 100">
          <circle className="sun" cx="0" cy="0" r="20"></circle>
        </svg>
      );
    } else if (wType === "雲" || wType === "多雲" || wType === "陰") {
      return (
        <svg
          style={{ width: "40px", height: "40px" }}
          viewBox="-50 -50 100 100"
        >
          <circle className="sun" cx="0" cy="0" r="20"></circle>
          <circle className="cloud" cx="0" cy="25" r="20"></circle>
          <circle className="cloud" cx="-15" cy="25" r="20"></circle>
          <circle className="cloud" cx="-30" cy="25" r="20"></circle>
          <circle className="cloud" cx="-25" cy="5" r="15"></circle>
          <circle className="cloud" cx="-7" cy="10" r="15"></circle>
        </svg>
      );
    } else if (wType === "雨" || wType === "大雨") {
      return (
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
      );
    } else {
      return (
        <svg viewbox="-50 -50 100 100">
          <circle className="sun" cx="0" cy="0" r="20"></circle>
          <circle className="cloud" cx="0" cy="25" r="20"></circle>
          <circle className="cloud" cx="-15" cy="25" r="20"></circle>
          <circle className="cloud" cx="-30" cy="25" r="20"></circle>
          <circle className="cloud" cx="-25" cy="5" r="15"></circle>
          <circle className="cloud" cx="-7" cy="10" r="15"></circle>
        </svg>
      );
    }
  };

  render() {
    let wInfoWeekArr = this.handleWeekData();
    // console.log(wInfoWeek.dateWeekArr[0]);
    return (
      <div className="bottom">
        {wInfoWeekArr.map((items,keys) => (
          <div className="dayweather" key={keys}>
            <h3>{items.date}</h3>                        
            <h3>{items.highestTemp}°C</h3>
            <h3 className="loweshestTemp">{items.loweshestTemp}°C</h3>
            {this.handleWTypeSvg(handleDayIcon(items.wType))}            
            <h4>{items.wType}</h4>
          </div>
        ))}
      </div>
    );
  }
}
