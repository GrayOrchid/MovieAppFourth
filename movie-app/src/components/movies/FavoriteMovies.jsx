import {  motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const Favoritemovies = (props) => {
    return (
        <div>
            <motion.div layout  
initial={{opacity:0,translateX:-50,translateY:-50}}
animate={{opacity:1,translateX:0,translateY:0}}
transition={{delay:props.index + 0.1}}
id="#favorite"
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
        <div className="add" onClick={()=>props.removeFavoriteMovie(props.e)}>DELETE</div>
   </div>
</div>
</motion.div >
        </div>
    );
}

export default Favoritemovies;
