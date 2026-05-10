
import { searchShows, searchShowWithId } from "../apis";
import {call, debounce, put, takeEvery} from 'redux-saga/effects'
import { setShowsAction,setShowDetailAction, loadShowsAction, loadShowDetailAction } from "../Reducers/show";

export function* rootSaga(){
    yield debounce(300, loadShowsAction, fetchShows)
    yield takeEvery(loadShowDetailAction, fetchShowDetails)
}

function* fetchShows(action: any): Generator{
    
    const shows=yield call(searchShows, action.payload)
    yield put(setShowsAction(shows))
}

function* fetchShowDetails(action: any): Generator{
    const showDetails=yield call(searchShowWithId, action.payload)
    yield put(setShowDetailAction(showDetails))
}