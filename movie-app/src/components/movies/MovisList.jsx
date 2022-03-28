import { motion } from 'framer-motion';
import React from 'react';
import Movies from './Movies';

const Movislist = ({filter}) => {
    return (
        <motion.div>
        <div className="slider-items">
           <div className="slider-name">Movie Trends</div>
        </div>
        <div className="movies">
           {filter.map((e)=>(
           <Movies  e={e}  />
           ))}
        </div>
     </motion.div>
    );
}

export default Movislist;
