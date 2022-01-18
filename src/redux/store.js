import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import wInfoDayReducer from "./reducers/wInfoDay";
import wInfoWeekReducer from "./reducers/wInfoWeek";

const allReducers = combineReducers({
  wInfoResult: wInfoDayReducer,
  wInfoWeekResult: wInfoWeekReducer,
});

export default createStore(allReducers,applyMiddleware(thunk));
// export default createStore(allReducers);
