import React, {useEffect, useState} from 'react';
import FilmCard from "../components/FilmCard";
import axios from "axios";
import {apiKey} from "../App";

import {POPULAR_API} from "../App";

const Latest = () => {
    const [latest,setsLatest] = useState(null)
    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`)
            .then(({data})=> setsLatest(data))
    })
    return (
        <div className="container p-5">
            <h1 className="text-6xl text-left">Latest</h1>
            <div className="flex flex-row flex-wrap m-2 ">
                {/*{*/}
                {/*    latest.map(el=>(*/}
                {/*        <FilmCard el={el} key={el.id}/>*/}
                {/*    ))*/}
                {/*}*/}
                <div className=" basis-1/4">
                    <h4>{latest?.title}</h4>
                </div>
            </div>

        </div>
    );
};

export default Latest;
