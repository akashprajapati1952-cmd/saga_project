import axios from "axios";

export async function searchShows(query: string): Promise<any> {
    const res= await axios.get("https://api.tvmaze.com/search/shows?q=" + query)
    const data: Show[] = res.data.map((show: {score: number, show: Show })=>{
        return show.show
    })
    return data
}

export async function searchShowWithId(showId: number){
    const res = await axios.get("https://api.tvmaze.com/shows/"+showId)
    return ({[showId]: res.data})
}