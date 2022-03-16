import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import rootReducer from "./rootreducer";
import rootSaga from './usersagas'

const sagaMiddelware = createSagaMiddleware();

const middelwares = [sagaMiddelware, logger];

const store = createStore(rootReducer, applyMiddleware(...middelwares))

sagaMiddelware.run(rootSaga)

export default store