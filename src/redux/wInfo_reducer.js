const initState = {
  temperature: NaN,
  humid: "",
  locationName: "",
  obsDate: "",
  obsHrMin: "",
};
export default function wInfoReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case "refresh":
      const { temperature, humid, locationName,obsDate, obsHrMin } = data;
      return { ...preState, temperature, humid, locationName ,obsDate,obsHrMin};
    default:
      return preState;
  }
}
