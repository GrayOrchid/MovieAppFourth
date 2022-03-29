import React from 'react';
import Movies from './Movies';
import {motion} from 'framer-motion';
const FavoriteMovies = ({favoriteMovies}) => {
    return (
        <div>
{favoriteMovies.length>0?
               <motion.div>
               <div className="slider-items">
                  <div className="slider-name">Favorite Movies</div>
               </div>
               <div className="movies">
                  {favoriteMovies.map((e,index)=>(
                  <Movies e={e } key={index} />
                  ))}
               </div>
            </motion.div>:
            <></>}
        </div>
    );
}

export default FavoriteMovies;
