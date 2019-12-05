// import libraries
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
// import state from reducer composition
import rootReducer from "./root-reducer";
// include array of middleware
const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
// create store function
const store = createStore(rootReducer, applyMiddleware(...middlewares));
// add redux persistance tool to save user session objects
const persistor = persistStore(store);
// export store object
export { store, persistor };
