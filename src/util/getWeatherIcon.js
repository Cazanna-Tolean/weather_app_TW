const wTwEnComparison = new Map([
  ["雪", "16"],
  ["雷", "15"],
  ["電", "15"],
  ["大雨", "18"],
  ["雨", "12"],
  ["多雲", "8"],
  ["雲", "7"],
  ["晴", "1"],
  ["陰","3"]
]);

const wTypeListArr = ["雪", "雷", "電", "大雨", "雨", "多雲", "雲", "晴","陰"];

const iconUrl = "https://www.accuweather.com/images/weathericons/";

export function handleDayIcon(wTypeDay) {
  let findIcon = false;
  if(wTypeDay===undefined) wTypeDay="雲";
  for (let i = 0; i < wTypeListArr.length; i++) {
    if (wTypeDay.includes(wTypeListArr[i])) {
      findIcon = true;
      return wTypeListArr[i];
    }
  }
  if (!findIcon) {
    return "無法對應天氣類型";
  }
}

export const getDayWIcon = (wTypeDay) => {
  let wTypeDayResult = handleDayIcon(wTypeDay);

  if (!wTwEnComparison.has(wTypeDayResult)) {
    //若天氣類型無法辦別
    return "無法獲取天氣類型圖片";
  }
  return `${iconUrl}${wTwEnComparison.get(wTypeDayResult)}.svg`;
};
