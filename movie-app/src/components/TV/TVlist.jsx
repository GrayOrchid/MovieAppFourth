import React from 'react';
import TV from './TV';
import { motion } from 'framer-motion';
const Tvlist = ({tvFilter}) => {
    return (
   <div>
           <motion.div>
        <div className="slider-items">
           <div className="slider-name">Tv Trends</div>
        </div>
        <div className="movies">
           {tvFilter.map((e,index)=>(
           <TV e={e } key={index} />
           ))}
        </div>
     </motion.div>
   </div>
    );
}

export default Tvlist;
