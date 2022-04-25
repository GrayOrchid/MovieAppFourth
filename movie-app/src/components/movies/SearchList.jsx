import { motion } from 'framer-motion';
import React from 'react';
import Movies from './Movies';

const Searchlist = ({searchMovie,query,addFavoriteMovie }) => {
    
    return (
   <div>
      {query?      <motion.div >
       <div className="slider-items">
           <div className="slider-name">Movies: {query} </div>
           <div className="slider-results">results: {searchMovie.length}</div>
        </div>
    
        <div className="slider">
           {searchMovie.map((e,index)=>(
           <Movies key={index} e={e} addFavoriteMovie={addFavoriteMovie}   />
           ))}
        </div>
     </motion.div>:<></>}
   </div>
    );
}

export default Searchlist;
