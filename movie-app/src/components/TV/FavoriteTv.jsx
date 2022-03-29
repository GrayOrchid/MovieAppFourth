import { motion } from 'framer-motion';
import React from 'react';
import TV from './TV';

const FavoriteTv = ({favoriteTvShows}) => {
    return (
        <div>

{favoriteTvShows.length>0?<motion.div>
        <div className="slider-items">
           <div className="slider-name">Favorite Tv</div>
        </div>
        <div className="movies">
          {favoriteTvShows.map((e)=>(
                <TV e={e}/>
            ))}
        </div>
     </motion.div>:<></>}
          
        </div>
    );
}

export default FavoriteTv;
