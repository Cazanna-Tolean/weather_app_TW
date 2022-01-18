import { REFRESH_WEEK } from "../constant";
const initState = {
  dateWeekArr: [],
  wTypeWeekArr: [],
  lowestTempWeekArr:[],
  highestTempWeekArr:[],
};
export default function wInfoWeekReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case REFRESH_WEEK:
      let { dateWeekArr, wTypeWeekArr,lowestTempWeekArr,highestTempWeekArr } = data;      

      for(let i=0;i<dateWeekArr.length;i++){        
        dateWeekArr[i]=dateWeekArr[i].split(" ")[0].split("-")[1]+"/"+dateWeekArr[i].split(" ")[0].split("-")[2];
        lowestTempWeekArr[i]=lowestTempWeekArr[i].split('至')[0].split('氏')[1];
        highestTempWeekArr[i]=highestTempWeekArr[i].split('至')[1].replace(/\度/,'');
      }
      return { ...preState, dateWeekArr, wTypeWeekArr,lowestTempWeekArr,highestTempWeekArr };
    default:
      return preState;
  }
}
