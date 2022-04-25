import {  motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const Movies = (props) => {

    return (

<motion.div layout  
animate={{
x:[-1000,0],
scale: [0,1],
opacity:[0.6,1]
}}
transition={{duration:1}}

>
<div className='item'>
   <Link to={`/movie/${props.e.id}`}>
   <div className='item-img'>
      <motion.img   src={`https://image.tmdb.org/t/p/w500/${props.e.poster_path}`} alt="" />
   </div>
   </Link>
   <div className='item-info'>
      <div >Release: {props.e.release_date}</div>
      <div className='item-name'>{props.e.original_title  }</div>
      <div >Vote: {props.e.vote_average}</div>
      <div>Original Language: {props.e.original_language}</div>
      <div className="add" onClick={()=>props.addFavoriteMovie(props.e)}>ADD</div>
   </div>
</div>
</motion.div >
      
    );
}

export default Movies;
