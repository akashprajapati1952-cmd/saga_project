import { FC, useEffect,useState } from "react";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { searchShowCast, searchShowWithId } from "../apis";
import LoadingSpinner from "../Components/LoadingSpinner";
import { Cast, Show } from "../models";
import { connect } from "react-redux";
import { State } from "../store";
import { loadShowDetail } from "../Actions/show";

type ShowDetailPageProps = WithRouterProps & {}
type Props= ShowDetailPageProps & redux_props
const ShowDetailPage: FC<Props> = ({ params  }) => {
  const [show, setShow]=useState<Show>()
  const [casts, setCasts]=useState<Cast[]>([])
  const defaultImg='https://img.magnific.com/free-vector/illustration-gallery-icon_53876-27002.jpg?semt=ais_hybrid&w=740&q=80'

  useEffect(()=>{
    searchShowWithId(+params.showId).then((data)=>{
      setShow(data)
    })
    searchShowCast(+params.showId).then((data)=>{
      setCasts(data)
    })
  },[params.showId])
  if(!show){
    return <LoadingSpinner/>
  }
  return (
    <div className="mt-2">
      <h2 className="text-4xl font-semibold tracking-wide">{show.name}</h2>
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
        {show.genres.map((item)=><GenrePill key={item} name={item} />)}
        
      </div>
      <div className="mt-2 flex">
        <img
          src={show.image?.medium || show.image?.original || defaultImg}
          alt={show.name}
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
          <p>
            {show.summary}
          </p>
          {show.rating.average && <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating: <span className="text-gray-700">{show.rating.average}/10</span>
          </p>}
        </div>
      </div>

      {casts.length!==0 && <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          {casts.map((cast)=><CastCard
            key={cast.id}
            avatarLink={cast.image.medium || cast.image.original || defaultImg}
            name={cast.name}
          />)}
          
        </div>
      </div>}
    </div>
  );
};

const mapStateToProps=(state: State)=>({
    show: loadShowDetail(state)
})
const mapDispatchToProps={}

const ConnectedComponent= connect(mapStateToProps, mapDispatchToProps)

export default withRouter(ConnectedComponent(ShowDetailPage));
