import { motion } from 'framer-motion';
import React from 'react';
import FavoriteTv from './FavoriteTv';
import TV from './TV';

const FavoriteTvList = ({favoriteTvShows,removeFavoriteTv}) => {
    return (
        <div id='favorite'>

{favoriteTvShows.length>0?<motion.div>
        <div className="slider-items">
           <div className="slider-name">Favorite Tv</div>
           <div className="slider-results">favorites: {favoriteTvShows.length}</div>
        </div>
        <div className="slider">
          {favoriteTvShows.map((e)=>(
                <FavoriteTv e={e} removeFavoriteTv={removeFavoriteTv}/>
            
            ))}
        </div>
     </motion.div>:<></>}
          
        </div>
    );
}

export default FavoriteTvList;
