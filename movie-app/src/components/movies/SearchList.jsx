import { motion } from 'framer-motion';
import React from 'react';
import Movies from './Movies';

const Searchlist = ({searchMovie,query}) => {
    
    return (
        <motion.div animate={{opacity:1 }}>
            
        <div className="items">
 <div className="block-name">Movies :{query}</div>
 
 </div>

               <div className="movies">
{searchMovie.map((e)=>(
<Movies  e={e}  />
))}

   </div>
</motion.div>
    );
}

export default Searchlist;
