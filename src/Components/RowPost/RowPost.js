import React, { useEffect, useState } from 'react';
import Axios from '../../axios';
import { imgUrl,Api_key } from '../../Constants/Constants';
import YouTube from 'react-youtube';
import './RowPost.css';

function RowPost(props) {
  const [Movies, setMovies] = useState([]);
  const [urlid, setUrlId] = useState('');
  useEffect(() => {
    Axios.get(props.URL).then(
      (Response) => {
        setMovies(Response.data.results);
      }
    );
  }, []);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  const handilTrailer = (id)=>{
    Axios.get(`/movie/${id}/videos?api_key=${Api_key}&language=en-US`).then((Response)=>{
        console.log(Response.data.results);
       if(Response.data.results.length!==0){
        setUrlId(Response.data.results[0])
       }
    })
    
  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {Movies.map((obj) => {
          return (
            <img
            onClick={()=>{
                handilTrailer(obj.id)
            }}
              className={ props.isSmall ? 'smallPoster' : 'poster' }
              src={`${imgUrl+obj.backdrop_path}`}
              alt=""
            />
          );
        })}
      </div>
      { urlid &&  <YouTube videoId={urlid.key} opts={opts}  /> }
     </div>
  );
}

export default RowPost;
