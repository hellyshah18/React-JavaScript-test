import { applyMiddleware, createStore } from "redux";
import counterReducer from "../reducer/counterReducer";
import rootReducer from "../reducer";
import { thunk } from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;