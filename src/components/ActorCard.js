import React from 'react';
import {Link} from "react-router-dom";

const ActorCard = ({el}) => {
    return (

        //     <img src="https://cnt.mk95.ru/index.php?component=download&file=6678c714abbfbfcd0a158ca618d8b884296c25a4f537103c00d64bb281594425&view=1" alt="">
        <>
            <Link to={`/actors/${el.id}`} >
               {
                el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt="" className='  resize rounded-md'/> :
                    <img src="https://cnt.mk95.ru/index.php?component=download&file=6678c714abbfbfcd0a158ca618d8b884296c25a4f537103c00d64bb281594425&view=1" alt=""/>
               }
            </Link>


            <h4 className="text-white">{el.name}</h4>

        </>


    );
};

export default ActorCard;
