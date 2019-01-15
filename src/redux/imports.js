import undoable from "redux-undo";
import { all } from "redux-saga/effects";
//import reducers
import { default as HomeReducer } from "../modules/Home/reducers";
//import sagas
// import { default as HomeSaga } from "../modules/Home/sagas";

const allReducers = {
  Home: undoable(HomeReducer, {
    limit: 10
  })
};
const sagaFunctions = [];

function* rootSaga() {
  yield all([...sagaFunctions]);
}

export { allReducers, rootSaga };
