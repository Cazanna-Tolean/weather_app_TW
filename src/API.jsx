import axios from "axios";
import store from "./redux/store";

export const Region = {
  TAIPEI: "臺北",
  TAICHUNG: "臺中",
  KOAHSIUNG: "高雄",
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

      const parameters = res.data.records.location[0].parameter;
      
      const locationName=parameters.find((item)=>{
        return item.parameterName === "CITY";
      })

      const obsTime=res.data.records.location[0].time.obsTime;
      const obsDate=obsTime.split(" ")[0];
      const obsHrMin=obsTime.split(" ")[1];
      
      store.dispatch({
        type: "refresh",
        data: {
          temperature: parseInt(temperature.elementValue),
          humid: humid.elementValue,
          locationName: locationName.parameterValue,
          obsDate,
          obsHrMin,
        },
      });
    })
    .catch((err) => console.log("發生錯誤，其原因為", err));
};
