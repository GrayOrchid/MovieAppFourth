import { motion } from 'framer-motion';
import React from 'react';
import Movies from './Movies';

const Searchlist = ({searchMovie,query}) => {
    
    return (
   <div>
      {query?      <motion.div animate={{opacity:1 }}>
       <div className="slider-items">
           <div className="slider-name">Movies: {query}</div>
        </div>
        <div className="movies">
           {searchMovie.map((e,index)=>(
           <Movies key={index} e={e}  />
           ))}
        </div>
     </motion.div>:<></>}
   </div>
    );
}

export default Searchlist;
