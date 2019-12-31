import {createStore, compose, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootSaga from "../Saga";
import rooReducer from "../Reducers";

const composeEnhancers = process.env.NODE_ENV !== "production" &&
      typeof window === "object" && 
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            shouldHotReload:false
      }) : compose;
const sagaMiddleware = createSagaMiddleware();
const configStore = ()=>{
    const middlewares = [thunk,sagaMiddleware];
    const enhancers = [applyMiddleware(...middlewares)];
    const store = createStore(rooReducer, composeEnhancers(...enhancers));
    sagaMiddleware.run(rootSaga);
    return store;
};
   
export default configStore;