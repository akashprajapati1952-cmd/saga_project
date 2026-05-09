import axios from "axios";
import { Show, Cast } from "./models";

export async function searchShows(query: string): Promise<any> {
    const res= await axios.get("https://api.tvmaze.com/search/shows?q=" + query)
    const shows: Show[] = res.data.map((show: {score: number, show: Show })=>{
        return show.show
    })
    const ids=res.data.map((show: {score: number, show: Show })=>show.show.id)
    const queryShows={[query]: ids}
    return {shows, queryShows}
}

export async function searchShowWithId(showId: number){
    const res = await axios.get("https://api.tvmaze.com/shows/"+showId)
    
    return (res.data as Show)
}
export async function searchShowCast(showId: number){
    const res = await axios.get("https://api.tvmaze.com/shows/"+showId+"/cast")
    const data: Cast[]=res.data.map((cast: any)=>{
        const person=cast.person
        
        return {
            id: person.id,
            name: person.name,
            image: person.image
        } as Cast
    })
    return(data )
}
