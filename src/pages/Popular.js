import React,{useState,useEffect} from 'react';
import axios from "axios";
import {apiKey} from "../App";

import {POPULAR_API} from "../App";
import FilmCard from "../components/FilmCard";
const Popular = () => {
    const [popularMovie,setPopularMovie]=useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [option,setOption] = useState("ru-RUS")



    const handleChange = (e)=>{
        setOption(e.target.value)
    }
    const pages = []
    for (let i = 1;i<= 20; i++){
        pages.push(i)
    }
    function displpayfilms(el){
        setCurrentPage(el)
    }




    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${option}&page=${currentPage}`)
            .then(({data}) => setPopularMovie(data.results))
            window.scroll(0,0)

    },[currentPage,option])
    console.log(popularMovie)
    return(
        <div className="container p-5">
            <h1 className="text-6xl text-left">Popular Movies</h1>
            <div className="flex flex-row flex-wrap m-2 ">
                <div className="flex w-full items-center justify-between">

                </div>
                {
                    popularMovie.map(el=>(
                        <FilmCard el={el} key={el.id}/>
                    ))
                }
                <div className="pt-6 m-auto">
                    {
                        pages.map(el => (

                            <button key={el} type="button"
                                    onClick={() =>displpayfilms(el)}
                                    className="text-black-700 border border-white-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">

                                {el}</button>
                        ))
                    }
                </div>
            </div>

        </div>
    )
};

export default Popular;
