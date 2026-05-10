import { FC, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { connect, ConnectedProps} from "react-redux";
import { State } from "../store";
import { loadingSelector, querySelector, showsListSelector } from "../Selectors/shows";
import LoadingSpinner from "../Components/LoadingSpinner";
import { loadShowsAction, setQueryAction } from "../Reducers/show";

type  ownProps={}

type props= ownProps & reduxProps

const ShowListPage: FC<props> = ({ shows, loading, query, loadShows, handleQueryChange }) => {

  useEffect(()=>{
      
    if(query){loadShows(query)}
      

  },[query])
  return ( 
    <div className="mt-2">
      <SearchBar query={query} handleChange={(e) =>{handleQueryChange(e.target.value)}} />
      {loading && query? <LoadingSpinner/>: <div className="flex flex-wrap justify-center">
        {shows.map((show)=><ShowCard key={show.id} show={show}/>)}
      </div>}
    </div>
  );
}
const mapStateToProps=(state: State)=>({
  
    shows: showsListSelector(state),
    loading: loadingSelector(state),
    query: querySelector(state)
  
})

const mapDispatchToProps={
    handleQueryChange: setQueryAction,
    loadShows: loadShowsAction
}
const connectedComponent= connect(mapStateToProps, mapDispatchToProps)

type reduxProps= ConnectedProps<typeof connectedComponent>


export default connectedComponent(ShowListPage);
