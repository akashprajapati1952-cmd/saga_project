import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import { showReducer } from "./Reducers/show";
import { rootSaga } from "./sagas/shows";


const rootReducer=combineReducers({
    shows: showReducer
})
const sagaMiddleware= createSagaMiddleware()

export const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

export type State= ReturnType<typeof rootReducer>

sagaMiddleware.run(rootSaga)