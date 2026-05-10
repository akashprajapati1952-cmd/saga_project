import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import showReducer  from "./Reducers/show";
import { rootSaga } from "./sagas/shows";
import { configureStore } from "@reduxjs/toolkit";


const rootReducer=combineReducers({
    shows: showReducer
})
const sagaMiddleware= createSagaMiddleware()
export const store=configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
    devTools: true
})



export type State= ReturnType<typeof rootReducer>

sagaMiddleware.run(rootSaga)