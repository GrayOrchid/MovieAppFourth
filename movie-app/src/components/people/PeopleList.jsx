import { motion } from 'framer-motion';
import React from 'react';
import People from './People';

const Peoplelist = ({peopleArr}) => {


   return (
        <motion.div id='people'>
        <div className="slider-items">
           <div className="slider-name">People Trends</div>
        </div>
        <div className="slider">
           {peopleArr.map((e,index)=>(
           <People e={e} index={index} key={index} />
           ))}
        </div>
     </motion.div>
    );
}

export default Peoplelist;
