import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import reducer from "../reducers/reducers";

const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(reducer, middleware);

export default store;
