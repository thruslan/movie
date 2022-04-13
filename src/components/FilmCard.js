import React from 'react';
import {Link} from "react-router-dom";

const FilmCard = ({el}) => {

    return (
        <div className="basis-1/4 flex justify-center items-center flex-col hover:scale-105" key={el.id}>
            <Link to={`/movie/${el.id}`+"-"+ el.title} >
                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_face/${el.poster_path}`} alt=""  className="m-10 resize rounded-md"/>
            </Link>

            <h4 className="text-xl text-center md-2xl">{el.title}</h4>

        </div>
    );
};

export default FilmCard;
