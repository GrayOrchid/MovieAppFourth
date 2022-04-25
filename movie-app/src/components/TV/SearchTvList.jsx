import { motion } from 'framer-motion';
import React from 'react';
import TV from './TV';

const SearchTvlist = ({searchTv,query,addFavoriteTv}) => {
    return (
    <div>
        {query?    <motion.div animate={{opacity:1 }}>
       <div className="slider-items">
           <div className="slider-name">TV: {query} </div>
           <div className="slider-results">results: {searchTv.length}</div>
        </div>
     
        <div className="slider">
           {searchTv.map((e,index)=>(
           <TV  e={e} key={index}   addFavoriteTv={addFavoriteTv} />
           ))}
        </div>
     </motion.div>:<></>}
    </div>
    );
}

export default SearchTvlist;
