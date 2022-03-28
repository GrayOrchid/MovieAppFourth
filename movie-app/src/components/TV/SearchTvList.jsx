import { motion } from 'framer-motion';
import React from 'react';
import TV from './TV';

const SearchTvlist = ({searchTv,query}) => {
    return (
        <motion.div animate={{opacity:1 }}>
        <div className="items">
           <div className="block-name">TV: {query}</div>
        </div>
        <div className="movies">
           {searchTv.map((e)=>(
           <TV  e={e}  />
           ))}
        </div>
     </motion.div>
    );
}

export default SearchTvlist;
