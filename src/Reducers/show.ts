import { produce } from "immer";
import { CHANGE_QUERY, LOAD_SHOW, LOAD_SHOWS, SAVE_SHOW, SAVE_SHOWS } from "../Actions/show";
import { Action, Show } from "../models";
import { State } from "../store";

interface showState{
    shows: {[showId: number]: Show};
    query: string;
    queryShows: { [query: string]: number[] };
    loading: boolean;
    showLoading:{[showId: number]: boolean}
}

const initialState: showState={
    shows: {},
    query: '',
    queryShows: {},
    loading:true,
    showLoading:{}
}
export const showReducer=(state:showState= initialState, action: Action)=>{
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
                const shows= action.payload?.shows as Show[]
                const queryShows= action.payload?.queryShows
                draft.queryShows={...draft.queryShows, ...queryShows}
                draft.loading=false
                shows.forEach((show)=>{
                    draft.shows[show.id]= show
                })
            })
        case SAVE_SHOW:
            return produce(state,(draft)=>{
                const show= action.payload! as Show
                draft.shows[show.id]= show
                draft.showLoading[show.id]=false
            })
        case CHANGE_QUERY:
            return produce(state,(draft)=>{
                const query= action.payload! as string
                draft.query=query
            })

        default:
            return state



    }
}