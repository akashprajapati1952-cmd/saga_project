
import { Cast, Show } from "../models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface showState{
    shows: {[showId: number]: Show};
    query: string;
    queryShows: { [query: string]: number[] };
    loading: boolean;
    showLoading:{[showId: number]: boolean};
    casts: {[castId: number]: Cast}
    showCasts: {[showId: number]: number[]}
}

const initialState: showState={
    shows: {},
    query: '',
    queryShows: {},
    loading:true,
    showLoading:{},
    casts: {},
    showCasts: {}
}

const loadShows=(state: showState, action: PayloadAction<string>)=>{
    state.loading=true
}

const loadshowDetail=(state: showState, action: PayloadAction<number>)=>{
    const showId = action.payload!
    state.showLoading[showId]=true
}

const setShows=(state: showState, action: PayloadAction<any>)=>{
    const acc= action.payload! as any
    const shows= acc.shows as Show[]
    const queryShows= acc.queryShows
    state.queryShows={...state.queryShows, ...queryShows}
    state.loading=false
    shows.forEach((show)=>{
        state.shows[show.id]= show
    })
}

const setshowDetail=(state: showState, action: PayloadAction<any>)=>{
    const acc= action.payload! as { show: Show; cast: Cast[] }
    const show= acc.show as Show
    const cast= acc.cast as Cast[]
    state.shows[show.id]= show
    state.showLoading[show.id]=false
    state.casts={...state.casts, ...cast.reduce((acc, c) => ({ ...acc, [c.id]: c }), {})}
    state.showCasts[show.id]=cast.map(c => c.id)
            
}

const setQuery=(state: showState, action: PayloadAction<string>)=>{
    const query= action.payload! as string
    state.query=query
}

const showsSlice=createSlice({
    name: 'shows',
    initialState,
    reducers: {
        loadShows,
        loadshowDetail,
        setShows,
        setshowDetail,
        setQuery
    }
})
const {reducer: showReducer, actions} = showsSlice
export const {loadShows: loadShowsAction, loadshowDetail: loadShowDetailAction, setShows: setShowsAction, setshowDetail: setShowDetailAction, setQuery: setQueryAction}= actions
export default showReducer

{/*export const showReducer=(state:showState= initialState, action: Action)=>{
    switch(action.type){
        case LOAD_SHOWS:
            return produce(state,(draft)=>{
                draft.loading=true
            })
        case LOAD_SHOW:
            return produce(state,(draft)=>{
                const showId = action.payload!
                draft.showLoading[showId]=true
            })
        case SAVE_SHOWS:
            return produce(state,(draft)=>{
                const acc= action.payload! as any
                const shows= acc.shows as Show[]
                const queryShows= acc.queryShows
                draft.queryShows={...draft.queryShows, ...queryShows}
                draft.loading=false
                shows.forEach((show)=>{
                    draft.shows[show.id]= show
                })
            })
        case SAVE_SHOW:
            return produce(state,(draft)=>{
                const acc= action.payload! as { show: Show; cast: Cast[] }
                const show= acc.show as Show
                const cast= acc.cast as Cast[]
                draft.shows[show.id]= show
                draft.showLoading[show.id]=false
                draft.casts={...draft.casts, ...cast.reduce((acc, c) => ({ ...acc, [c.id]: c }), {})}
                draft.showCasts[show.id]=cast.map(c => c.id)
            })
        case CHANGE_QUERY:
            return produce(state,(draft)=>{
                const query= action.payload! as string
                draft.query=query
            })

        default:
            return state



    }
}*/}

