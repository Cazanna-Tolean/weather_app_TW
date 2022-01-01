import { REFRESH } from "./constant";

const initState = {
  temperature: NaN,
  humid: "",
  weatherType: "",
  locationName: "",
  obsDate: "",
  obsHrMin: "",
};
export default function wInfoReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case REFRESH:
      let {
        temperature,
        humid,
        weatherType,
        locationName,
        obsDate,
        obsHrMin,
      } = data;
      console.log(weatherType);
      switch (weatherType) {
        case "晴":
          weatherType = "sunny";
          break;
        case "風":
          weatherType = "airflow_wind";
          break;
        case "多雲":
          weatherType = "cloudy";
          break;
        case "雨":
          weatherType = "raining";
          break;
        default:
          weatherType = "warning_error";
      }

      return {
        ...preState,
        temperature,
        humid,
        weatherType,
        locationName,
        obsDate,
        obsHrMin,
      };
    default:
      return preState;
  }
}
