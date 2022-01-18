import axios from "axios";
import store from "../redux/store";
import { wInfoDayAction } from "../redux/actions/wInfoDay";
import { wInfoWeekAction } from "../redux/actions/wInfoWeek";

export const Region = {
  TAIPEI: "臺北",
  TAICHUNG: "臺中",
  KOAHSIUNG: "高雄",
};
/* 適用一週天氣預報 */
const regionCode = {
  臺北: "F-D0047-063",
  臺中: "F-D0047-075",
  高雄: "F-D0047-067",
};

export const wInfoDayAPI = (regionName) => {
  const endpoint = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-507B37E0-0383-4D8C-878D-628B54EC3536&locationName=${regionName}`;

  axios
    .get(endpoint)
    .then((res) => {
      const weatherElements = res.data.records.location[0].weatherElement;

      const temperature = weatherElements.find((item) => {
        return item.elementName === "TEMP";
      });
      const humid = weatherElements.find((item) => {
        return item.elementName === "HUMD";
      });
      const weatherType = weatherElements.find((item) => {
        return item.elementName === "Weather";
      });

      const parameters = res.data.records.location[0].parameter;

      const locationName = parameters.find((item) => {
        return item.parameterName === "CITY";
      });

      const obsTime = res.data.records.location[0].time.obsTime;
      const obsDate = obsTime.split(" ")[0];
      const obsHrMin = obsTime.split(" ")[1];

      store.dispatch(
        wInfoDayAction({
          temperature: parseInt(temperature.elementValue),
          humid: humid.elementValue,
          weatherType: weatherType.elementValue,
          locationName: locationName.parameterValue,
          obsDate,
          obsHrMin,
        })
      );

      // console.log(regionCode[regionName]);
      wInfoWeekAPI(regionCode[regionName]);
    })
    .catch((err) => console.log("獲取當日天氣錯誤，其原因為", err));
};

function wInfoWeekAPI(regionCodeValue) {
  const endpoint = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/${regionCodeValue}?Authorization=CWB-507B37E0-0383-4D8C-878D-628B54EC3536&format=JSON&elementName=WeatherDescription&sort=time`;
  axios
    .get(endpoint)
    .then((res) => {
      // console.log(res.data.records.locations[0].location[0]);
      let weatherElement =
        res.data.records.locations[0].location[0].weatherElement[0];
      // dateWeek:紀錄一週日期的陣列
      let dateWeekArr = new Array(7).fill(null);
      let wTypeWeekArr = new Array(7).fill(null);
      let lowestTempWeekArr = new Array(7).fill(null);
      let highestTempWeekArr = new Array(7).fill(null);

      // console.log(weatherElement.time[0].elementValue[0].value);

      let j = 0;
      let inThreeDays = 0; //判別是否超出3天
      for (let i = 1; i <= 13; i += 2) {
        dateWeekArr[j] = weatherElement.time[i].startTime;
        wTypeWeekArr[j] =
          weatherElement.time[i].elementValue[0].value.split("。")[0];
        if (i >= 7) {
          inThreeDays = -1;//如果超過3天，會少掉降雨機率的欄位
        } else {
          inThreeDays = 0;
        }
        lowestTempWeekArr[j] =
          weatherElement.time[i].elementValue[0].value.split("。")[2 + inThreeDays];
        // console.log(lowestTempWeekArr[i]);
        highestTempWeekArr[j] =
          weatherElement.time[i].elementValue[0].value.split("。")[2 + inThreeDays];
        j++;
      }
      // console.log(dateWeekArr,wTypeWeekArr);
      //取出element
      // console.log(weatherElement.time[1].elementValue[0].value.split[2]);
      //dispatch
      let dataObj = {
        dateWeekArr,
        wTypeWeekArr,
        lowestTempWeekArr,
        highestTempWeekArr,
      };
      console.log(dataObj);
      store.dispatch(wInfoWeekAction(dataObj));

      let result = store.getState();
      console.log(result);
    })
    .catch((err) => {
      console.log("獲取一週天氣錯誤，其原因為", err);
    });
}
