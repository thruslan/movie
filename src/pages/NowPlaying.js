import React, {useEffect, useState} from 'react';
import FilmCard from "../components/FilmCard";
import axios from "axios";
import {apiKey} from "../App";


const NowPlaying = () => {
    const [nowPlaying,setsNowPlaying] = useState([])
    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
            .then(({data})=> setsNowPlaying(data.results))
    })
    return (
        <div className="container p-5">
            <h1 className="text-6xl text-left">Now Playing</h1>
            <div className="flex flex-row flex-wrap m-2 ">
                {
                    nowPlaying.map(el=>(
                        <FilmCard el={el} key={el.id}/>
                    ))
                }
            </div>

        </div>
    );
};

export default NowPlaying;
