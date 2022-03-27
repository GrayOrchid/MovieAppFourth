import React from 'react';
import TV from './TV';
import { motion } from 'framer-motion';
const Tvlist = ({tvFilter}) => {
    return (
        <motion.div>
            
              <div className="items">
              <div className="block-name">Tv Trends</div>
     
              </div>
         <div className="movies">
         {tvFilter.map((e)=>(
                <TV e={e}/>
                ))}
         </div>
        </motion.div>
    );
}

export default Tvlist;
