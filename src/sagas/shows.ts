import { Action } from "../models";
import { searchShows } from "../apis";
import {call, debounce, put} from 'redux-saga/effects'
import { LOAD_SHOWS, setShows } from "../Actions/show";

export function* rootSaga(){
    yield debounce(300, LOAD_SHOWS, fetchShows)
}

function* fetchShows(action: any): Generator{
    
    const shows=yield call(searchShows, action.payload)
    
    yield put(setShows(shows))
}