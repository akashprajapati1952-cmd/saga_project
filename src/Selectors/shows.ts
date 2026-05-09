import { createSelector } from "reselect"
import { State } from "../store"

 

const showsMapSelector=(state: State)=>{
    return state.shows.shows
}
const queryShowsSelector=(state: State)=>{
    return state.shows.queryShows
}
export const querySelector=(state: State)=>{
    return state.shows.query
}

export const showsListSelector=createSelector(
    showsMapSelector,queryShowsSelector,querySelector,
    (showsMap,queryShows,query)=>{
        const queryShow= queryShows[query]
        const allShows=Object.values(showsMap)
        if(queryShow){
            return Object.values(queryShow.map((showId)=>showsMap[showId]))
        }
        return []

    }
)

export const loadingSelector=(state: State)=>{
    return state.shows.loading
}

export const showDetailSelector=createSelector(
    showsMapSelector,
    (showsMap, showId)=>{
        return showsMap[showId]
    }
)

