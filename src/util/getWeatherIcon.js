const wTwEnComparison = new Map([
  ["雪", "sn"],
  ["雷", "t"],
  ["電", "t"],
  ["大雨", "hr"],
  ["雨", "lr"],
  ["多雲", "hc"],
  ["雲", "lc"],
  ["晴", "c"],
  ["陰","hc"]
]);

const wTypeListArr = ["雪", "雷", "電", "大雨", "雨", "多雲", "雲", "晴","陰"];

const iconUrl = "https://www.metaweather.com/static/img/weather/";

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
