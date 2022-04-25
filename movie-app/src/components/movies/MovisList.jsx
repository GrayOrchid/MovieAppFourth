import { motion } from 'framer-motion';
import React from 'react';
import Movies from './Movies';

const Movislist = ({filter,addFavoriteMovie}) => {
    return (
        <motion.div id='trands'>
        <div className="slider-items">
           <div className="slider-name">Movie Trends</div>
        </div>
        <div className="slider">
           {filter.map((e,index)=>(
           <Movies  e={e} index={index}  addFavoriteMovie={addFavoriteMovie} key={index}  />
           ))}
        </div>
     </motion.div>
    );
}

export default Movislist;
