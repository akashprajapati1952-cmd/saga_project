import { ActionCreator, EmptyActionCreator, Show } from "../models";

export const SAVE_SHOWS="SAVE_SHOWS"
export const LOAD_SHOWS="LOAD_SHOWS"
export const LOAD_SHOW="LOAD_SHOW"
export const SAVE_SHOW='SAVE_SHOW'
export const CHANGE_QUERY  ='CHANGE_QUERY'

export const loadShows:ActionCreator<string> = (query)=>{
    
    
    return {
        type:LOAD_SHOWS,
        payload: query
    }
}

export const loadShowDetail:ActionCreator<number> = (showId) => {
    return {
        type:LOAD_SHOW,
        payload: showId
    }
}

export const setShows:ActionCreator<any>= (shows) => {
  
  return {
    type:SAVE_SHOWS,
    payload: shows
  }
}

export const setshowDetail: ActionCreator<Show>= (show)=>{
    return {
        type:SAVE_SHOW,
        payload: show
    }
}

export const setQuery: ActionCreator<string>=(query)=>{
    return {
        type:CHANGE_QUERY  ,
        payload: query
    }
}
