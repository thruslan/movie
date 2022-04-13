import React, {useEffect,useState} from 'react';
import axios from "axios";
import {apiKey} from "../App";
import {useParams} from "react-router-dom";
import Slider from "react-slick";
import ActorCard from "../components/ActorCard";


const ActorsPage = () => {
    const [actors,setActors] = useState([])
    const {id:movieId} = useParams()
    useEffect(()=> {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`)
            .then(({data}) => setActors(data?.cast))
    },[])
    console.log(actors)

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 8,
        autoplay: true,
        speed: 500
    };
    return (
        <div className="p-5 container">
            <Slider {...settings}>
                {

                    actors?.map((el) => (
                        <ActorCard el={el}/>
                    ))
                }

            </Slider>



        </div>
    );
};

export default ActorsPage;
