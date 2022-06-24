import { combineReducers, createStore } from "redux";
import { baiTapGameXucXacReducer } from "./baiTapGameXucXacReducer";

const rootReducer = combineReducers({
  //Nơi chứa các state của ứng dụng
  baiTapGameXucXacReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
