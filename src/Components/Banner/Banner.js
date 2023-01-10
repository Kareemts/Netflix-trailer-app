import React, { useEffect, useState } from 'react';
import Axios from '../../axios'
import {Api_key,imgUrl} from '../../Constants/Constants'
import './Banner.css';


function Banner() {
    const [Movie, setMovie] = useState()
    useEffect(()=>{
        Axios.get(`trending/all/week?api_key=${Api_key}&language=en-US`).then((Response)=>{
            setMovie(Response.data.results[0])
        })
    },[])
  return (
    <div style={{backgroundImage: `url(${ Movie ? imgUrl+Movie.backdrop_path : ''})`}} className="banner">
      <div className="content">
        <h1 className="title">{Movie ? Movie.title : ''}</h1>
        <div className="banner_buttens">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>

        <h3 className="description">
          {Movie ? Movie.overview : ''}
        </h3>
        <div className="fade_bottom"></div>
      </div>
    </div>
  );
}

export default Banner;
