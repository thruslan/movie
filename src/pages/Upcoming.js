import React, {useEffect, useState} from 'react';
import FilmCard from "../components/FilmCard";
import axios from "axios";
import {apiKey} from "../App";

import {POPULAR_API} from "../Private";

const Upcoming = () => {
    const [upcoming,setsUpcoming] = useState([])
    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
            .then(({data})=> setsUpcoming(data.results))
    })
    return (
        <div className="container p-5">
            <h1 className="text-6xl text-left">Upcoming</h1>
            <div className="flex flex-row flex-wrap m-2 ">
                {
                    upcoming.map(el=>(
                        <FilmCard el={el} key={el.id}/>
                    ))
                }
            </div>

        </div>
    );
};

export default Upcoming;