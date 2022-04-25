import React from 'react';
import './burger.css'
const Burger = ({setShow,show,favoriteTvShows,favoriteMovies,setGenreMovies}) => {
    return (
        <div className={show?'burger-menu burger-active':'burger-menu'}  onClick={()=>setShow(false)} >
        
           <div className="burger-body" onClick={(e)=>e.stopPropagation()} >
           <div className="close" onClick={()=>setShow(false)} >X</div>
               <div className="burger-items" >
                  <div className="burger-genres">
                      Genres
                  <div className="burger-genre" onClick={()=>setGenreMovies(28)}>Action</div>
         <div className="burger-genre" onClick={()=>setGenreMovies(35)}>Comedy</div>
         <div className="burger-genre" onClick={()=>setGenreMovies(0)}>All</div>
         <div className="burger-genre" onClick={()=>setGenreMovies(12)}>Adventure </div>
                  </div>
         
               </div>
           </div>
        </div>
    );
}

export default Burger;
