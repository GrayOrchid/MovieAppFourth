import React from 'react';
import Movies from './Movies';
import {motion} from 'framer-motion';
import Favoritemovies from './FavoriteMovies';
const FavoriteMoviesList= ({favoriteMovies,removeFavoriteMovie}) => {
    return (
        <div id='favorite'>
{favoriteMovies.length>0?
               <motion.div>
               <div className="slider-items">
                  <div className="slider-name">Favorite Movies</div>
                  <div className="slider-results">favorites: {favoriteMovies.length}</div>

               </div>
               <div className="slider">
                  {favoriteMovies.map((e,index)=>(
                  < Favoritemovies e={e } removeFavoriteMovie={removeFavoriteMovie} key={index} />
             
                  ))}
               </div>
            </motion.div>:
            <></>}
        </div>
    );
}

export default FavoriteMoviesList;
