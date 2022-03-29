import { motion } from 'framer-motion';
import React from 'react';
import People from './People';

const Peoplelist = ({peopleArr}) => {
    return (
        <motion.div>
        <div className="slider-items">
           <div className="slider-name">People Trends</div>
        </div>
        <div className="movies">
           {peopleArr.map((e,index)=>(
           <People e={e} key={index} />
           ))}
        </div>
     </motion.div>
    );
}

export default Peoplelist;
