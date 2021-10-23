import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer/index";
import thunk from "redux-thunk";

export const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk)
    ));


