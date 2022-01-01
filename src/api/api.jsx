import axios from "axios";
import store from "../redux/store";
import { wInfoOneDayAction } from "../redux/wInfo_action";

export const Region = {
  TAIPEI: "臺北",
  TAICHUNG: "臺中",
  KOAHSIUNG: "高雄",
};

const regionCode = {
  臺北: "F-D0047-061",
  臺中: "F-D0047-073",
  高雄: "F-D0047-065",
};

export const wInfoAPI = (regionName) => {
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
        wInfoOneDayAction({
          temperature: parseInt(temperature.elementValue),
          humid: humid.elementValue,
          weatherType: weatherType.elementValue,
          locationName: locationName.parameterValue,
          obsDate,
          obsHrMin,
        })
      );

      // console.log(regionCode[regionName]);
      wInfoAPIOneWeek(regionCode[regionName]);
    })
    .catch((err) => console.log("發生錯誤，其原因為", err));
};

function wInfoAPIOneWeek(regionCodeValue) {
  const endpoint = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/${regionCodeValue}?Authorization=CWB-507B37E0-0383-4D8C-878D-628B54EC3536&format=JSON&elementName=MaxT&sort=time`;
  axios
    .get(endpoint)
    .then((res) => {
      console.log(res.data);

      //取出element

      //dispatch
    })
    .catch((err) => {
      console.log("錯誤", err);
    });
}
