import React, {useEffect, useState} from 'react';
import axios from "axios";
import {apiKey} from "../App";
import {useParams} from "react-router-dom";
import ActorsPage from "./ActorsPage";
import FilmTrailers from "../components/FilmTrailers";


const MovieDetailsPage = () => {
    const [movie,setMovie]=useState({})
    const {id} = useParams()

    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${ apiKey}&language=en-US`)
            .then(({data}) => setMovie(data))
    },[])
    console.log(movie)
    const {
        poster_path,
        backdrop_path,
        title,
        status,
        overview,
        runtime


    }=movie
    const durationTime = Math.floor(runtime / 60) + "Саат" + " " + runtime % 60 + "Мунот"

    return (
        <div className=" p-5 "
        style={{
            background: `linear-gradient(to bottom right, rgba(220.5, 220.5, 150.5, 3), rgba(120.5, 120.5, 120.5, 0.24)), url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}")`,
            height: "100vh"

        }}
        >
           <div className="flex flex-wrap flex-row ">
             <div className="basis-1/2">
                 <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt="" className=' m-10 resize rounded-md'/>
             </div>
             <div className="basis-1/2 text-left">
                 <h1 className='text-4xl'>{title}</h1>
                 <h3 className="text-2xl text-left my-3">{overview}</h3>
                 <h1 className="text-2xl">Time:{durationTime}</h1>


             </div>
               <ActorsPage/>
               <FilmTrailers id={id}/>
           </div>
        </div>
    );
};

export default MovieDetailsPage;