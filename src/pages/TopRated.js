import React, {useEffect, useState} from 'react';
import FilmCard from "../components/FilmCard";
import axios from "axios";
import {apiKey} from "../App";

import {POPULAR_API} from "../App";

const TopRated = () => {
    const [topRated,setsTopRadet] = useState([])
    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
            .then(({data})=> setsTopRadet(data.results))
    })
    return (
        <div className="container p-5">
            <h1 className="text-6xl text-left">Top Rated Movies</h1>
            <div className="flex flex-row flex-wrap m-2 ">
                {
                    topRated.map(el=>(
                        <FilmCard el={el} key={el.id}/>
                    ))
                }
            </div>

        </div>
    );
};

export default TopRated;
