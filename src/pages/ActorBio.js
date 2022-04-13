import React, {useEffect, useState} from 'react';
import axios from "axios";
import {apiKey} from "../App";
import {useParams} from "react-router-dom";
import Slider from "react-slick";
import ActorCard from "../components/ActorCard";
import FilmCard from "../components/FilmCard";

const ActorBio = () => {
    const [person,setPerson] = useState({})
    const [actorFilms,setActorFilms] = useState([])
    const {actorId} = useParams()
    useEffect(() => {
            axios(`https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}&language=en-US`)
                .then(({data}) => setPerson(data))
            axios(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${apiKey}`)
                .then(({data}) => setActorFilms(data.cast))
        }, [])
    console.log(actorFilms)
    console.log(person)
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 7,
        autoplay: true,
        speed: 500
    };
    return (
        <div>
            <div className="flex flex-row flex-wrap">
                <div className="basis-1/3 p-10 "


                >
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${person.profile_path}`} alt="" className="resize rounded-md"/>
                </div>
                <div className="basis-1/2">
                    <h1 className="text-4xl m-10">{person.name}</h1>
                    <p className="">{person.biography}</p>

                </div>

            </div>
            <div className="m-5 container">
                <Slider {...settings}>
                    {
                        actorFilms.map(el =>(
                           <FilmCard el={el}/>
                        ))
                    }

                </Slider>
            </div>

        </div>
    );
};

export default ActorBio;