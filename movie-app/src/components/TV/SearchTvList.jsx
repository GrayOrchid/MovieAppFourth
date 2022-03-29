import { motion } from 'framer-motion';
import React from 'react';
import TV from './TV';

const SearchTvlist = ({searchTv,query}) => {
    return (
    <div>
        {query?    <motion.div animate={{opacity:1 }}>
       <div className="slider-items">
           <div className="slider-name">TV: {query}</div>
        </div>
        <div className="movies">
           {searchTv.map((e,index)=>(
           <TV  e={e} key={index}  />
           ))}
        </div>
     </motion.div>:<></>}
    </div>
    );
}

export default SearchTvlist;
