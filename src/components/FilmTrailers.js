import React, {useEffect,useState} from 'react';
import axios from "axios";
import {apiKey} from "../App";
import YouTube from "react-youtube";

const FilmTrailers = ({id}) => {
    const [trsilers,setTrailers] = useState([])

    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
            .then(({data}) => setTrailers(data?.results))
    },[])
    console.log()
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    return (
        <div>
            {
                trsilers?.map(el=>(
                    // <div>
                    //     <iframe width="560" height="315" src={`https://www.youtube.com/embed/${el.key}`}
                    //             title="YouTube video player" frameBorder="0"
                    //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    //             allowFullScreen></iframe>
                    // </div>
                    <YouTube videoId = {`${el.key}`} opts={opts}  />
                ))
            }
        </div>
    );
};

export default FilmTrailers;