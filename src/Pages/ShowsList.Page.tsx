import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { searchShows, searchShowWithId } from "../apis";

function ShowListPage() {
  const [shows, setShows]= useState<Show[]>([])
  const [query, setQuery]= useState('')

  useEffect(()=>{
    searchShows(query).then((data)=>{
      setShows(data)
    })
  },[query])
  return (
    <div className="mt-2">
      <SearchBar query={query} handleChange={(e) => setQuery(e.target.value)} />
      <div className="flex flex-wrap justify-center">
        {shows.map((show)=><ShowCard key={show.id} show={show}/>)}
        
        
        
      
      </div>
    </div>
  );
}

export default ShowListPage;
